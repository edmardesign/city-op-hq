import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const optionalTrackingValue = z
  .string()
  .trim()
  .max(120)
  .optional()
  .transform((value) => value || null);

const zayaLeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .pipe(z.string().min(10).max(11)),
  establishment: z.string().trim().min(2).max(150),
  city: z.string().trim().min(2).max(100),
  segment: z.string().trim().min(2).max(120),
  utmSource: optionalTrackingValue,
  utmMedium: optionalTrackingValue,
  utmCampaign: optionalTrackingValue,
  utmContent: optionalTrackingValue,
  utmTerm: optionalTrackingValue,
});

export type ZayaLeadInput = z.input<typeof zayaLeadSchema>;

export const submitZayaLead = createServerFn({ method: "POST" })
  .inputValidator((input: ZayaLeadInput) => zayaLeadSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("zaya_leads").insert({
      name: data.name,
      phone: data.phone,
      establishment: data.establishment,
      city: data.city,
      segment: data.segment,
      utm_source: data.utmSource,
      utm_medium: data.utmMedium,
      utm_campaign: data.utmCampaign,
      utm_content: data.utmContent,
      utm_term: data.utmTerm,
    });

    if (error) {
      console.error("[Zaya lead] insert failed", error);
      throw new Error("Não foi possível salvar o cadastro.");
    }

    return { saved: true };
  });
