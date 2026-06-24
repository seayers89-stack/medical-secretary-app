-- Veyn: stores the result of the Academy terminology quiz.
-- Run this in the Supabase SQL editor.

alter table secretary_profiles add column if not exists terminology_quiz_score numeric;
alter table secretary_profiles add column if not exists terminology_quiz_passed boolean;
alter table secretary_profiles add column if not exists terminology_quiz_taken_at timestamptz;
