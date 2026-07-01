-- Veyn: support messaging between users (secretaries/consultants) and admin.
-- Each support thread belongs to one user; admin can read and reply to all threads.

create table support_threads (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id) on delete cascade not null,
  subject text not null,
  status text not null default 'open',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table support_messages (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid references support_threads(id) on delete cascade not null,
  sender_id uuid references profiles(id) on delete cascade not null,
  body text not null,
  created_at timestamptz default now()
);

alter table support_threads enable row level security;
alter table support_messages enable row level security;

-- Users can read and create their own threads
create policy "Users can read own support threads"
  on support_threads for select using (auth.uid() = profile_id);
create policy "Users can create support threads"
  on support_threads for insert with check (auth.uid() = profile_id);
create policy "Users can update own support threads"
  on support_threads for update using (auth.uid() = profile_id);

-- Admin can read and update all threads
create policy "Admins can read all support threads"
  on support_threads for select using (is_admin());
create policy "Admins can update all support threads"
  on support_threads for update using (is_admin());

-- Users can read messages in their own threads
create policy "Users can read messages in own threads"
  on support_messages for select using (
    exists (select 1 from support_threads t where t.id = thread_id and t.profile_id = auth.uid())
  );
-- Users can send messages in their own threads
create policy "Users can send messages in own threads"
  on support_messages for insert with check (
    auth.uid() = sender_id and
    exists (select 1 from support_threads t where t.id = thread_id and t.profile_id = auth.uid())
  );

-- Admin can read and send messages in any thread
create policy "Admins can read all support messages"
  on support_messages for select using (is_admin());
create policy "Admins can send messages in any thread"
  on support_messages for insert with check (auth.uid() = sender_id and is_admin());
