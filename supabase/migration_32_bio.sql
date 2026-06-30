-- Veyn: optional short bio (about one paragraph) for both secretaries and
-- consultants. Lives on the shared profiles table since both roles need it.
-- Not part of the signup/registration forms — only editable afterwards via
-- Edit profile.
-- Run this in the Supabase SQL editor.

alter table profiles add column if not exists bio text;
alter table profiles add constraint profiles_bio_length check (char_length(bio) <= 500);

grant select (bio) on profiles to anon, authenticated;
grant update (bio) on profiles to authenticated;
