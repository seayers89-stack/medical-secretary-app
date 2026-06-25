-- Veyn: secretary premium boost (£8/month) — featured placement and priority
-- ranking in consultant search results. Visibility only, never gates access.
-- Run this in the Supabase SQL editor.

alter table secretary_profiles add column if not exists premium_active boolean not null default false;
alter table secretary_profiles add column if not exists premium_expires_at timestamptz;
