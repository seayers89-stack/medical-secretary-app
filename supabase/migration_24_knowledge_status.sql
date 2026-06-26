-- Veyn: admin triage for "share your knowledge" submissions — discard a
-- submission entirely, or mark it as already incorporated into a quiz, so
-- whoever's writing quiz questions knows what's already been used.
-- Run this in the Supabase SQL editor.

alter table system_knowledge_submissions
  add column if not exists status text not null default 'pending';

alter table system_knowledge_submissions
  add constraint system_knowledge_submissions_status_check
  check (status in ('pending', 'discarded', 'incorporated'));

create policy "Admins can update knowledge submissions"
  on system_knowledge_submissions for update using (is_admin());

create policy "Admins can delete knowledge submissions"
  on system_knowledge_submissions for delete using (is_admin());
