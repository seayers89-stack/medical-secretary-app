-- Veyn: paid specialist courses (Academy add-on) — one-off purchase per
-- specialty, unlocking the course content, quiz, and flashcards. Mirrors
-- the existing free training_module_results pattern, plus a purchases table
-- to gate access. Run this in the Supabase SQL editor.

create table if not exists specialist_course_purchases (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  course_slug text not null,
  price_paid numeric not null,
  purchased_at timestamptz not null default now(),
  unique (profile_id, course_slug)
);

alter table specialist_course_purchases enable row level security;

create policy "Users can read their own course purchases"
  on specialist_course_purchases for select using (auth.uid() = profile_id);

create policy "Users can record their own course purchases"
  on specialist_course_purchases for insert with check (auth.uid() = profile_id);

create table if not exists specialist_course_results (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  course_slug text not null,
  quiz_score numeric not null,
  quiz_passed boolean not null,
  completed_at timestamptz not null default now(),
  unique (profile_id, course_slug)
);

alter table specialist_course_results enable row level security;

create policy "Specialist course results are publicly readable"
  on specialist_course_results for select using (true);

create policy "Users can insert their own specialist course results"
  on specialist_course_results for insert with check (auth.uid() = profile_id);

create policy "Users can update their own specialist course results"
  on specialist_course_results for update using (auth.uid() = profile_id);
