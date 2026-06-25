-- Veyn: Community board — posts and replies for secretaries to ask
-- questions and compare notes with each other.
-- Run this in the Supabase SQL editor.

create table if not exists community_posts (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  category text not null default 'General',
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists community_replies (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references community_posts(id) on delete cascade,
  profile_id uuid not null references profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

alter table community_posts enable row level security;
alter table community_replies enable row level security;

create policy "Anyone logged in can read posts" on community_posts
  for select using (true);
create policy "Users can create their own posts" on community_posts
  for insert with check (auth.uid() = profile_id);
create policy "Users can delete their own posts" on community_posts
  for delete using (auth.uid() = profile_id);

create policy "Anyone logged in can read replies" on community_replies
  for select using (true);
create policy "Users can create their own replies" on community_replies
  for insert with check (auth.uid() = profile_id);
create policy "Users can delete their own replies" on community_replies
  for delete using (auth.uid() = profile_id);
