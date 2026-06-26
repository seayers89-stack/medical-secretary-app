-- Veyn: some secretaries charge a percentage of the consultant's income
-- rather than an hourly rate. Adds a rate type toggle and percentage field,
-- alongside the existing hourly_rate_min/max.
-- Run this in the Supabase SQL editor.

alter table secretary_profiles add column if not exists rate_type text not null default 'hourly';
alter table secretary_profiles add column if not exists percentage_rate numeric;
