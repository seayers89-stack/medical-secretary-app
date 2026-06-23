-- Veyn: adds a more granular availability start date alongside the existing
-- "Available now" toggle.
-- Run this in the Supabase SQL editor.

alter table secretary_profiles add column if not exists availability_start text;
