import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { COMMERCE_CATEGORIES } from "@/lib/commerce-categories";

const optionalTrackingValue = z
  .string()
  .trim()
  .max(120)
  .optional()
  .transform((value) => value || null);

const commerceLeadSchema = z
  .object({
    state: z.string().trim().length(2).transform((value) => value.toUpperCase()),
    city: z.string().trim().min(2).max(100),
    category: z.enum(COMMERCE_CATEGORIES),
    categoryOther: z.string().trim().max(120).optional(),
    establishment: z.string().trim().min(2).max(150),
    responsibleName: z.string().trim().min(2).max(120),
    phone: z
      .string()
      .transform((value) => value.replace(/\D/g, ""))
      .pipe(z.string().min(10).max(20)),
    email: z.string().trim().email().max(255),
    instagram: z
      .string()
      .trim()
      .max(120)
      .optional()
      .transform((value) => value || null),
    utmSource: optionalTrackingValue,
    utmMedium: optionalTrackingValue,
    utmCampaign: optionalTrackingValue,
    utmContent: optionalTrackingValue,
    utmTerm: optionalTrackingValue,
  })
  .superRefine((data, context) => {
    if (data.category === "Outro" && (!data.categoryOther || data.categoryOther.length < 2)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["categoryOther"],
        message: "Informe o tipo do seu negócio.",
      });
    }
  });

export type CommerceLeadInput = z.input<typeof commerceLeadSchema>;

function buildEmailText(data: z.output<typeof commerceLeadSchema>, category: string) {
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
    "NOVO LEAD COMÉRCIO — BORA ZÉ!",
    `Cidade: ${data.city}`,
    `Estado: ${data.state}`,
    `Categoria: ${category}`,
    `Nome do estabelecimento: ${data.establishment}`,
    `Responsável: ${data.responsibleName}`,
    `WhatsApp: ${data.phone}`,
    `E-mail: ${data.email}`,
    `Instagram: ${data.instagram ?? "Não informado"}`,
    tracking ? `Origem/UTMs:\n${tracking}` : "Origem/UTMs: Não informadas",
  ].join("\n");
}

async function sendCommerceLeadEmail(
  data: z.output<typeof commerceLeadSchema>,
  category: string,
): Promise<"sent" | "pending_configuration" | "failed"> {
  const lovableApiKey = process.env['LOVABLE_API_KEY'];
  const resendApiKey = process.env['RESEND_API_KEY'];
  const emailFrom = process.env['COMMERCE_LEADS_EMAIL_FROM'];

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
        subject: `LEAD COMÉRCIO - ${data.city.toLocaleUpperCase("pt-BR")}`,
        text: buildEmailText(data, category),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Commerce lead email failed [${response.status}]: ${errorBody}`);
      return "failed";
    }
    return "sent";
  } catch (error) {
    console.error("Commerce lead email request failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return "failed";
  }
}

export const submitCommerceLead = createServerFn({ method: "POST" })
  .inputValidator((data: CommerceLeadInput) => commerceLeadSchema.parse(data))
  .handler(async ({ data }) => {
    const category = data.category === "Outro" ? (data.categoryOther ?? "Outro") : data.category;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: lead, error } = await supabaseAdmin
      .from("commerce_leads")
      .insert({
        state: data.state,
        city: data.city,
        category,
        establishment: data.establishment,
        responsible_name: data.responsibleName,
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
      console.error("Unable to save commerce lead", { code: error?.code });
      throw new Error("Não foi possível salvar seu cadastro agora. Tente novamente.");
    }

    const emailStatus = await sendCommerceLeadEmail(data, category);
    if (emailStatus !== "pending_configuration") {
      const { error: updateError } = await supabaseAdmin
        .from("commerce_leads")
        .update({ email_delivery_status: emailStatus })
        .eq("id", lead.id);
      if (updateError) console.error("Unable to update commerce email status", { code: updateError.code });
    }

    return { saved: true, emailStatus, category, city: data.city };
  });