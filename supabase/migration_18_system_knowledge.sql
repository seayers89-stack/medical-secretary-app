-- Veyn: "Share your knowledge" — secretaries contribute real working
-- knowledge of PAS/EMR systems, used to improve proficiency quizzes and
-- eventually write Academy guides. Distinct from system_skills_results
-- (the quiz scores) — this is the raw source material.
-- Run this in the Supabase SQL editor.

create table if not exists system_knowledge_submissions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  system_slug text not null,
  system_name_other text,
  years_experience text,
  specialty text,
  sequence_notes text,
  location_notes text,
  failure_points text,
  common_mistakes text,
  terminology_notes text,
  version_notes text,
  created_at timestamptz not null default now()
);

alter table system_knowledge_submissions enable row level security;

create policy "Users can read their own submissions"
  on system_knowledge_submissions for select using (auth.uid() = profile_id);

create policy "Users can create their own submissions"
  on system_knowledge_submissions for insert with check (auth.uid() = profile_id);
