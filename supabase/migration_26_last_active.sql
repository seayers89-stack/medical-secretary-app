-- Veyn: "last active" marker, updated whenever a logged-in user loads an
-- account page (via account-nav.js), shown on search results and profile
-- views so consultants/secretaries can see how recently someone's been on.
-- Run this in the Supabase SQL editor.

alter table profiles add column if not exists last_active_at timestamptz;

grant update (last_active_at) on profiles to authenticated;
grant select (last_active_at) on profiles to anon, authenticated;
