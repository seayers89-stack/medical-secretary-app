-- Veyn: add "radiology" to the fixed set of hospital_departments.department_type
-- values (migration_55_hospital_departments.sql). Postgres names the inline
-- check constraint <table>_<column>_check by default — if this table's
-- constraint was renamed, adjust the name below (check with
-- \d hospital_departments in the SQL editor).
-- Run this in the Supabase SQL editor.

alter table hospital_departments drop constraint hospital_departments_department_type_check;

alter table hospital_departments add constraint hospital_departments_department_type_check
  check (department_type in ('outpatients', 'ward', 'pathology', 'theatre_bookings', 'nurses', 'radiology'));
