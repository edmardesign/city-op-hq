import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const optionalValue = z
  .string()
  .trim()
  .max(120)
  .optional()
  .transform((value) => value || null);

const driverDeliveryLeadSchema = z.object({
  state: z
    .string()
    .trim()
    .length(2)
    .transform((value) => value.toUpperCase()),
  city: z.string().trim().min(2).max(100),
  role: z.enum(["mototaxi", "entregador", "ambos"]),
  name: z.string().trim().min(2).max(120),
  phone: z
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .pipe(z.string().min(10).max(11)),
  email: z.string().trim().toLowerCase().email().max(255),
  instagram: z.string().trim().max(120).optional().transform((value) => value || null),

  utmSource: optionalValue,
  utmMedium: optionalValue,
  utmCampaign: optionalValue,
  utmContent: optionalValue,
  utmTerm: optionalValue,
});

export type DriverDeliveryLeadInput = z.input<typeof driverDeliveryLeadSchema>;

type DriverRole = z.output<typeof driverDeliveryLeadSchema>["role"];

const roleLabels: Record<DriverRole, string> = {
  mototaxi: "Mototáxi",
  entregador: "Entregador",
  ambos: "Mototáxi e Entregador",
};

function buildEmailText(data: z.output<typeof driverDeliveryLeadSchema>) {
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
    "NOVO LEAD MOTO TAXI/ENTREGADOR — BORA ZÉ!",
    `Cidade: ${data.city}`,
    `Estado: ${data.state}`,
    `Atuação: ${roleLabels[data.role]}`,
    `Nome: ${data.name}`,
    `WhatsApp: ${data.phone}`,
    `E-mail: ${data.email}`,
    `Instagram: ${data.instagram ?? "Não informado"}`,
    tracking ? `Origem/UTMs:\n${tracking}` : "Origem/UTMs: Não informadas",
  ].join("\n");
}

async function sendLeadEmail(
  data: z.output<typeof driverDeliveryLeadSchema>,
): Promise<"sent" | "pending_configuration" | "failed"> {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const resendApiKey = process.env["RESEND_API_KEY"];
  const emailFrom = process.env["COMMERCE_LEADS_EMAIL_FROM"];
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
        to: ["borazebr@gmail.com"],
        subject: `LEAD MOTO TAXI/ENTREGADOR - ${data.city.toLocaleUpperCase("pt-BR")}`,
        text: buildEmailText(data),
      }),
    });
    if (!response.ok) {
      console.error("Driver and delivery lead email failed", { status: response.status });
      return "failed";
    }
    return "sent";
  } catch (error) {
    console.error("Driver and delivery lead email request failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return "failed";
  }
}

export const submitDriverDeliveryLead = createServerFn({ method: "POST" })
  .inputValidator((data: DriverDeliveryLeadInput) => driverDeliveryLeadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: lead, error } = await supabaseAdmin
      .from("driver_delivery_leads")
      .insert({
        state: data.state,
        city: data.city,
        role: data.role,
        name: data.name,
        phone: data.phone,
        email: data.email,
        instagram: data.instagram,
        utm_source: data.utmSource,
        utm_medium: data.utmMedium,
        utm_campaign: data.utmCampaign,
        utm_content: data.utmContent,
        utm_term: data.utmTerm,
      })
      .select("id")
      .single();

    if (error || !lead) {
      console.error("Unable to save driver and delivery lead", { code: error?.code });
      throw new Error("Não foi possível salvar seu cadastro agora. Tente novamente.");
    }

    const emailStatus = await sendLeadEmail(data);
    if (emailStatus !== "pending_configuration") {
      const { error: updateError } = await supabaseAdmin
        .from("driver_delivery_leads")
        .update({ email_delivery_status: emailStatus })
        .eq("id", lead.id);
      if (updateError)
        console.error("Unable to update lead email status", { code: updateError.code });
    }

    return { saved: true, emailStatus, role: data.role, city: data.city };
  });
