-- Veyn: lets the public clinic-directory page (veyn-clinic-directory.html)
-- show how big the directory is, without exposing any listing. Returns only
-- counts of APPROVED listings — no names, addresses or contact details — so
-- it's safe to grant to logged-out visitors. The page's own rule decides
-- whether the numbers are worth showing yet.
--
--   { "listings": 42, "towns": 17, "categories": { "Physiotherapy": 20, ... } }
--
-- security definer: logged-out visitors have no read access to
-- provider_locations (migration_66), and this deliberately doesn't change that.
-- Run this in the Supabase SQL editor (after migration_66).

create or replace function provider_directory_stats()
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'listings', (select count(*) from provider_locations where status = 'approved'),
    'towns', (select count(distinct lower(btrim(town))) from provider_locations where status = 'approved'),
    'categories', coalesce(
      (select jsonb_object_agg(category, n)
         from (select unnest(categories) as category, count(*) as n
                 from provider_locations
                where status = 'approved'
                group by 1) c),
      '{}'::jsonb
    )
  );
$$;

revoke all on function provider_directory_stats() from public;
grant execute on function provider_directory_stats() to anon, authenticated;
