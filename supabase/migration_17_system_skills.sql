-- Veyn: per-system proficiency quiz results (Carebit, Semble, etc.) — a
-- separate verified credential from the systems a secretary self-reports.
-- Run this in the Supabase SQL editor.

create table if not exists system_skills_results (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  system_slug text not null,
  quiz_score numeric not null,
  quiz_passed boolean not null,
  completed_at timestamptz not null default now(),
  unique (profile_id, system_slug)
);

alter table system_skills_results enable row level security;

create policy "System skills results are publicly readable"
  on system_skills_results for select using (true);

create policy "Users can insert their own system skills results"
  on system_skills_results for insert with check (auth.uid() = profile_id);

create policy "Users can update their own system skills results"
  on system_skills_results for update using (auth.uid() = profile_id);
