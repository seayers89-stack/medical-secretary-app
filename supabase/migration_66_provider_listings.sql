-- Veyn: free directory listings for clinics and diagnostic providers.
-- RUN migration_65_provider_role.sql FIRST, on its own, and let it commit —
-- the 'provider' enum value can't be used in the same transaction that adds it.
--
--   provider_profiles   — the account itself (one per provider login).
--   provider_locations  — the listing: one row per site. An account can have
--                         several (chains), each with its own address,
--                         services and insurers.
--
-- Listings are self-declared and reviewed by an admin before going live
-- (status: pending -> approved / rejected). Once approved, the provider's
-- later edits stay live. Approved listings are readable only by logged-in
-- secretaries, consultants and admins; the provider always sees their own.
-- Approving/rejecting is done by admin through a function added in
-- migration_67, so providers can never set status themselves.
-- Run this in the Supabase SQL editor.

-- 1. Let a new provider create their own profile row (same lockdown as
--    migration_40: admin is still never self-assignable).
drop policy "Users can insert their own non-admin profile" on profiles;
create policy "Users can insert their own non-admin profile"
  on profiles for insert
  with check (auth.uid() = id and role in ('secretary', 'consultant', 'provider'));

-- 2. The provider account.
create table provider_profiles (
  profile_id uuid primary key references profiles(id) on delete cascade,
  organisation_name text not null check (char_length(organisation_name) between 1 and 150),
  created_at timestamptz not null default now()
);

alter table provider_profiles enable row level security;

create policy "Providers can read their own account"
  on provider_profiles for select using (auth.uid() = profile_id);

create policy "Admins can read all provider accounts"
  on provider_profiles for select using (is_admin());

create policy "Providers can create their own account"
  on provider_profiles for insert
  with check (
    auth.uid() = profile_id
    and exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'provider')
  );

create policy "Providers can update their own account"
  on provider_profiles for update
  using (auth.uid() = profile_id) with check (auth.uid() = profile_id);

revoke all on provider_profiles from anon;

-- 3. The listings.
create table provider_locations (
  id uuid primary key default gen_random_uuid(),
  provider_id uuid not null references profiles(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 150),
  categories text[] not null default '{}' check (cardinality(categories) between 1 and 10),
  description text check (char_length(description) <= 1500),
  services text[] not null default '{}' check (cardinality(services) <= 60),
  insurers text[] not null default '{}' check (cardinality(insurers) <= 40),
  booking_routes text[] not null default '{}' check (cardinality(booking_routes) <= 10),
  address_line1 text not null check (char_length(address_line1) between 1 and 200),
  address_line2 text check (char_length(address_line2) <= 200),
  town text not null check (char_length(town) between 1 and 100),
  county text check (char_length(county) <= 100),
  postcode text not null check (char_length(postcode) between 5 and 10),
  phone text check (char_length(phone) <= 40),
  email text check (char_length(email) <= 200),
  -- http(s) only: this is rendered as a link, so javascript: etc. must not get in.
  website text check (char_length(website) <= 300 and website ~* '^https?://'),
  opening_hours text check (char_length(opening_hours) <= 600),
  cqc_number text check (char_length(cqc_number) <= 60),
  professional_registration text check (char_length(professional_registration) <= 200),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  admin_notes text,
  approved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  -- A listing nobody can contact is no use to anyone.
  check (coalesce(phone, '') <> '' or coalesce(email, '') <> '')
);

create index provider_locations_status_county_idx on provider_locations (status, county);
create index provider_locations_provider_idx on provider_locations (provider_id);
create index provider_locations_categories_idx on provider_locations using gin (categories);
create index provider_locations_services_idx on provider_locations using gin (services);
create index provider_locations_insurers_idx on provider_locations using gin (insurers);

alter table provider_locations enable row level security;

create policy "Providers can read their own locations"
  on provider_locations for select using (auth.uid() = provider_id);

create policy "Admins can read all locations"
  on provider_locations for select using (is_admin());

create policy "Members can read approved locations"
  on provider_locations for select
  using (
    status = 'approved'
    and exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('secretary', 'consultant'))
  );

create policy "Providers can add their own locations"
  on provider_locations for insert
  with check (
    auth.uid() = provider_id
    and exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'provider')
  );

create policy "Providers can edit their own locations"
  on provider_locations for update
  using (auth.uid() = provider_id) with check (auth.uid() = provider_id);

create policy "Providers can delete their own locations"
  on provider_locations for delete using (auth.uid() = provider_id);

create policy "Admins can delete any location"
  on provider_locations for delete using (is_admin());

-- Column-level grants (same pattern as migration_20): a provider can write the
-- listing's content but never status / admin_notes / approved_at, so they can't
-- approve themselves. New rows therefore always start as 'pending'.
revoke all on provider_locations from anon, authenticated;
grant select, delete on provider_locations to authenticated;
grant insert (
  provider_id, name, categories, description, services, insurers, booking_routes,
  address_line1, address_line2, town, county, postcode, phone, email, website,
  opening_hours, cqc_number, professional_registration
) on provider_locations to authenticated;
grant update (
  name, categories, description, services, insurers, booking_routes,
  address_line1, address_line2, town, county, postcode, phone, email, website,
  opening_hours, cqc_number, professional_registration
) on provider_locations to authenticated;

-- 4. Housekeeping on every update:
--    * keep updated_at current (shown as "last updated" on listings);
--    * if the owner edits a listing an admin rejected, send it back for
--      review rather than leaving it stuck. Only the owner triggers this, so
--      an admin changing a rejected listing's status is unaffected.
create or replace function provider_locations_before_update()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  if old.status = 'rejected' and auth.uid() = old.provider_id then
    new.status := 'pending';
    new.admin_notes := null;
  end if;
  return new;
end;
$$;

create trigger provider_locations_before_update
  before update on provider_locations
  for each row execute function provider_locations_before_update();
