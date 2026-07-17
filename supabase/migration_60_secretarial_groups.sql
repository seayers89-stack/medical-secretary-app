-- Veyn: secretarial groups (agency accounts). A group is a second,
-- parallel hireable entity that sits alongside individual secretary
-- profiles rather than replacing them — every member keeps their own
-- vetted secretary_profiles row, login, and history. See docs/ (or the
-- planning conversation) for the full design rationale.
--
-- Deliberately kept as its own set of tables rather than extending
-- unlocks/messages/ratings — those are live revenue-path tables and this
-- keeps the blast radius of the new feature contained.

create type group_status as enum ('active', 'paused');

create table groups (
  id uuid primary key default gen_random_uuid(),
  -- Nullable + ON DELETE SET NULL (not CASCADE/RESTRICT): the admin is a
  -- normal profile and must remain free to delete their own account via
  -- delete-account (which relies on profiles cascading from auth.users).
  -- Losing the admin pauses the group instead of deleting it or blocking
  -- account deletion — see trg_groups_pause_on_admin_removed below.
  admin_id uuid references profiles(id) on delete set null,
  company_name text not null unique,
  description text,
  rate_type text not null default 'hourly',
  hourly_rate numeric,
  day_rate numeric,
  percentage_rate numeric,
  rate_negotiable boolean not null default false,
  status group_status not null default 'active',
  premium_active boolean not null default false,
  premium_expires_at timestamptz,
  created_at timestamptz not null default now()
);

-- A group with no admin is paused by definition — belt-and-braces on top
-- of create_group/claim_group_admin/the admin-transfer policy, since
-- admin_id can also be nulled out directly by the FK's ON DELETE SET NULL,
-- which bypasses any RLS/application logic.
create or replace function groups_pause_on_admin_removed()
returns trigger
language plpgsql
as $$
begin
  if new.admin_id is null then
    new.status := 'paused';
  end if;
  return new;
end;
$$;

create trigger trg_groups_pause_on_admin_removed
  before insert or update on groups
  for each row execute function groups_pause_on_admin_removed();

create table group_members (
  group_id uuid not null references groups(id) on delete cascade,
  secretary_id uuid not null references profiles(id) on delete cascade,
  role_title text,
  joined_at timestamptz not null default now(),
  primary key (group_id, secretary_id),
  -- Enforces "one group at a time" per secretary.
  unique (secretary_id)
);

create table group_invites (
  token uuid primary key default gen_random_uuid(),
  group_id uuid not null references groups(id) on delete cascade,
  created_by uuid not null references profiles(id) on delete cascade,
  expires_at timestamptz not null default (now() + interval '7 days'),
  max_uses integer not null default 1,
  use_count integer not null default 0,
  revoked boolean not null default false,
  created_at timestamptz not null default now()
);

create table group_unlocks (
  id uuid primary key default gen_random_uuid(),
  consultant_id uuid not null references profiles(id) on delete cascade,
  group_id uuid not null references groups(id) on delete cascade,
  price_paid numeric not null,
  stripe_payment_intent_id text,
  refunded_at timestamptz,
  created_at timestamptz not null default now(),
  unique (consultant_id, group_id)
);

create table group_messages (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references groups(id) on delete cascade,
  consultant_id uuid not null references profiles(id) on delete cascade,
  sender_id uuid not null references profiles(id) on delete cascade,
  body text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index group_messages_thread_idx on group_messages (consultant_id, group_id, created_at);

create table group_ratings (
  id uuid primary key default gen_random_uuid(),
  consultant_id uuid not null references profiles(id) on delete cascade,
  group_id uuid not null references groups(id) on delete cascade,
  rater_id uuid not null references profiles(id) on delete cascade,
  rating smallint not null check (rating between 1 and 5),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (consultant_id, group_id, rater_id)
);

-- Row Level Security -----------------------------------------------------

alter table groups enable row level security;
alter table group_members enable row level security;
alter table group_invites enable row level security;
alter table group_unlocks enable row level security;
alter table group_messages enable row level security;
alter table group_ratings enable row level security;

create policy "Groups are publicly readable"
  on groups for select using (true);

-- Inserts happen only via create_group() (security definer) below, never
-- directly — so no insert policy is granted here.

create policy "Admin can update their own group"
  on groups for update
  using (auth.uid() = admin_id)
  with check (
    -- Explicit handoff: the new admin_id must be null (going dormant) or an
    -- existing member of the group. Prevents an admin handing the group to
    -- an arbitrary, non-member profile.
    admin_id is null
    or exists (
      select 1 from group_members
      where group_members.group_id = groups.id
      and group_members.secretary_id = groups.admin_id
    )
  );

create policy "Group members are publicly readable"
  on group_members for select using (true);

-- Inserts happen only via create_group() / redeem_group_invite() /
-- claim_group_admin() (all security definer) — no direct insert policy.

create policy "Members can leave their group"
  on group_members for delete using (auth.uid() = secretary_id);

create policy "Admins can remove a member from their group"
  on group_members for delete
  using (exists (select 1 from groups where groups.id = group_id and groups.admin_id = auth.uid()));

create policy "Admins can set a member's role title"
  on group_members for update
  using (exists (select 1 from groups where groups.id = group_id and groups.admin_id = auth.uid()));

-- group_invites: no select policy at all. Tokens are opaque bearer values
-- handed out over a link; a client that already has the exact token reads
-- it via redeem_group_invite() (security definer), not a table select, so
-- invites can never be enumerated or browsed.

create policy "Admins can create invites for their group"
  on group_invites for insert
  with check (
    auth.uid() = created_by
    and exists (select 1 from groups where groups.id = group_id and groups.admin_id = auth.uid())
  );

create policy "Admins can revoke their group's invites"
  on group_invites for update
  using (exists (select 1 from groups where groups.id = group_id and groups.admin_id = auth.uid()));

create policy "Consultants can see their own group unlocks"
  on group_unlocks for select using (auth.uid() = consultant_id);

create policy "Group admins can see who unlocked their group"
  on group_unlocks for select
  using (exists (select 1 from groups where groups.id = group_id and groups.admin_id = auth.uid()));

create policy "Consultants can create their own group unlocks"
  on group_unlocks for insert with check (auth.uid() = consultant_id);

create policy "Group thread participants can read messages"
  on group_messages for select
  using (
    auth.uid() = consultant_id
    or exists (select 1 from groups where groups.id = group_id and groups.admin_id = auth.uid())
  );

create policy "Group thread participants can send messages in unlocked threads"
  on group_messages for insert
  with check (
    auth.uid() = sender_id
    and (
      auth.uid() = consultant_id
      or exists (select 1 from groups where groups.id = group_id and groups.admin_id = auth.uid())
    )
    and exists (
      select 1 from group_unlocks
      where group_unlocks.consultant_id = group_messages.consultant_id
      and group_unlocks.group_id = group_messages.group_id
      and group_unlocks.refunded_at is null
    )
  );

create policy "Group thread participants can mark messages as read"
  on group_messages for update
  using (
    auth.uid() = consultant_id
    or exists (select 1 from groups where groups.id = group_id and groups.admin_id = auth.uid())
  )
  with check (
    auth.uid() = consultant_id
    or exists (select 1 from groups where groups.id = group_id and groups.admin_id = auth.uid())
  );

create policy "Group ratings are publicly readable"
  on group_ratings for select using (true);

create policy "Users can rate a group after contact is made"
  on group_ratings for insert
  with check (
    auth.uid() = rater_id
    and (
      auth.uid() = consultant_id
      or exists (select 1 from groups where groups.id = group_id and groups.admin_id = auth.uid())
    )
    and exists (
      select 1 from group_unlocks
      where group_unlocks.consultant_id = group_ratings.consultant_id
      and group_unlocks.group_id = group_ratings.group_id
    )
  );

create policy "Users can update their own group rating"
  on group_ratings for update using (auth.uid() = rater_id);

-- Functions ----------------------------------------------------------------

-- Atomically creates a group and adds the caller as its founding admin +
-- member. Security definer so the "not already in a group" check and both
-- inserts happen as one transaction, rather than two separate client calls
-- that could race or partially fail.
create or replace function create_group(
  p_company_name text,
  p_description text,
  p_rate_type text,
  p_hourly_rate numeric,
  p_day_rate numeric,
  p_percentage_rate numeric,
  p_rate_negotiable boolean
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_group_id uuid;
begin
  if exists (select 1 from group_members where secretary_id = auth.uid()) then
    raise exception 'You are already in a group';
  end if;

  insert into groups (admin_id, company_name, description, rate_type, hourly_rate, day_rate, percentage_rate, rate_negotiable)
  values (auth.uid(), p_company_name, p_description, p_rate_type, p_hourly_rate, p_day_rate, p_percentage_rate, p_rate_negotiable)
  returning id into v_group_id;

  insert into group_members (group_id, secretary_id) values (v_group_id, auth.uid());

  return v_group_id;
end;
$$;

grant execute on function create_group(text, text, text, numeric, numeric, numeric, boolean) to authenticated;

-- Redeems an invite link for the currently logged-in secretary. Security
-- definer so the token lookup, the "one group at a time" check, and the
-- membership insert + use-count increment all happen atomically without
-- ever exposing group_invites rows to the client directly.
create or replace function redeem_group_invite(p_token uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_group_id uuid;
begin
  if exists (select 1 from group_members where secretary_id = auth.uid()) then
    raise exception 'You are already in a group';
  end if;

  select group_id into v_group_id from group_invites
  where token = p_token
  and not revoked
  and expires_at > now()
  and use_count < max_uses;

  if v_group_id is null then
    raise exception 'This invite link is invalid or has expired';
  end if;

  insert into group_members (group_id, secretary_id) values (v_group_id, auth.uid());
  update group_invites set use_count = use_count + 1 where token = p_token;

  return v_group_id;
end;
$$;

grant execute on function redeem_group_invite(uuid) to authenticated;

-- Lets any current member of a paused (admin-less) group opt in to become
-- its new admin. Nobody is auto-promoted — this only ever runs when a
-- member explicitly requests it.
create or replace function claim_group_admin(p_group_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (select 1 from group_members where group_id = p_group_id and secretary_id = auth.uid()) then
    raise exception 'You are not a member of this group';
  end if;

  update groups set admin_id = auth.uid(), status = 'active'
  where id = p_group_id and admin_id is null;

  if not found then
    raise exception 'This group already has an admin';
  end if;
end;
$$;

grant execute on function claim_group_admin(uuid) to authenticated;
