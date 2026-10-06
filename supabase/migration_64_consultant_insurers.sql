-- Veyn: insurers a consultant works with, chosen from the shared list in
-- account/insurers-data.js. Shown on the consultant's profile and used as a
-- filter in Daily Tools -> Find a consultant. Self-declared, so it's a plain
-- text[] like hospitals — no foreign key. Existing consultants default to
-- none listed.
-- Run this in the Supabase SQL editor.

alter table consultant_profiles
  add column insurers text[] not null default '{}';
