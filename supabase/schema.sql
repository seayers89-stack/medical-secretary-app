-- Veyn: initial schema for secretary/consultant profiles
-- Run this in the Supabase SQL editor (Project > SQL Editor > New query)

create type user_role as enum ('secretary', 'consultant');

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role user_role not null,
  first_name text not null,
  last_name text not null,
  email text,
  created_at timestamptz not null default now()
);

create table secretary_profiles (
  profile_id uuid primary key references profiles(id) on delete cascade,
  years_experience text,
  systems text[],
  specialties text[],
  day_rate numeric,
  available boolean not null default true,
  region text,
  postcode text,
  travel_willingness text,
  years_private_practice text,
  employment_status text[],
  core_skills text[],
  typing_speed text,
  typing_wpm_verified numeric,
  typing_accuracy_verified numeric,
  typing_test_taken_at timestamptz,
  terminology_quiz_score numeric,
  terminology_quiz_passed boolean,
  terminology_quiz_taken_at timestamptz,
  english_fluency text,
  right_to_work boolean,
  has_cv boolean,
  has_dbs boolean,
  dbs_level text,
  work_mode text[],
  availability_type text[],
  availability_start text,
  daily_availability text[],
  available_evenings boolean,
  available_weekends boolean,
  hourly_rate_min numeric,
  hourly_rate_max numeric,
  premium_active boolean not null default false,
  premium_expires_at timestamptz
);

create table consultant_profiles (
  profile_id uuid primary key references profiles(id) on delete cascade,
  practice_name text,
  specialty text,
  pass_type text,
  pass_expires_at timestamptz
);

create table unlocks (
  id uuid primary key default gen_random_uuid(),
  consultant_id uuid not null references profiles(id) on delete cascade,
  secretary_id uuid not null references profiles(id) on delete cascade,
  price_paid numeric not null,
  created_at timestamptz not null default now(),
  unique (consultant_id, secretary_id)
);

-- Row Level Security: everyone can read profiles (needed for search/browse),
-- but only the owner can create/edit their own row.
alter table profiles enable row level security;
alter table secretary_profiles enable row level security;
alter table consultant_profiles enable row level security;

create policy "Profiles are publicly readable"
  on profiles for select using (true);

create policy "Users can insert their own profile"
  on profiles for insert with check (auth.uid() = id);

create policy "Users can update their own profile"
  on profiles for update using (auth.uid() = id);

create policy "Secretary profiles are publicly readable"
  on secretary_profiles for select using (true);

create policy "Users can insert their own secretary profile"
  on secretary_profiles for insert with check (auth.uid() = profile_id);

create policy "Users can update their own secretary profile"
  on secretary_profiles for update using (auth.uid() = profile_id);

create policy "Consultant profiles are publicly readable"
  on consultant_profiles for select using (true);

create policy "Users can insert their own consultant profile"
  on consultant_profiles for insert with check (auth.uid() = profile_id);

create policy "Users can update their own consultant profile"
  on consultant_profiles for update using (auth.uid() = profile_id);

alter table unlocks enable row level security;

create policy "Consultants can see their own unlocks"
  on unlocks for select using (auth.uid() = consultant_id);

create policy "Secretaries can see who unlocked them"
  on unlocks for select using (auth.uid() = secretary_id);

create policy "Consultants can create their own unlocks"
  on unlocks for insert with check (auth.uid() = consultant_id);

-- 'email' is excluded from the public profiles grant — RLS is row-level only,
-- so column-level privacy needs an explicit column grant. Contact happens via
-- in-app messaging (see "messages" below), not by exposing email addresses.
revoke select on profiles from anon, authenticated;
grant select (id, role, first_name, last_name, created_at) on profiles to anon, authenticated;

create table messages (
  id uuid primary key default gen_random_uuid(),
  consultant_id uuid not null references profiles(id) on delete cascade,
  secretary_id uuid not null references profiles(id) on delete cascade,
  sender_id uuid not null references profiles(id) on delete cascade,
  body text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index messages_thread_idx on messages (consultant_id, secretary_id, created_at);

alter table messages enable row level security;

create policy "Participants can read their messages"
  on messages for select using (auth.uid() = consultant_id or auth.uid() = secretary_id);

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

create policy "Participants can mark messages as read"
  on messages for update
  using (auth.uid() = consultant_id or auth.uid() = secretary_id)
  with check (auth.uid() = consultant_id or auth.uid() = secretary_id);

create table job_postings (
  id uuid primary key default gen_random_uuid(),
  consultant_id uuid not null references profiles(id) on delete cascade,
  title text not null,
  specialty text,
  systems text[],
  description text,
  location text,
  day_rate text,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

create table job_responses (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references job_postings(id) on delete cascade,
  secretary_id uuid not null references profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (job_id, secretary_id)
);

alter table job_postings enable row level security;
alter table job_responses enable row level security;

create policy "Job postings are publicly readable"
  on job_postings for select using (true);

create policy "Consultants can create their own postings"
  on job_postings for insert with check (auth.uid() = consultant_id);

create policy "Consultants can update their own postings"
  on job_postings for update using (auth.uid() = consultant_id);

create policy "Secretaries can respond to job postings"
  on job_responses for insert with check (auth.uid() = secretary_id);

create policy "Participants can see responses"
  on job_responses for select using (
    auth.uid() = secretary_id
    or auth.uid() = (select consultant_id from job_postings where id = job_id)
  );

create policy "Secretaries can unlock via job response"
  on unlocks for insert with check (
    auth.uid() = secretary_id
    and exists (
      select 1 from job_postings
      where job_postings.consultant_id = unlocks.consultant_id
      and job_postings.status = 'open'
    )
  );

create table training_module_results (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  module_slug text not null,
  quiz_score numeric not null,
  quiz_passed boolean not null,
  completed_at timestamptz not null default now(),
  unique (profile_id, module_slug)
);

alter table training_module_results enable row level security;

create policy "Training results are publicly readable"
  on training_module_results for select using (true);

create policy "Users can insert their own training results"
  on training_module_results for insert with check (auth.uid() = profile_id);

create policy "Users can update their own training results"
  on training_module_results for update using (auth.uid() = profile_id);

create table community_posts (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id) on delete cascade,
  category text not null default 'General',
  title text not null,
  body text not null,
  is_veyn boolean not null default false,
  created_at timestamptz not null default now(),
  constraint community_posts_author_check check (profile_id is not null or is_veyn)
);

create table community_replies (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references community_posts(id) on delete cascade,
  profile_id uuid not null references profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

alter table community_posts enable row level security;
alter table community_replies enable row level security;

create policy "Anyone logged in can read posts" on community_posts
  for select using (true);
create policy "Users can create their own posts" on community_posts
  for insert with check (auth.uid() = profile_id);
create policy "Users can delete their own posts" on community_posts
  for delete using (auth.uid() = profile_id);

create policy "Anyone logged in can read replies" on community_replies
  for select using (true);
create policy "Users can create their own replies" on community_replies
  for insert with check (auth.uid() = profile_id);
create policy "Users can delete their own replies" on community_replies
  for delete using (auth.uid() = profile_id);

create table community_reports (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references community_posts(id) on delete cascade,
  reply_id uuid references community_replies(id) on delete cascade,
  reporter_id uuid not null references profiles(id) on delete cascade,
  reason text,
  created_at timestamptz not null default now(),
  constraint community_reports_target_check check (post_id is not null or reply_id is not null)
);

alter table community_reports enable row level security;

create policy "Users can report content" on community_reports
  for insert with check (auth.uid() = reporter_id);

create table system_skills_results (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  system_slug text not null,
  quiz_score numeric not null,
  quiz_passed boolean not null,
  completed_at timestamptz not null default now(),
  unique (profile_id, system_slug)
);

alter table system_skills_results enable row level security;

create policy "System skills results are publicly readable"
  on system_skills_results for select using (true);

create policy "Users can insert their own system skills results"
  on system_skills_results for insert with check (auth.uid() = profile_id);

create policy "Users can update their own system skills results"
  on system_skills_results for update using (auth.uid() = profile_id);

create table system_knowledge_submissions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  system_slug text not null,
  system_name_other text,
  years_experience text,
  specialty text,
  sequence_notes text,
  location_notes text,
  failure_points text,
  common_mistakes text,
  terminology_notes text,
  version_notes text,
  created_at timestamptz not null default now()
);

alter table system_knowledge_submissions enable row level security;

create policy "Users can read their own submissions"
  on system_knowledge_submissions for select using (auth.uid() = profile_id);

create policy "Users can create their own submissions"
  on system_knowledge_submissions for insert with check (auth.uid() = profile_id);
