-- Veyn: initial schema for secretary/consultant profiles
-- Run this in the Supabase SQL editor (Project > SQL Editor > New query)

create type user_role as enum ('secretary', 'consultant');

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role user_role not null,
  first_name text not null,
  last_name text not null,
  created_at timestamptz not null default now()
);

create table secretary_profiles (
  profile_id uuid primary key references profiles(id) on delete cascade,
  years_experience text,
  systems text[],
  specialties text[],
  day_rate numeric
);

create table consultant_profiles (
  profile_id uuid primary key references profiles(id) on delete cascade,
  practice_name text,
  specialty text
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
