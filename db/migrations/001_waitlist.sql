-- Waitlist signups (Railway PostgreSQL)
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  consent_at timestamptz not null default now(),
  client_ip text,
  created_at timestamptz not null default now(),
  confirmation_sent_at timestamptz,
  invited_at timestamptz,
  source text not null default 'landing'
);

create unique index if not exists waitlist_signups_email_lower_idx
  on public.waitlist_signups (lower(email));
