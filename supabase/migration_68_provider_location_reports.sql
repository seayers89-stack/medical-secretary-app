-- Veyn: lets secretaries and consultants report a clinic/diagnostic listing
-- that looks wrong (e.g. an insurer or service the clinic doesn't actually
-- offer). Reports go to an admin queue in the "Clinic listings" tab; nothing
-- changes on the listing automatically. One report per person per listing,
-- which also limits spam.
-- Run this in the Supabase SQL editor (after migration_66).

create table provider_location_reports (
  id uuid primary key default gen_random_uuid(),
  location_id uuid not null references provider_locations(id) on delete cascade,
  reporter_id uuid not null references profiles(id) on delete cascade,
  reason text check (char_length(reason) <= 500),
  resolved boolean not null default false,
  created_at timestamptz not null default now(),
  unique (location_id, reporter_id)
);

alter table provider_location_reports enable row level security;

-- Reporters can only file reports against live listings, and can't read
-- anyone's reports back (including their own).
create policy "Members can report approved listings"
  on provider_location_reports for insert
  with check (
    auth.uid() = reporter_id
    and exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('secretary', 'consultant'))
    and exists (select 1 from provider_locations l where l.id = location_id and l.status = 'approved')
  );

create policy "Admins can read listing reports"
  on provider_location_reports for select using (is_admin());

create policy "Admins can resolve listing reports"
  on provider_location_reports for update using (is_admin()) with check (is_admin());

create policy "Admins can delete listing reports"
  on provider_location_reports for delete using (is_admin());

revoke all on provider_location_reports from anon;
