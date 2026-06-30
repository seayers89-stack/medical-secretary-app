-- Veyn: tracks each typing test attempt so we can cap secretaries to 3
-- attempts per rolling 24 hours (stops gaming the verified WPM score by
-- spamming retakes until a high score lands).
-- Run this in the Supabase SQL editor.

create table if not exists typing_test_attempts (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  created_at timestamptz not null default now()
);

create index typing_test_attempts_profile_idx on typing_test_attempts (profile_id, created_at);

alter table typing_test_attempts enable row level security;

create policy "Users can read their own typing test attempts"
  on typing_test_attempts for select using (auth.uid() = profile_id);

create policy "Users can record their own typing test attempts"
  on typing_test_attempts for insert with check (auth.uid() = profile_id);
