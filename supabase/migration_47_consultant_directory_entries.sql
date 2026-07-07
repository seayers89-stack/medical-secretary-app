-- Veyn: secretary-added consultant directory entries, for the searchable
-- consultant lookup (name, specialty, hospitals). This is deliberately
-- first-party/consent-based data (secretaries typing in someone they know) —
-- see docs/phin-data-source.md and docs/hospital-group-directories-tos-findings.md
-- for why importing PHIN/hospital-group consultant data is blocked. Same
-- rationale as migration_30_consultant_hospitals.sql.
-- Run this in the Supabase SQL editor.

create table consultant_directory_entries (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  specialty text,
  hospitals text[],
  website_url text,
  added_by_profile_id uuid not null references profiles(id) on delete cascade,
  possible_match_profile_id uuid references profiles(id) on delete set null,
  flagged_at timestamptz,
  created_at timestamptz not null default now()
);

create index consultant_directory_entries_name_idx
  on consultant_directory_entries (lower(first_name), lower(last_name));

alter table consultant_directory_entries enable row level security;

create policy "Directory entries are publicly readable"
  on consultant_directory_entries for select using (true);

create policy "Secretaries can add directory entries"
  on consultant_directory_entries for insert
  with check (
    auth.uid() = added_by_profile_id
    and exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('secretary', 'admin'))
  );

create policy "Adders can edit their own entries"
  on consultant_directory_entries for update
  using (auth.uid() = added_by_profile_id)
  with check (auth.uid() = added_by_profile_id);

create policy "Adders can delete their own entries"
  on consultant_directory_entries for delete
  using (auth.uid() = added_by_profile_id);

create policy "Admins can update any directory entry"
  on consultant_directory_entries for update using (is_admin()) with check (is_admin());

create policy "Admins can delete any directory entry"
  on consultant_directory_entries for delete using (is_admin());

-- Auto-flag (not auto-claim): when a real consultant signs up whose name
-- exactly matches an unflagged directory entry, silently mark it for admin
-- review. This is never surfaced to the consultant themselves — admin
-- decides whether to merge, ignore, or delete. Security definer so it works
-- without any RLS grant to the new consultant, mirroring is_admin()'s
-- existing pattern.
create or replace function flag_directory_matches_for_new_consultant()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update consultant_directory_entries
  set possible_match_profile_id = new.profile_id, flagged_at = now()
  where possible_match_profile_id is null
    and lower(first_name) = lower((select first_name from profiles where id = new.profile_id))
    and lower(last_name) = lower((select last_name from profiles where id = new.profile_id));
  return new;
end;
$$;

create trigger consultant_profiles_flag_matches
  after insert on consultant_profiles
  for each row execute function flag_directory_matches_for_new_consultant();

-- Moderation: reporting bad/duplicate entries. Dedicated table rather than
-- extending community_reports, which has a hard post/reply-only constraint
-- and whose admin UI is tightly coupled to those two target types.
create table consultant_directory_entry_reports (
  id uuid primary key default gen_random_uuid(),
  entry_id uuid not null references consultant_directory_entries(id) on delete cascade,
  reporter_id uuid not null references profiles(id) on delete cascade,
  reason text,
  resolved boolean not null default false,
  created_at timestamptz not null default now()
);

alter table consultant_directory_entry_reports enable row level security;

create policy "Users can report directory entries"
  on consultant_directory_entry_reports for insert with check (auth.uid() = reporter_id);

create policy "Admins can read all directory entry reports"
  on consultant_directory_entry_reports for select using (is_admin());

create policy "Admins can mark directory entry reports resolved"
  on consultant_directory_entry_reports for update using (is_admin());

create policy "Admins can delete directory entry reports"
  on consultant_directory_entry_reports for delete using (is_admin());
