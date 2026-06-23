-- Veyn: in-app messaging. Replaces the email-reveal approach — consultants
-- and secretaries message inside Veyn and exchange contact details themselves
-- if they choose to, rather than Veyn handing out email addresses directly.
-- Run this in the Supabase SQL editor.

create table messages (
  id uuid primary key default gen_random_uuid(),
  consultant_id uuid not null references profiles(id) on delete cascade,
  secretary_id uuid not null references profiles(id) on delete cascade,
  sender_id uuid not null references profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

create index messages_thread_idx on messages (consultant_id, secretary_id, created_at);

alter table messages enable row level security;

create policy "Participants can read their messages"
  on messages for select using (auth.uid() = consultant_id or auth.uid() = secretary_id);

-- A thread only exists once an "unlocks" row exists for that consultant/secretary
-- pair (created either by paying per-contact, or — for pass holders — the first
-- time they open a thread, see thread.html).
create policy "Participants can send messages in unlocked threads"
  on messages for insert with check (
    auth.uid() = sender_id
    and (auth.uid() = consultant_id or auth.uid() = secretary_id)
    and exists (
      select 1 from unlocks
      where unlocks.consultant_id = messages.consultant_id
      and unlocks.secretary_id = messages.secretary_id
    )
  );
