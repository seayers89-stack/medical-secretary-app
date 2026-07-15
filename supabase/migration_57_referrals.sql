-- Veyn: referral system. Both sides earn £5 account credit once a referred
-- signup fully completes their profile. Credit is spendable as a partial
-- discount at checkout (see create-checkout-session / stripe-webhook).
-- Run this in the Supabase SQL editor.

-- 1. Referral code + attribution on profiles -------------------------------

alter table profiles add column if not exists referral_code text;
alter table profiles add column if not exists referred_by uuid references profiles(id);

-- Auto-generate a unique code for every new profile. Runs as a plain (not
-- security definer) trigger — NEW column assignment bypasses column grants,
-- so no insert grant is needed for this column.
create or replace function generate_referral_code()
returns trigger
language plpgsql
as $$
declare
  candidate text;
  tries int := 0;
begin
  if NEW.referral_code is not null then
    return NEW;
  end if;
  loop
    candidate := upper(substr(md5(random()::text || clock_timestamp()::text), 1, 8));
    exit when not exists (select 1 from profiles where referral_code = candidate);
    tries := tries + 1;
    if tries > 10 then
      raise exception 'Could not generate a unique referral code';
    end if;
  end loop;
  NEW.referral_code := candidate;
  return NEW;
end;
$$;

create or replace trigger set_referral_code
  before insert on profiles
  for each row
  execute function generate_referral_code();

-- Backfill existing accounts.
do $$
declare
  r record;
  candidate text;
begin
  for r in select id from profiles where referral_code is null loop
    loop
      candidate := upper(substr(md5(random()::text || clock_timestamp()::text || r.id::text), 1, 8));
      exit when not exists (select 1 from profiles where referral_code = candidate);
    end loop;
    update profiles set referral_code = candidate where id = r.id;
  end loop;
end $$;

alter table profiles alter column referral_code set not null;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'profiles_referral_code_unique') then
    alter table profiles add constraint profiles_referral_code_unique unique (referral_code);
  end if;
end $$;

-- referral_code is meant to be shared, so it's safe to expose publicly.
-- referred_by is settable once at signup (insert) and never editable after.
grant select (referral_code) on profiles to anon, authenticated;
grant insert (referred_by) on profiles to authenticated;

-- 2. Referral tracking + credit ledger --------------------------------------

create table if not exists referrals (
  id uuid primary key default gen_random_uuid(),
  referrer_id uuid not null references profiles(id) on delete cascade,
  referee_id uuid not null unique references profiles(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'completed')),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

alter table referrals enable row level security;

drop policy if exists "Participants can see their referral" on referrals;
create policy "Participants can see their referral"
  on referrals for select using (auth.uid() = referrer_id or auth.uid() = referee_id);

drop policy if exists "A referee can record who referred them" on referrals;
create policy "A referee can record who referred them"
  on referrals for insert with check (auth.uid() = referee_id);

create table if not exists account_credit_ledger (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  amount_pence integer not null,
  reason text not null check (reason in ('referral_referrer', 'referral_referee', 'spend', 'refund_reversal')),
  related_referral_id uuid references referrals(id),
  stripe_payment_intent_id text,
  created_at timestamptz not null default now()
);

create index if not exists account_credit_ledger_profile_idx on account_credit_ledger (profile_id);

alter table account_credit_ledger enable row level security;

drop policy if exists "Users can see their own credit ledger" on account_credit_ledger;
create policy "Users can see their own credit ledger"
  on account_credit_ledger for select using (auth.uid() = profile_id);

-- No insert/update/delete policies for anon/authenticated: only the
-- security-definer trigger below and service-role edge functions may write.

-- 3. Profile-completion checks + award trigger ------------------------------

create or replace function secretary_profile_is_complete(p secretary_profiles)
returns boolean
language sql
immutable
as $$
  select
    p.region is not null and p.region <> ''
    and p.core_skills is not null and array_length(p.core_skills, 1) > 0
    and p.typing_test_taken_at is not null
    and p.right_to_work is not null
    and p.has_dbs is not null
    and p.availability_type is not null and array_length(p.availability_type, 1) > 0
    and (
      p.hourly_rate is not null
      or p.day_rate is not null
      or p.percentage_rate is not null
      or p.rate_negotiable
    );
$$;

create or replace function consultant_profile_is_complete(p consultant_profiles)
returns boolean
language sql
immutable
as $$
  select
    p.practice_name is not null and p.practice_name <> ''
    and p.specialty is not null and p.specialty <> ''
    and p.hospitals is not null and array_length(p.hospitals, 1) > 0;
$$;

-- Shared award logic: called once a profile transitions into "complete".
-- security definer so it can write to referrals/account_credit_ledger even
-- though the triggering UPDATE/INSERT came straight from the browser.
create or replace function award_referral_credit(p_profile_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  r referrals;
begin
  select * into r from referrals where referee_id = p_profile_id and status = 'pending';
  if not found then
    return;
  end if;

  update referrals set status = 'completed', completed_at = now() where id = r.id;

  insert into account_credit_ledger (profile_id, amount_pence, reason, related_referral_id)
  values
    (r.referrer_id, 500, 'referral_referrer', r.id),
    (r.referee_id, 500, 'referral_referee', r.id);
end;
$$;

create or replace function check_secretary_referral_completion()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if secretary_profile_is_complete(NEW) and (TG_OP = 'INSERT' or not secretary_profile_is_complete(OLD)) then
    perform award_referral_credit(NEW.profile_id);
  end if;
  return NEW;
end;
$$;

create or replace trigger award_referral_credit_secretary
  after insert or update on secretary_profiles
  for each row
  execute function check_secretary_referral_completion();

create or replace function check_consultant_referral_completion()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if consultant_profile_is_complete(NEW) and (TG_OP = 'INSERT' or not consultant_profile_is_complete(OLD)) then
    perform award_referral_credit(NEW.profile_id);
  end if;
  return NEW;
end;
$$;

create or replace trigger award_referral_credit_consultant
  after insert or update on consultant_profiles
  for each row
  execute function check_consultant_referral_completion();
