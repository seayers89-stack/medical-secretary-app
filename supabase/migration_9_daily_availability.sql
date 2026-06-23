-- Veyn: adds day-of-week availability plus evening/weekend flags.
-- Run this in the Supabase SQL editor.

alter table secretary_profiles add column if not exists daily_availability text[];
alter table secretary_profiles add column if not exists available_evenings boolean;
alter table secretary_profiles add column if not exists available_weekends boolean;
