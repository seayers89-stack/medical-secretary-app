-- Veyn: close a privilege-escalation gap introduced by migration_19.
-- "Users can update their own profile" (and the insert equivalent) has no
-- column restriction, so without this, any authenticated user could call
-- supabase.from('profiles').update({ is_admin: true }).eq('id', their own id)
-- and grant themselves admin. Column-level REVOKE stops this at the
-- database level regardless of RLS — same pattern already used for 'email'.
-- Run this in the Supabase SQL editor.

revoke insert, update on profiles from anon, authenticated;
grant insert (id, role, first_name, last_name, email) on profiles to authenticated;
grant update (first_name, last_name) on profiles to authenticated;
