-- Veyn: "I can provide references" self-reported flag, alongside the other
-- verification fields (right to work, CV, DBS).
-- Run this in the Supabase SQL editor.

alter table secretary_profiles add column if not exists can_provide_references boolean;
