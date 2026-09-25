CREATE TABLE IF NOT EXISTS public.lead_agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  role TEXT NOT NULL DEFAULT 'agent' CHECK (role IN ('admin', 'agent')),
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

REVOKE ALL ON public.lead_agents FROM anon, authenticated;
GRANT ALL ON public.lead_agents TO service_role;
ALTER TABLE public.lead_agents ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS lead_agents_email_idx ON public.lead_agents (lower(email));
