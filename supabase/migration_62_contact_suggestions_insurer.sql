-- Veyn: allow 'insurer' as a contact_type on contact_suggestions, so
-- secretaries can suggest additions/corrections to the Daily Tools insurer
-- directory (the INSURERS array in account/daily-tools.html), the same way
-- they already can for hospitals and GP practices.
-- Run this in the Supabase SQL editor.

alter table contact_suggestions
  drop constraint contact_suggestions_contact_type_check;

alter table contact_suggestions
  add constraint contact_suggestions_contact_type_check
  check (contact_type in ('hospital', 'gp', 'insurer'));
