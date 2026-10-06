-- Veyn: consultant-side tools.
--   saved_billing_codes     — a user's starred CCSD codes ("My codes" in
--                             Daily Tools → Billing codes), with an optional
--                             private note per code. Codes themselves live
--                             in billing-codes-data.js, so ccsd_code is plain
--                             text, not a foreign key.
--   shortlisted_secretaries — secretaries a consultant has bookmarked from
--                             search, without paying to unlock them.
-- Both are private to the owning user.
-- Run this in the Supabase SQL editor.

create table saved_billing_codes (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  ccsd_code text not null,
  note text,
  created_at timestamptz not null default now(),
  unique (profile_id, ccsd_code)
);

alter table saved_billing_codes enable row level security;

create policy "Users can read their own saved codes"
  on saved_billing_codes for select using (auth.uid() = profile_id);

create policy "Users can save codes"
  on saved_billing_codes for insert with check (auth.uid() = profile_id);

create policy "Users can update their own saved codes"
  on saved_billing_codes for update using (auth.uid() = profile_id);

create policy "Users can remove their own saved codes"
  on saved_billing_codes for delete using (auth.uid() = profile_id);

create table shortlisted_secretaries (
  id uuid primary key default gen_random_uuid(),
  consultant_id uuid not null references profiles(id) on delete cascade,
  secretary_id uuid not null references profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (consultant_id, secretary_id)
);

alter table shortlisted_secretaries enable row level security;

create policy "Consultants can read their own shortlist"
  on shortlisted_secretaries for select using (auth.uid() = consultant_id);

create policy "Consultants can add to their shortlist"
  on shortlisted_secretaries for insert with check (auth.uid() = consultant_id);

create policy "Consultants can remove from their shortlist"
  on shortlisted_secretaries for delete using (auth.uid() = consultant_id);
