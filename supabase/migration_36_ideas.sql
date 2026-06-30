-- Veyn: lets secretaries and consultants submit product ideas/suggestions
-- straight to the admin team for review. Visible only to the submitter and
-- to admins — not a public feed like community posts.
-- Run this in the Supabase SQL editor.

create table if not exists ideas (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  body text not null,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  constraint ideas_status_check check (status in ('new', 'reviewed', 'dismissed'))
);

alter table ideas enable row level security;

create policy "Users can read their own ideas"
  on ideas for select using (auth.uid() = profile_id);

create policy "Users can submit their own ideas"
  on ideas for insert with check (auth.uid() = profile_id);

create policy "Admins can read all ideas"
  on ideas for select using (is_admin());

create policy "Admins can update idea status"
  on ideas for update using (is_admin());

create policy "Admins can delete ideas"
  on ideas for delete using (is_admin());
