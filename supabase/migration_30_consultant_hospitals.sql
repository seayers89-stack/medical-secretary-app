-- Veyn: consultant-reported hospitals worked at, alongside specialty. This is
-- the safe, consent-based alternative to importing third-party (e.g. PHIN)
-- consultant data — see docs/phin-data-source.md for why that route is
-- blocked. Self-reported data from a consultant's own Veyn account carries
-- no third-party data-licensing risk.
-- Run this in the Supabase SQL editor.

alter table consultant_profiles add column if not exists hospitals text[];
