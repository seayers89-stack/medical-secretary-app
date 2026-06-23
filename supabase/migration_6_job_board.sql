-- Veyn: job board. A consultant pays the £29 bundle (mock-checkout type=job_posting)
-- to post a role; any secretary who responds is auto-unlocked for messaging with
-- that consultant, covering the "unlimited contact with respondents" promise.
-- Run this in the Supabase SQL editor.

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

-- Lets a secretary auto-unlock messaging with a consultant by responding to
-- that consultant's open job posting (the "unlimited contact" part of the bundle).
create policy "Secretaries can unlock via job response"
  on unlocks for insert with check (
    auth.uid() = secretary_id
    and exists (
      select 1 from job_postings
      where job_postings.consultant_id = unlocks.consultant_id
      and job_postings.status = 'open'
    )
  );
