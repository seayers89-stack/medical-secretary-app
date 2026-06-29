-- Veyn: languages spoken, alongside the existing English fluency field.
-- Run this in the Supabase SQL editor.

alter table secretary_profiles add column if not exists languages_spoken text[];
alter table secretary_profiles add column if not exists languages_other text;
