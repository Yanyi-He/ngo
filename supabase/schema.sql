create extension if not exists "pgcrypto";

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  applicant_type text not null check (applicant_type in ('mentor', 'mentee')),
  name text not null,
  email text not null,
  city text,
  language text,
  areas_of_support text,
  needs text,
  availability text,
  background text,
  urgency_level text,
  consent boolean not null default false,
  status text not null default 'submitted' check (status in ('submitted', 'reviewing', 'matched', 'inactive', 'rejected')),
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.mentor_profiles (
  id uuid primary key default gen_random_uuid(),
  application_id uuid references public.volunteer_applications(id) on delete set null,
  name text not null,
  email text not null,
  city text,
  language text,
  areas_of_support text,
  availability text,
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now()
);

create table public.mentee_profiles (
  id uuid primary key default gen_random_uuid(),
  application_id uuid references public.volunteer_applications(id) on delete set null,
  name text not null,
  email text not null,
  city text,
  needs text,
  preferred_language text,
  urgency_level text,
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now()
);

create table public.match_requests (
  id uuid primary key default gen_random_uuid(),
  mentor_id uuid not null references public.mentor_profiles(id) on delete cascade,
  mentee_id uuid not null references public.mentee_profiles(id) on delete cascade,
  status text not null default 'submitted' check (status in ('submitted', 'reviewing', 'matched', 'inactive', 'rejected')),
  admin_notes text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references public.profiles(id) on delete set null,
  title text not null,
  body text not null,
  category text not null,
  status text not null default 'pending' check (status in ('published', 'pending', 'hidden')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  author_id uuid references public.profiles(id) on delete set null,
  body text not null,
  status text not null default 'published' check (status in ('published', 'hidden')),
  created_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null,
  starts_at timestamptz not null,
  location text,
  online_link text,
  capacity integer,
  registration_deadline timestamptz,
  status text not null default 'published' check (status in ('draft', 'published', 'hidden')),
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete set null,
  name text not null,
  email text not null,
  city text,
  preferred_language text,
  consent boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text not null,
  body text not null,
  category text not null,
  source_url text,
  published boolean not null default false,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.chat_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  consent_to_log boolean not null default false,
  topic text,
  created_at timestamptz not null default now()
);

create table public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.chat_sessions(id) on delete cascade,
  role text not null check (role in ('user', 'assistant', 'system')),
  content text not null,
  safety_flags text[],
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

alter table public.profiles enable row level security;
alter table public.volunteer_applications enable row level security;
alter table public.mentor_profiles enable row level security;
alter table public.mentee_profiles enable row level security;
alter table public.match_requests enable row level security;
alter table public.posts enable row level security;
alter table public.comments enable row level security;
alter table public.events enable row level security;
alter table public.event_registrations enable row level security;
alter table public.resources enable row level security;
alter table public.chat_sessions enable row level security;
alter table public.chat_messages enable row level security;

create policy "profiles read own or admin" on public.profiles
  for select using (auth.uid() = id or public.is_admin());

create policy "profiles update own or admin" on public.profiles
  for update using (auth.uid() = id or public.is_admin());

create policy "admins manage volunteer applications" on public.volunteer_applications
  for all using (public.is_admin()) with check (public.is_admin());

create policy "public submit volunteer applications" on public.volunteer_applications
  for insert with check (consent = true);

create policy "admins manage mentor profiles" on public.mentor_profiles
  for all using (public.is_admin()) with check (public.is_admin());

create policy "admins manage mentee profiles" on public.mentee_profiles
  for all using (public.is_admin()) with check (public.is_admin());

create policy "admins manage matches" on public.match_requests
  for all using (public.is_admin()) with check (public.is_admin());

create policy "public read published posts" on public.posts
  for select using (status = 'published' or author_id = auth.uid() or public.is_admin());

create policy "authenticated create posts" on public.posts
  for insert with check (auth.uid() = author_id);

create policy "authors update own posts" on public.posts
  for update using (auth.uid() = author_id or public.is_admin());

create policy "admins delete posts" on public.posts
  for delete using (public.is_admin());

create policy "public read published comments" on public.comments
  for select using (status = 'published' or author_id = auth.uid() or public.is_admin());

create policy "authenticated create comments" on public.comments
  for insert with check (auth.uid() = author_id);

create policy "admins moderate comments" on public.comments
  for update using (public.is_admin());

create policy "public read published events" on public.events
  for select using (status = 'published' or public.is_admin());

create policy "admins manage events" on public.events
  for all using (public.is_admin()) with check (public.is_admin());

create policy "public register for events" on public.event_registrations
  for insert with check (consent = true);

create policy "admins view event registrations" on public.event_registrations
  for select using (public.is_admin());

create policy "public read published resources" on public.resources
  for select using (published = true or public.is_admin());

create policy "admins manage resources" on public.resources
  for all using (public.is_admin()) with check (public.is_admin());

create policy "users create own chat sessions" on public.chat_sessions
  for insert with check (user_id is null or auth.uid() = user_id);

create policy "admins view consented chat sessions" on public.chat_sessions
  for select using (public.is_admin() and consent_to_log = true);

create policy "users create consented chat messages" on public.chat_messages
  for insert with check (
    exists (
      select 1 from public.chat_sessions
      where chat_sessions.id = session_id
        and chat_sessions.consent_to_log = true
        and (chat_sessions.user_id is null or chat_sessions.user_id = auth.uid())
    )
  );

create policy "admins view consented chat messages" on public.chat_messages
  for select using (
    public.is_admin()
    and exists (
      select 1 from public.chat_sessions
      where chat_sessions.id = session_id
        and chat_sessions.consent_to_log = true
    )
  );
