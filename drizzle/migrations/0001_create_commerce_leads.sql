CREATE TABLE public.commerce_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  deleted_at TIMESTAMPTZ,
  state TEXT NOT NULL CHECK (char_length(state) = 2),
  city TEXT NOT NULL CHECK (char_length(city) BETWEEN 2 AND 100),
  category TEXT NOT NULL CHECK (char_length(category) BETWEEN 2 AND 120),
  establishment TEXT NOT NULL CHECK (char_length(establishment) BETWEEN 2 AND 150),
  responsible_name TEXT NOT NULL CHECK (char_length(responsible_name) BETWEEN 2 AND 120),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 10 AND 20),
  email TEXT NOT NULL CHECK (char_length(email) <= 255),
  instagram TEXT CHECK (instagram IS NULL OR char_length(instagram) <= 120),
  utm_source TEXT CHECK (utm_source IS NULL OR char_length(utm_source) <= 120),
  utm_medium TEXT CHECK (utm_medium IS NULL OR char_length(utm_medium) <= 120),
  utm_campaign TEXT CHECK (utm_campaign IS NULL OR char_length(utm_campaign) <= 120),
  utm_content TEXT CHECK (utm_content IS NULL OR char_length(utm_content) <= 120),
  utm_term TEXT CHECK (utm_term IS NULL OR char_length(utm_term) <= 120),
  email_delivery_status TEXT NOT NULL DEFAULT 'pending_configuration' CHECK (email_delivery_status IN ('pending_configuration', 'sent', 'failed'))
);

GRANT ALL ON public.commerce_leads TO service_role;

ALTER TABLE public.commerce_leads ENABLE ROW LEVEL SECURITY;

CREATE INDEX commerce_leads_created_at_idx ON public.commerce_leads (created_at DESC);
CREATE INDEX commerce_leads_city_state_idx ON public.commerce_leads (state, city) WHERE deleted_at IS NULL;
CREATE INDEX commerce_leads_email_delivery_status_idx ON public.commerce_leads (email_delivery_status) WHERE deleted_at IS NULL;