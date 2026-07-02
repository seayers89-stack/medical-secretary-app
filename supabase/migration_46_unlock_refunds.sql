-- Migration 46: Support automatic refunds for unanswered £12 contact unlocks.
--
-- Adds stripe_payment_intent_id so the check-refunds function can issue refunds,
-- and refunded_at so we can mark threads as closed without deleting the audit record.

alter table unlocks
  add column if not exists stripe_payment_intent_id text,
  add column if not exists refunded_at timestamptz;

-- Update the messages INSERT policy to block sending in refunded threads.
-- Consultants and secretaries cannot send new messages once an unlock is refunded.
drop policy if exists "Participants can send messages in unlocked threads" on messages;

create policy "Participants can send messages in unlocked threads" on messages
  for insert
  with check (
    auth.uid() = sender_id
    and (auth.uid() = consultant_id or auth.uid() = secretary_id)
    and exists (
      select 1 from unlocks
      where unlocks.consultant_id = messages.consultant_id
      and unlocks.secretary_id = messages.secretary_id
      and unlocks.refunded_at is null
    )
  );
