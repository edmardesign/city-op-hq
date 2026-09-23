CREATE TABLE public.executive_launch_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  deleted_at TIMESTAMPTZ,
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 10 AND 20),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 5 AND 255),
  campaign TEXT NOT NULL DEFAULT 'EXECUTIVO BORAZÉ 2026',
  consent BOOLEAN NOT NULL DEFAULT false,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  email_delivery_status TEXT NOT NULL DEFAULT 'pending_configuration'
    CHECK (email_delivery_status IN ('pending_configuration', 'sent', 'failed'))
);

REVOKE ALL ON public.executive_launch_leads FROM anon, authenticated;

GRANT ALL ON public.executive_launch_leads TO service_role;

ALTER TABLE public.executive_launch_leads ENABLE ROW LEVEL SECURITY;

CREATE INDEX executive_launch_leads_created_at_idx ON public.executive_launch_leads (created_at DESC);
CREATE INDEX executive_launch_leads_email_delivery_status_idx ON public.executive_launch_leads (email_delivery_status) WHERE deleted_at IS NULL;