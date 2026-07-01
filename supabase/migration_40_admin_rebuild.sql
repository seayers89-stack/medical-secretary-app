-- Veyn: rebuilds admin as its own account type (role = 'admin') instead of
-- flags layered on top of a secretary/consultant profile.
--
-- Run this AFTER migration_39_admin_role.sql has been run and committed on
-- its own.

-- 1. Wipe every existing admin/superadmin grant. Nobody currently has
--    role = 'admin' (that value didn't exist until migration_39), so this
--    just clears the old flag-based grants — those accounts keep their
--    normal secretary/consultant profile and data, they just lose admin
--    access.
update profiles set is_admin = false, is_super_admin = false;

-- 2. Admin status is now purely role-based. is_super_admin is kept as a
--    column (now only meaningful on rows where role = 'admin') to mark the
--    permanent superuser who can manage other admins.
create or replace function is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select coalesce((select p.role = 'admin' from profiles p where p.id = auth.uid()), false);
$$;

create or replace function is_super_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select coalesce((select p.role = 'admin' and p.is_super_admin from profiles p where p.id = auth.uid()), false);
$$;

-- 3. Lock down self-signup so a normal user can never insert role = 'admin'
--    for themselves. Admin profile rows are only ever created by the
--    admin-invite edge function, which uses the service_role key and
--    bypasses RLS entirely.
drop policy "Users can insert their own profile" on profiles;
create policy "Users can insert their own non-admin profile"
  on profiles for insert with check (auth.uid() = id and role in ('secretary', 'consultant'));

-- 4. set_admin_status() granted admin via the old flag mechanism — no
--    longer how admin access works, so it's removed. Admin grants/revokes
--    now go through the admin-invite / admin-revoke edge functions only.
drop function if exists set_admin_status(uuid, boolean);

-- 5. list_profiles_for_admin() now lists admin-role accounts directly.
drop function if exists list_profiles_for_admin();
create or replace function list_profiles_for_admin()
returns table(id uuid, first_name text, last_name text, email text, is_super_admin boolean, created_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not is_super_admin() then
    raise exception 'Only super admins can list admin accounts';
  end if;
  return query
    select p.id, p.first_name, p.last_name, p.email, p.is_super_admin, p.created_at
    from profiles p
    where p.role = 'admin'
    order by p.created_at desc;
end;
$$;

-- 6. The "Veyn Staff" badge is now just every admin-role account.
create or replace function staff_profile_ids()
returns setof uuid
language sql
security definer
set search_path = public
stable
as $$
  select id from profiles where role = 'admin';
$$;
