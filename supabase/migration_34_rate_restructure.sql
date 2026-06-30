-- Veyn: simplify secretary rate fields — a single hourly rate instead of a
-- min/max range, plus a day rate option and a "rate negotiable" flag.
-- Run this in the Supabase SQL editor.

alter table secretary_profiles add column if not exists hourly_rate numeric;
alter table secretary_profiles add column if not exists day_rate numeric;
alter table secretary_profiles add column if not exists rate_negotiable boolean not null default false;

-- Backfill: collapse the old min/max range into a single midpoint value.
update secretary_profiles
set hourly_rate = round(((hourly_rate_min + hourly_rate_max) / 2.0)::numeric, 2)
where hourly_rate_min is not null and hourly_rate_max is not null;

alter table secretary_profiles drop column if exists hourly_rate_min;
alter table secretary_profiles drop column if exists hourly_rate_max;
