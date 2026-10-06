-- Veyn: lets an admin list every registered clinic / diagnostic provider
-- account, including ones that haven't added a listing yet (the "Clinic
-- listings" tab only shows accounts that have). Returns the login email too,
-- which isn't readable through ordinary table queries (see migration_3), so
-- this is a security definer function that checks the caller is an admin.
-- Same idea as the admin lists for secretaries and consultants.
-- Run this in the Supabase SQL editor (after migration_66).

create or replace function admin_list_providers()
returns table (
  profile_id uuid,
  first_name text,
  last_name text,
  email text,
  created_at timestamptz,
  last_active_at timestamptz,
  organisation_name text,
  listings_total bigint,
  listings_pending bigint,
  listings_approved bigint,
  listings_rejected bigint
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not is_admin() then
    raise exception 'Only admins can list clinic accounts';
  end if;

  return query
  select
    p.id,
    p.first_name,
    p.last_name,
    p.email,
    p.created_at,
    p.last_active_at,
    pp.organisation_name,
    count(l.id),
    count(l.id) filter (where l.status = 'pending'),
    count(l.id) filter (where l.status = 'approved'),
    count(l.id) filter (where l.status = 'rejected')
  from profiles p
  left join provider_profiles pp on pp.profile_id = p.id
  left join provider_locations l on l.provider_id = p.id
  where p.role = 'provider'
  group by p.id, p.first_name, p.last_name, p.email, p.created_at, p.last_active_at, pp.organisation_name
  order by p.created_at desc;
end;
$$;

revoke all on function admin_list_providers() from public, anon;
grant execute on function admin_list_providers() to authenticated;
