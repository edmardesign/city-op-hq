import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Lead capture for the "Executivo BoraZé! 2026" launch campaign.
 * The lead is always persisted first; the notification email must never be
 * able to discard a registration.
 */
export const EXECUTIVE_CAMPAIGN = "EXECUTIVO BORAZÉ 2026";
const NOTIFICATION_RECIPIENT = "borazebr@gmail.com";

const optionalTrackingValue = z
  .string()
  .trim()
  .max(120)
  .optional()
  .transform((value) => value || null);

const executiveLaunchLeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .pipe(z.string().min(10).max(11)),
  email: z.string().trim().toLowerCase().email().max(255),
  consent: z.literal(true),

  utmSource: optionalTrackingValue,
  utmMedium: optionalTrackingValue,
  utmCampaign: optionalTrackingValue,
  utmContent: optionalTrackingValue,
  utmTerm: optionalTrackingValue,
});

export type ExecutiveLaunchLeadInput = z.input<typeof executiveLaunchLeadSchema>;

type ExecutiveLaunchLead = z.output<typeof executiveLaunchLeadSchema>;

export type EmailDeliveryStatus = "sent" | "pending_configuration" | "failed";

function buildEmailText(data: ExecutiveLaunchLead) {
  const tracking = [
    ["utm_source", data.utmSource],
    ["utm_medium", data.utmMedium],
    ["utm_campaign", data.utmCampaign],
    ["utm_content", data.utmContent],
    ["utm_term", data.utmTerm],
  ]
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const registeredAt = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  return [
    "NOVO CADASTRO — EXECUTIVO BORAZÉ 2026",
    `Nome: ${data.name}`,
    `Telefone: ${data.phone}`,
    `E-mail: ${data.email}`,
    `Data do cadastro: ${registeredAt}`,
    tracking ? `Origem/UTMs:\n${tracking}` : "Origem/UTMs: Não informadas",
  ].join("\n");
}

async function sendExecutiveLeadEmail(data: ExecutiveLaunchLead): Promise<EmailDeliveryStatus> {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const resendApiKey = process.env["RESEND_API_KEY"];
  const emailFrom =
    process.env["EXECUTIVE_LEADS_EMAIL_FROM"] ?? process.env["COMMERCE_LEADS_EMAIL_FROM"];

  // Missing configuration must stay recoverable: the lead is already stored and
  // can be notified again once a verified sender exists.
  if (!lovableApiKey || !resendApiKey || !emailFrom) return "pending_configuration";

  try {
    const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": resendApiKey,
      },
      body: JSON.stringify({
        from: emailFrom,
        to: [NOTIFICATION_RECIPIENT],
        subject: EXECUTIVE_CAMPAIGN,
        text: buildEmailText(data),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Executive launch lead email failed [${response.status}]: ${errorBody}`);
      return "failed";
    }
    return "sent";
  } catch (error) {
    console.error("Executive launch lead email request failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return "failed";
  }
}

export const submitExecutiveLaunchLead = createServerFn({ method: "POST" })
  .inputValidator((data: ExecutiveLaunchLeadInput) => executiveLaunchLeadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: lead, error } = await supabaseAdmin
      .from("executive_launch_leads")
      .insert({
        name: data.name,
        phone: data.phone,
        email: data.email,
        campaign: EXECUTIVE_CAMPAIGN,
        consent: data.consent,
        utm_source: data.utmSource,
        utm_medium: data.utmMedium,
        utm_campaign: data.utmCampaign,
        utm_content: data.utmContent,
        utm_term: data.utmTerm,
      })
      .select("id")
      .single();

    if (error || !lead) {
      console.error("Unable to save executive launch lead", { code: error?.code });
      throw new Error("Não foi possível salvar seu cadastro agora. Tente novamente.");
    }

    const emailStatus = await sendExecutiveLeadEmail(data);
    if (emailStatus !== "pending_configuration") {
      const { error: updateError } = await supabaseAdmin
        .from("executive_launch_leads")
        .update({ email_delivery_status: emailStatus })
        .eq("id", lead.id);
      if (updateError) {
        console.error("Unable to update executive email status", { code: updateError.code });
      }
    }

    return { saved: true, emailStatus };
  });
