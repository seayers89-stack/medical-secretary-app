-- Veyn: secretary-submitted suggestions for the Business Hub hospital and GP
-- practice directories (hospitals-data.js / gp-practices.json), which are
-- static files, not database tables — this table is just a review queue.
-- An admin reads a suggestion, manually edits the source file if it checks
-- out, then marks it applied. Nothing here writes to the directories
-- automatically.
-- Run this in the Supabase SQL editor.

create table contact_suggestions (
  id uuid primary key default gen_random_uuid(),
  contact_type text not null check (contact_type in ('hospital', 'gp')),
  suggestion_kind text not null check (suggestion_kind in ('addition', 'edit')),
  reference_name text,
  details text not null,
  submitted_by_profile_id uuid not null references profiles(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'applied', 'dismissed')),
  admin_notes text,
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

alter table contact_suggestions enable row level security;

create policy "Users can read their own suggestions"
  on contact_suggestions for select using (auth.uid() = submitted_by_profile_id);

create policy "Admins can read all suggestions"
  on contact_suggestions for select using (is_admin());

create policy "Users can submit suggestions"
  on contact_suggestions for insert with check (auth.uid() = submitted_by_profile_id);

create policy "Admins can update suggestions"
  on contact_suggestions for update using (is_admin());

create policy "Admins can delete suggestions"
  on contact_suggestions for delete using (is_admin());
