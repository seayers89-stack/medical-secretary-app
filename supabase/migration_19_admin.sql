-- Veyn: admin area for Veyn staff — view reported community content and
-- "share your knowledge" submissions. No self-serve sign-up for this: after
-- running this migration, grant access manually per person with:
--   update profiles set is_admin = true where id = '<their auth user id>';

alter table profiles add column if not exists is_admin boolean not null default false;

alter table community_reports add column if not exists resolved boolean not null default false;

-- is_admin is deliberately NOT added to the public column grant on profiles
-- (same reasoning as the 'email' column) — it shouldn't be readable by an
-- arbitrary authenticated user just by querying the table. This function
-- runs with definer (elevated) rights so it can check the column itself,
-- while only ever exposing a single boolean about the calling user.
create or replace function is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select coalesce((select p.is_admin from profiles p where p.id = auth.uid()), false);
$$;

grant execute on function is_admin() to authenticated;

-- Admins can read every report (the existing table has no select policy at
-- all otherwise — reports are write-only from a normal user's perspective).
create policy "Admins can read all reports"
  on community_reports for select using (is_admin());

create policy "Admins can mark reports resolved"
  on community_reports for update using (is_admin());

-- Admins can delete any reported post/reply, not just their own.
create policy "Admins can delete any post"
  on community_posts for delete using (is_admin());

create policy "Admins can delete any reply"
  on community_replies for delete using (is_admin());

-- Admins can read every "share your knowledge" submission, not just their own.
create policy "Admins can read all knowledge submissions"
  on system_knowledge_submissions for select using (is_admin());
