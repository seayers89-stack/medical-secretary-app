-- Veyn: simple 5-star mutual rating between a consultant and a secretary —
-- no written review, just a number. Only allowed once contact has actually
-- been made (an unlocks row exists for the pairing), so it can't be used to
-- rate someone you've never actually worked with.
-- Run this in the Supabase SQL editor.

create table if not exists ratings (
  id uuid primary key default gen_random_uuid(),
  consultant_id uuid not null references profiles(id) on delete cascade,
  secretary_id uuid not null references profiles(id) on delete cascade,
  rater_id uuid not null references profiles(id) on delete cascade,
  rating smallint not null check (rating between 1 and 5),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (consultant_id, secretary_id, rater_id)
);

alter table ratings enable row level security;

create policy "Ratings are publicly readable"
  on ratings for select using (true);

create policy "Users can rate after contact is made"
  on ratings for insert with check (
    auth.uid() = rater_id
    and (auth.uid() = consultant_id or auth.uid() = secretary_id)
    and exists (
      select 1 from unlocks
      where unlocks.consultant_id = ratings.consultant_id
      and unlocks.secretary_id = ratings.secretary_id
    )
  );

create policy "Users can update their own rating"
  on ratings for update using (auth.uid() = rater_id);
