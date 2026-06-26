-- Veyn: lets an admin remove a report entry itself (distinct from deleting
-- the underlying post/reply, and distinct from marking it resolved).
-- Run this in the Supabase SQL editor.

create policy "Admins can delete reports"
  on community_reports for delete using (is_admin());
