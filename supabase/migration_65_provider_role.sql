-- Veyn: adds 'provider' as a value of user_role — the third account type, for
-- clinics and diagnostic providers (physio, scans, bloods, etc.) who keep a
-- free directory listing.
--
-- Like migration_39 (admin), this must be run as its own statement: Postgres
-- does not allow a newly added enum value to be used in the same transaction
-- that adds it. Run this file on its own, then run migration_66 separately.

alter type user_role add value 'provider';
