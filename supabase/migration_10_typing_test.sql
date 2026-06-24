-- Veyn: stores the result of the Academy typing test, separate from the
-- self-reported typing_speed dropdown — this is what powers the
-- "Skills-Tested" badge (a verified figure, not a claim).
-- Run this in the Supabase SQL editor.

alter table secretary_profiles add column if not exists typing_wpm_verified numeric;
alter table secretary_profiles add column if not exists typing_accuracy_verified numeric;
alter table secretary_profiles add column if not exists typing_test_taken_at timestamptz;
