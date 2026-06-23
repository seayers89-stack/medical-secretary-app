-- Veyn: pay-per-contact unlock system (mock payment for now, Stripe-shaped for later).
-- Run this in the Supabase SQL editor.

-- Needed so an unlocked secretary's email can be shown to the consultant who paid.
alter table profiles add column if not exists email text;

-- Unlimited-unlock passes (2-week / 1-month / 6-month), per the pricing page.
alter table consultant_profiles add column if not exists pass_type text;
alter table consultant_profiles add column if not exists pass_expires_at timestamptz;

-- One row per consultant->secretary unlock (the £12 pay-per-contact action).
create table unlocks (
  id uuid primary key default gen_random_uuid(),
  consultant_id uuid not null references profiles(id) on delete cascade,
  secretary_id uuid not null references profiles(id) on delete cascade,
  price_paid numeric not null,
  created_at timestamptz not null default now(),
  unique (consultant_id, secretary_id)
);

alter table unlocks enable row level security;

create policy "Consultants can see their own unlocks"
  on unlocks for select using (auth.uid() = consultant_id);

create policy "Secretaries can see who unlocked them"
  on unlocks for select using (auth.uid() = secretary_id);

create policy "Consultants can create their own unlocks"
  on unlocks for insert with check (auth.uid() = consultant_id);

-- IMPORTANT: 'email' must never be readable through the public "profiles are
-- publicly readable" policy (RLS is row-level, not column-level, so the only
-- way to keep email private while still letting everyone browse profiles is
-- to revoke column access directly and hand it out only through the
-- SECURITY DEFINER function below).
revoke select on profiles from anon, authenticated;
grant select (id, role, first_name, last_name, created_at) on profiles to anon, authenticated;

create or replace function get_secretary_email(p_secretary_id uuid)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  has_access boolean;
  result text;
begin
  select exists (
    select 1 from unlocks
    where consultant_id = auth.uid() and secretary_id = p_secretary_id
  ) or exists (
    select 1 from consultant_profiles
    where profile_id = auth.uid() and pass_expires_at is not null and pass_expires_at > now()
  ) into has_access;

  if not has_access then
    return null;
  end if;

  select email into result from profiles where id = p_secretary_id;
  return result;
end;
$$;

grant execute on function get_secretary_email(uuid) to authenticated;
