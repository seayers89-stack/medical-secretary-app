-- Veyn: database trigger that fires the notify-new-message edge function
-- whenever a row is inserted into the messages table.
-- Uses pg_net (enabled by default on Supabase) via the supabase_functions helper.

create or replace function trigger_notify_new_message()
returns trigger language plpgsql security definer as $$
begin
  perform net.http_post(
    url     := 'https://kdknadmgbiebyuqwigfi.supabase.co/functions/v1/notify-new-message',
    headers := jsonb_build_object(
      'Content-Type',  'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtka25hZG1nYmllYnl1cXdpZ2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxODg3NzUsImV4cCI6MjA5Nzc2NDc3NX0.UD1ErrUJGLugmVAbXWqNuFGgT-Bgr3-Ow8x0HdT50NU'
    ),
    body    := jsonb_build_object('record', row_to_json(NEW))
  );
  return NEW;
end;
$$;

drop trigger if exists on_new_message_notify on messages;

create trigger on_new_message_notify
  after insert on messages
  for each row
  execute function trigger_notify_new_message();
