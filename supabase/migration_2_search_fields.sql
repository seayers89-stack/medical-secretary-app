-- Veyn: adds availability flag for secretary search/filtering.
-- systems and specialties columns already exist on secretary_profiles (text[]).
-- Run this in the Supabase SQL editor.

alter table secretary_profiles
  add column if not exists available boolean not null default true;
