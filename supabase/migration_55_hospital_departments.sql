-- Veyn: per-department contact numbers for hospitals (outpatients, ward,
-- pathology, theatre bookings, nurses), so secretaries have a direct line
-- instead of just the switchboard `contact` field on `hospitals`
-- (migration_49_hospitals_table.sql). Secretaries write entries directly —
-- no admin approval needed to go live, same as consultant_directory_entries
-- (migration_47_consultant_directory_entries.sql) — but unlike that table,
-- the adder has no edit/delete rights of their own: any correction goes
-- through a flag that only admin can act on, since a wrong department
-- number is more operationally risky than a wrong consultant listing.
-- Run this in the Supabase SQL editor.

create table hospital_departments (
  id uuid primary key default gen_random_uuid(),
  hospital_id uuid not null references hospitals(id) on delete cascade,
  department_type text not null check (department_type in ('outpatients', 'ward', 'pathology', 'theatre_bookings', 'nurses')),
  label text,
  phone text not null,
  added_by_profile_id uuid not null references profiles(id) on delete cascade,
  created_at timestamptz not null default now()
);

create index hospital_departments_hospital_idx on hospital_departments (hospital_id);

alter table hospital_departments enable row level security;

create policy "Department contacts are publicly readable"
  on hospital_departments for select using (true);

create policy "Secretaries can add department contacts"
  on hospital_departments for insert
  with check (
    auth.uid() = added_by_profile_id
    and exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('secretary', 'admin'))
    and phone !~ '^\s*(\+?44\s?)?0?7'
  );

create policy "Admins can update department contacts"
  on hospital_departments for update using (is_admin()) with check (is_admin());

create policy "Admins can delete department contacts"
  on hospital_departments for delete using (is_admin());

-- Flag as incorrect: points at a real row, optional suggested correction,
-- open to any authenticated user (not just secretary/admin) since anyone
-- relying on the number might notice it's wrong. Mirrors
-- consultant_directory_entry_reports.
create table hospital_department_flags (
  id uuid primary key default gen_random_uuid(),
  department_id uuid not null references hospital_departments(id) on delete cascade,
  flagged_by_profile_id uuid not null references profiles(id) on delete cascade,
  suggested_correction text,
  resolved boolean not null default false,
  created_at timestamptz not null default now()
);

alter table hospital_department_flags enable row level security;

create policy "Users can flag department contacts"
  on hospital_department_flags for insert with check (auth.uid() = flagged_by_profile_id);

create policy "Admins can read flags"
  on hospital_department_flags for select using (is_admin());

create policy "Admins can resolve flags"
  on hospital_department_flags for update using (is_admin()) with check (is_admin());

create policy "Admins can delete flags"
  on hospital_department_flags for delete using (is_admin());
