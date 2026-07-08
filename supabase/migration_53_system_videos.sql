-- Veyn: admin-managed video links for the per-system guides
-- (account/system-guide.html), replacing the static `videos` array
-- previously hardcoded in account/system-skills-data.js. Plus a review
-- queue for secretary-submitted video recommendations — mirrors
-- migration_50_spelling_terms.sql's suggestion/approval pattern exactly:
-- approving a suggestion is a manual admin action that inserts a proper
-- row into system_videos, a suggestion is never written there
-- automatically, so an unreviewed link never reaches the publicly-readable
-- table.
-- Run this in the Supabase SQL editor.

create table system_videos (
  id uuid primary key default gen_random_uuid(),
  system_slug text not null check (system_slug in ('carebit', 'semble', 'pabau', 'dgl')),
  url text not null,
  label text not null,
  source text not null check (source in ('official', 'practitioner')),
  added_by_profile_id uuid references profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table system_videos enable row level security;

create policy "System videos are publicly readable"
  on system_videos for select using (true);

create policy "Admins can insert system videos"
  on system_videos for insert with check (is_admin());

create policy "Admins can update system videos"
  on system_videos for update using (is_admin()) with check (is_admin());

create policy "Admins can delete system videos"
  on system_videos for delete using (is_admin());

create table system_video_suggestions (
  id uuid primary key default gen_random_uuid(),
  system_slug text not null check (system_slug in ('carebit', 'semble', 'pabau', 'dgl')),
  url text not null,
  label text,
  note text,
  submitted_by_profile_id uuid not null references profiles(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  admin_notes text,
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

alter table system_video_suggestions enable row level security;

create policy "Users can read their own video suggestions"
  on system_video_suggestions for select using (auth.uid() = submitted_by_profile_id);

create policy "Admins can read all video suggestions"
  on system_video_suggestions for select using (is_admin());

create policy "Users can submit video suggestions"
  on system_video_suggestions for insert with check (auth.uid() = submitted_by_profile_id);

create policy "Admins can update video suggestions"
  on system_video_suggestions for update using (is_admin());

create policy "Admins can delete video suggestions"
  on system_video_suggestions for delete using (is_admin());

-- Seed with the videos already found and confirmed safe to publish —
-- official vendor uploads only. The two Semble practitioner-recorded
-- videos found in the same research pass are deliberately NOT seeded here:
-- they still need a human to actually watch them and confirm no
-- patient-identifiable data is visible on screen before going live. Add
-- them via the admin "All videos" tab once that check is done (or resubmit
-- them through the normal suggestion flow).
insert into system_videos (system_slug, url, label, source) values
('pabau', 'https://www.youtube.com/watch?v=_egPW_epzz4', 'Pabau CRM Demo — Practice Management Software Beginner Tutorial', 'official'),
('dgl', 'https://www.youtube.com/watch?v=MDZG2umelio', 'DGL Go Overview Demo', 'official'),
('dgl', 'https://www.youtube.com/playlist?list=PLp4m7yqHdmwaVG3v4pcTqjRxk51NCwKHr', 'Full DGL Practice Manager tutorials playlist', 'official');
