-- Temporary holding table for job posting drafts during Stripe checkout.
-- Created by create-checkout-session edge function, deleted by stripe-webhook
-- once the job posting is successfully created.
create table if not exists pending_job_drafts (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  draft jsonb not null,
  created_at timestamptz not null default now()
);

alter table pending_job_drafts enable row level security;
-- No user-facing RLS policies — only the service role (edge functions) reads/writes this table.
-- Auto-clean stale drafts older than 24 hours to avoid accumulation.
-- (In practice the webhook deletes them immediately after use.)
