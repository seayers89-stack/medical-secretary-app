-- Veyn: expands the secretary profile to the MVP field set from the
-- registration form spec (personal/location, experience, skills, typing
-- speed, language, verification ticks, availability, hourly rate).
-- Run this in the Supabase SQL editor.

alter table secretary_profiles add column if not exists region text;
alter table secretary_profiles add column if not exists postcode text;
alter table secretary_profiles add column if not exists travel_willingness text;
alter table secretary_profiles add column if not exists years_private_practice text;
alter table secretary_profiles add column if not exists employment_status text[];
alter table secretary_profiles add column if not exists core_skills text[];
alter table secretary_profiles add column if not exists typing_speed text;
alter table secretary_profiles add column if not exists english_fluency text;
alter table secretary_profiles add column if not exists right_to_work boolean;
alter table secretary_profiles add column if not exists has_cv boolean;
alter table secretary_profiles add column if not exists has_dbs boolean;
alter table secretary_profiles add column if not exists dbs_level text;
alter table secretary_profiles add column if not exists work_mode text[];
alter table secretary_profiles add column if not exists availability_type text[];
alter table secretary_profiles add column if not exists hourly_rate_min numeric;
alter table secretary_profiles add column if not exists hourly_rate_max numeric;
