-- Veyn: super admin role — can grant/revoke regular admin access through
-- the app, instead of needing a direct SQL update every time. Regular
-- admins still cannot do this; only a super admin can.
-- Run this in the Supabase SQL editor.

alter table profiles add column if not exists is_super_admin boolean not null default false;
-- Deliberately not added to the insert/update column grants (migration_20's
-- allow-list already excludes anything not explicitly listed), so this stays
-- unwritable by a normal client call, same as is_admin.

-- A super admin counts as an admin too, so granting super admin alone is
-- enough to unlock the moderation area — no need to set both flags.
create or replace function is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select coalesce((select (p.is_admin or p.is_super_admin) from profiles p where p.id = auth.uid()), false);
$$;

create or replace function is_super_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select coalesce((select p.is_super_admin from profiles p where p.id = auth.uid()), false);
$$;

grant execute on function is_super_admin() to authenticated;

-- Lets a super admin grant/revoke regular admin access for any user. Runs
-- with definer rights so it can write is_admin despite the column-level
-- lockdown from migration_20 — but only after checking the caller is
-- actually a super admin.
create or replace function set_admin_status(target_user_id uuid, new_is_admin boolean)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not is_super_admin() then
    raise exception 'Only super admins can change admin status';
  end if;
  update profiles set is_admin = new_is_admin where id = target_user_id;
end;
$$;

grant execute on function set_admin_status(uuid, boolean) to authenticated;

-- Lets a super admin see who currently has admin/super-admin access, since
-- the is_admin/is_super_admin columns aren't otherwise readable via the API.
create or replace function list_profiles_for_admin()
returns table(id uuid, first_name text, last_name text, role user_role, is_admin boolean, is_super_admin boolean)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not is_super_admin() then
    raise exception 'Only super admins can list staff status';
  end if;
  return query
    select p.id, p.first_name, p.last_name, p.role, p.is_admin, p.is_super_admin
    from profiles p
    order by p.created_at desc;
end;
$$;

grant execute on function list_profiles_for_admin() to authenticated;

-- Make the Test Secretary account the first super admin. Remove Jane's
-- regular-admin flag set earlier during testing.
update profiles set is_admin = false where id = '3c724115-3306-404a-be32-b8f88943132a'; -- Jane Whitfield
update profiles set is_super_admin = true where id = '08a86680-a5e2-4fb1-8924-bd0da5a0e52d'; -- Test Secretary
