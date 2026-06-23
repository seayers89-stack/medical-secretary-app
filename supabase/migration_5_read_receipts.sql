-- Veyn: read receipts for the inbox unread-count indicator.
-- Run this in the Supabase SQL editor.

alter table messages add column if not exists read_at timestamptz;

create policy "Participants can mark messages as read"
  on messages for update
  using (auth.uid() = consultant_id or auth.uid() = secretary_id)
  with check (auth.uid() = consultant_id or auth.uid() = secretary_id);
