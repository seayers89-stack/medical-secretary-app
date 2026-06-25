-- Veyn: Community board — reporting posts/replies for moderation.
-- Run this in the Supabase SQL editor.

create table if not exists community_reports (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references community_posts(id) on delete cascade,
  reply_id uuid references community_replies(id) on delete cascade,
  reporter_id uuid not null references profiles(id) on delete cascade,
  reason text,
  created_at timestamptz not null default now(),
  constraint community_reports_target_check check (post_id is not null or reply_id is not null)
);

alter table community_reports enable row level security;

create policy "Users can report content" on community_reports
  for insert with check (auth.uid() = reporter_id);
