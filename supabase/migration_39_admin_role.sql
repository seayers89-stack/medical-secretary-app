-- Veyn: adds 'admin' as a first-class value of user_role, so an admin
-- account is its own distinct account type rather than a flag bolted onto
-- a secretary or consultant profile.
--
-- This must be run as its own statement/transaction — Postgres does not
-- allow a newly added enum value to be used in the same transaction that
-- adds it. Run this file on its own, then run migration_40 separately.

alter type user_role add value 'admin';
