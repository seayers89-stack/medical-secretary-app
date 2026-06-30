-- Veyn: tracks each proficiency quiz attempt (terminology quiz, per-system
-- skills quizzes) so secretaries are capped to one attempt per quiz per
-- rolling 24 hours — stops gaming the verified badges by retaking until a
-- passing score lands. Same pattern as typing_test_attempts.
-- Run this in the Supabase SQL editor.

create table if not exists proficiency_quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  quiz_key text not null,
  created_at timestamptz not null default now()
);

create index proficiency_quiz_attempts_profile_idx on proficiency_quiz_attempts (profile_id, quiz_key, created_at);

alter table proficiency_quiz_attempts enable row level security;

create policy "Users can read their own quiz attempts"
  on proficiency_quiz_attempts for select using (auth.uid() = profile_id);

create policy "Users can record their own quiz attempts"
  on proficiency_quiz_attempts for insert with check (auth.uid() = profile_id);
