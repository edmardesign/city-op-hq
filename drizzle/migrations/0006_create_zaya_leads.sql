CREATE TABLE IF NOT EXISTS public.zaya_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  deleted_at TIMESTAMPTZ,
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 10 AND 20),
  establishment TEXT NOT NULL CHECK (char_length(establishment) BETWEEN 2 AND 150),
  city TEXT NOT NULL CHECK (char_length(city) BETWEEN 2 AND 100),
  segment TEXT NOT NULL CHECK (char_length(segment) BETWEEN 2 AND 120),
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT
);

REVOKE ALL ON public.zaya_leads FROM anon, authenticated;
GRANT ALL ON public.zaya_leads TO service_role;
ALTER TABLE public.zaya_leads ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS zaya_leads_created_at_idx ON public.zaya_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS zaya_leads_city_idx ON public.zaya_leads (city) WHERE deleted_at IS NULL;
