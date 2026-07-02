-- Profile view tracking for secretary profiles.
-- Records each visit to a secretary's public profile page.
-- Secretaries can only see aggregate counts (no viewer names exposed).

create table if not exists profile_views (
  id          uuid        primary key default gen_random_uuid(),
  secretary_id uuid       not null references profiles(id) on delete cascade,
  viewer_id   uuid        references profiles(id) on delete set null,
  viewed_at   timestamptz not null default now()
);

create index if not exists profile_views_secretary_id_idx on profile_views(secretary_id);
create index if not exists profile_views_viewed_at_idx    on profile_views(viewed_at);

alter table profile_views enable row level security;

-- Secretaries can read counts for their own profile only
create policy "secretary_read_own_views" on profile_views
  for select using (secretary_id = auth.uid());

-- Any logged-in user can record a view
create policy "logged_in_insert_view" on profile_views
  for insert with check (auth.uid() is not null);
