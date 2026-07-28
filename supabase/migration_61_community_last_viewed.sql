-- Veyn: tracks each user's last visit to the Community tab, so the top nav
-- can show a notification marker when a post or reply has been added since
-- they last looked.
-- Run this in the Supabase SQL editor.

alter table profiles add column if not exists community_last_viewed_at timestamptz;

grant select (community_last_viewed_at) on profiles to anon, authenticated;
grant update (community_last_viewed_at) on profiles to authenticated;
