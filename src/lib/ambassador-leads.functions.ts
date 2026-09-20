import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const qualificationSchema = z.enum([
  "Sim, tenho disponibilidade.",
  "Tenho interesse e consigo me organizar.",
  "Preciso entender melhor antes.",
  "Hoje não tenho disponibilidade.",
]);

const ambassadorLeadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().transform((value) => value.replace(/\D/g, "")).pipe(z.string().min(10).max(20)),
  city: z.string().trim().min(2).max(100),
  state: z.string().trim().length(2).transform((value) => value.toUpperCase()),
  qualification: qualificationSchema,
  website: z.string().max(0),
});

export type AmbassadorLeadInput = z.input<typeof ambassadorLeadSchema>;

export const submitAmbassadorLead = createServerFn({ method: "POST" })
  .inputValidator((data: AmbassadorLeadInput) => ambassadorLeadSchema.parse(data))
  .handler(async ({ data }) => {
    const branch = data.qualification === "Hoje não tenho disponibilidade." ? "executivo" : "group";
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("ambassador_prospects").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      state: data.state,
      qualification: data.qualification,
      branch,
    });

    if (error) {
      console.error("Unable to save ambassador prospect", { code: error.code });
      throw new Error("Não foi possível enviar seus dados agora. Tente novamente.");
    }

    return { branch };
  });