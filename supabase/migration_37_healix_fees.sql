-- Veyn: Healix Health Services' published fee schedule (procedure fee +
-- anaesthetic fee per CCSD code), kept in sync monthly by a scheduled
-- GitHub Action that calls Healix's public fee-schedule API directly
-- (see scripts/sync-healix-fees.js). Healix is the only one of the six
-- main UK insurers whose fee schedule is public, has no robots.txt
-- restriction, and has no Terms of Use prohibiting automated access —
-- Bupa, AXA, Vitality, WPA and Aviva were all checked and ruled out.
-- Run this in the Supabase SQL editor.

create table if not exists healix_fees (
  ccsd_code text primary key,
  description text,
  procedure_fee numeric,
  anaesthetic_fee numeric,
  synced_at timestamptz not null default now()
);

alter table healix_fees enable row level security;

create policy "Healix fees are publicly readable"
  on healix_fees for select using (true);

-- No insert/update/delete policies — only the service-role key used by the
-- scheduled sync script (which bypasses RLS) can write to this table.
