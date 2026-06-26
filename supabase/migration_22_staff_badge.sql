-- Veyn: public "Veyn Staff" badge — lets any visitor see which accounts are
-- Veyn admin/super-admin staff, without exposing the underlying is_admin
-- columns directly (those stay locked down per migration_20/21).
-- Run this in the Supabase SQL editor.

create or replace function staff_profile_ids()
returns setof uuid
language sql
security definer
set search_path = public
stable
as $$
  select id from profiles where is_admin or is_super_admin;
$$;

grant execute on function staff_profile_ids() to anon, authenticated;
