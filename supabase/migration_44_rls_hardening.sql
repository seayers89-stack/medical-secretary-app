-- Migration 44: RLS hardening for profile_views
--
-- Fix 1: INSERT must enforce viewer_id = auth.uid().
--   Previously any logged-in user could insert a row with any viewer_id,
--   allowing fake view counts or attribution to another user.
--
-- Fix 2: Column-level security hides viewer_id from authenticated users on SELECT.
--   The RLS policy already restricts rows (secretary sees only their own),
--   but a secretary could still read viewer_id via a direct JS client call.
--   Our privacy policy states viewer identities are never revealed to the secretary,
--   so we enforce this at the column level as well.

-- Fix 1: tighten the INSERT policy
drop policy if exists "logged_in_insert_view" on profile_views;

create policy "logged_in_insert_view" on profile_views
  for insert
  with check (auth.uid() is not null and viewer_id = auth.uid());

-- Fix 2: column-level security — hide viewer_id on SELECT
-- Revoke the default blanket SELECT grant from the authenticated role,
-- then re-grant only the columns the secretary legitimately needs.
revoke select on profile_views from authenticated;
grant select (id, secretary_id, viewed_at) on profile_views to authenticated;
