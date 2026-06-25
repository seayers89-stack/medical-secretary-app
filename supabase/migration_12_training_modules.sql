-- Veyn: tracks completion of the 11 Academy training module quizzes
-- (Training achievements — distinct from the standalone typing/terminology
-- skills tests, which already write to secretary_profiles directly).
-- Run this in the Supabase SQL editor.

create table training_module_results (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  module_slug text not null,
  quiz_score numeric not null,
  quiz_passed boolean not null,
  completed_at timestamptz not null default now(),
  unique (profile_id, module_slug)
);

alter table training_module_results enable row level security;

-- Publicly readable so consultants can see a secretary's completed modules
-- on their profile, same pattern as secretary_profiles.
create policy "Training results are publicly readable"
  on training_module_results for select using (true);

create policy "Users can insert their own training results"
  on training_module_results for insert with check (auth.uid() = profile_id);

create policy "Users can update their own training results"
  on training_module_results for update using (auth.uid() = profile_id);
