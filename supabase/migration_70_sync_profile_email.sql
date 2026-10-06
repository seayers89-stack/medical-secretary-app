-- Veyn: keep profiles.email in step with the login email.
-- profiles.email is a copy of auth.users.email, written once at sign-up
-- (clients can't update it — see migration_20). It's what notification emails
-- and the admin lists read. Until now nobody could change their login email,
-- so the copy never drifted; clinic accounts can now (provider-listing.html),
-- so whenever Supabase Auth completes an email change — i.e. after the user
-- has confirmed it — this copies the new address across.
-- Run this in the Supabase SQL editor.

create or replace function sync_profile_email()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.email is distinct from old.email then
    update public.profiles set email = new.email where id = new.id;
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_user_email_changed on auth.users;
create trigger on_auth_user_email_changed
  after update of email on auth.users
  for each row execute function sync_profile_email();
