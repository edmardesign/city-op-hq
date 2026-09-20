CREATE TABLE public.ambassador_prospects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email TEXT NOT NULL CHECK (char_length(email) <= 255),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 10 AND 20),
  city TEXT NOT NULL CHECK (char_length(city) BETWEEN 2 AND 100),
  state TEXT NOT NULL CHECK (char_length(state) = 2),
  qualification TEXT NOT NULL CHECK (qualification IN ('Sim, tenho disponibilidade.', 'Tenho interesse e consigo me organizar.', 'Preciso entender melhor antes.', 'Hoje não tenho disponibilidade.')),
  branch TEXT NOT NULL CHECK (branch IN ('group', 'executivo')),
  email_delivery_status TEXT NOT NULL DEFAULT 'pending_configuration' CHECK (email_delivery_status IN ('pending_configuration', 'sent', 'failed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  deleted_at TIMESTAMPTZ
);

GRANT ALL ON public.ambassador_prospects TO service_role;

ALTER TABLE public.ambassador_prospects ENABLE ROW LEVEL SECURITY;

CREATE INDEX ambassador_prospects_created_at_idx ON public.ambassador_prospects (created_at DESC);
CREATE INDEX ambassador_prospects_email_delivery_status_idx ON public.ambassador_prospects (email_delivery_status) WHERE deleted_at IS NULL;