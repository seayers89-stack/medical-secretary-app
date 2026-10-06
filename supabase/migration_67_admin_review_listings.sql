-- Veyn: lets an admin approve or reject a clinic/diagnostic listing.
-- Providers have no UPDATE grant on status / admin_notes / approved_at
-- (migration_66), so review goes through this function: it checks the caller
-- is an admin, then sets the status. Rejecting needs a reason, which the
-- provider sees on their listing page.
-- Run this in the Supabase SQL editor (after migration_66).

create or replace function admin_set_location_status(
  p_id uuid,
  p_status text,
  p_notes text default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not is_admin() then
    raise exception 'Only admins can review listings';
  end if;
  if p_status not in ('approved', 'rejected') then
    raise exception 'Status must be approved or rejected';
  end if;
  if p_status = 'rejected' and coalesce(btrim(p_notes), '') = '' then
    raise exception 'Please give a reason when rejecting a listing';
  end if;

  update provider_locations
  set status = p_status,
      admin_notes = case when p_status = 'rejected' then btrim(p_notes) else null end,
      approved_at = case when p_status = 'approved' then now() else null end
  where id = p_id;

  if not found then
    raise exception 'Listing not found';
  end if;
end;
$$;

revoke all on function admin_set_location_status(uuid, text, text) from public, anon;
grant execute on function admin_set_location_status(uuid, text, text) to authenticated;
