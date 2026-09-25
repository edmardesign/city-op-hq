import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const qualificationSchema = z.enum([
  "Sim, tenho disponibilidade.",
  "Tenho interesse e consigo me organizar.",
  "Preciso entender melhor antes.",
  "Hoje não tenho disponibilidade.",
]);

const optionalTrackingValue = z
  .string()
  .trim()
  .max(120)
  .optional()
  .transform((value) => value || null);

const ambassadorLeadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .pipe(z.string().min(10).max(20)),
  city: z.string().trim().min(2).max(100),
  state: z
    .string()
    .trim()
    .length(2)
    .transform((value) => value.toUpperCase()),
  qualification: qualificationSchema,
  website: z.string().max(0),
  utmSource: optionalTrackingValue,
  utmMedium: optionalTrackingValue,
  utmCampaign: optionalTrackingValue,
  utmContent: optionalTrackingValue,
  utmTerm: optionalTrackingValue,
});

export type AmbassadorLeadInput = z.input<typeof ambassadorLeadSchema>;

function buildEmailText(data: z.output<typeof ambassadorLeadSchema>, branch: "executivo" | "group") {
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

  return [
    "NOVO LEAD EMBAIXADOR — BORA ZÉ!",
    `Nome: ${data.name}`,
    `E-mail: ${data.email}`,
    `WhatsApp: ${data.phone}`,
    `Cidade: ${data.city}`,
    `Estado: ${data.state}`,
    `Disponibilidade de capital: ${data.qualification}`,
    `Destino do funil: ${branch === "executivo" ? "Comunidade Executivo" : "Atendente Embaixador"}`,
    tracking ? `Origem/UTMs:\n${tracking}` : "Origem/UTMs: Não informadas",
  ].join("\n");
}

async function sendAmbassadorLeadEmail(
  data: z.output<typeof ambassadorLeadSchema>,
  branch: "executivo" | "group",
): Promise<"sent" | "pending_configuration" | "failed"> {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const resendApiKey = process.env["RESEND_API_KEY"];
  const emailFrom =
    process.env["AMBASSADOR_LEADS_EMAIL_FROM"] ?? process.env["COMMERCE_LEADS_EMAIL_FROM"];

  if (!lovableApiKey || !resendApiKey || !emailFrom) return "pending_configuration";

  try {
    const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      signal: AbortSignal.timeout(10000),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": resendApiKey,
      },
      body: JSON.stringify({
        from: emailFrom,
        to: ["borazebr@gmail.com"],
        subject: `LEAD EMBAIXADOR - ${data.city.toLocaleUpperCase("pt-BR")}`,
        text: buildEmailText(data, branch),
      }),
    });

    if (!response.ok) return "failed";
    return "sent";
  } catch {
    return "failed";
  }
}

export const submitAmbassadorLead = createServerFn({ method: "POST" })
  .inputValidator((data: AmbassadorLeadInput) => ambassadorLeadSchema.parse(data))
  .handler(async ({ data }) => {
    const branch = data.qualification === "Hoje não tenho disponibilidade." ? "executivo" : "group";
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: lead, error } = await supabaseAdmin
      .from("ambassador_prospects")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        state: data.state,
        qualification: data.qualification,
        branch,
        utm_source: data.utmSource,
        utm_medium: data.utmMedium,
        utm_campaign: data.utmCampaign,
        utm_content: data.utmContent,
        utm_term: data.utmTerm,
      })
      .select("id")
      .single();

    if (error || !lead) {
      console.error("Unable to save ambassador prospect", { code: error?.code });
      throw new Error("Não foi possível enviar seus dados agora. Tente novamente.");
    }

    const emailStatus = await sendAmbassadorLeadEmail(data, branch);
    if (emailStatus !== "pending_configuration") {
      const { error: updateError } = await supabaseAdmin
        .from("ambassador_prospects")
        .update({ email_delivery_status: emailStatus })
        .eq("id", lead.id);
      if (updateError) {
        console.error("Unable to update ambassador email status", { code: updateError.code });
      }
    }

    return { branch, emailStatus };
  });
