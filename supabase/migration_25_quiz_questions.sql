-- Veyn: move system proficiency quiz questions into the database, so admins
-- can add new ones (drafted from a "share your knowledge" submission)
-- without editing system-skills-data.js by hand. The existing hardcoded
-- questions in that file stay as-is and are blended with these at quiz time.
-- Run this in the Supabase SQL editor.

create table if not exists system_quiz_questions (
  id uuid primary key default gen_random_uuid(),
  system_slug text not null,
  question text not null,
  correct_answer text not null,
  distractors text[] not null,
  source_submission_id uuid references system_knowledge_submissions(id) on delete set null,
  created_by uuid references profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table system_quiz_questions enable row level security;

create policy "Quiz questions are publicly readable"
  on system_quiz_questions for select using (true);

create policy "Admins can add quiz questions"
  on system_quiz_questions for insert with check (is_admin());

create policy "Admins can update quiz questions"
  on system_quiz_questions for update using (is_admin());

create policy "Admins can delete quiz questions"
  on system_quiz_questions for delete using (is_admin());
