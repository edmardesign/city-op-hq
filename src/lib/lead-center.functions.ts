import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type LeadCenterItem = {
  id: string;
  type: "comercio" | "mototaxi" | "executivo" | "embaixador";
  name: string;
  phone: string;
  email: string;
  instagram?: string | null;
  city?: string | null;
  state?: string | null;
  detail?: string | null;
  createdAt: string;
  source?: string | null;
};

export const getLeadCenterData = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const email = typeof context.claims.email === "string" ? context.claims.email.toLowerCase() : "";
    if (!email) throw new Error("Unauthorized");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: agent } = await supabaseAdmin
      .from("lead_agents")
      .select("id,email,name,role,active")
      .eq("email", email)
      .eq("active", true)
      .maybeSingle();

    if (!agent) throw new Error("Forbidden");

    const [commerce, drivers, executives, ambassadors] = await Promise.all([
      supabaseAdmin.from("commerce_leads").select("*").is("deleted_at", null).order("created_at", { ascending: false }).limit(500),
      supabaseAdmin.from("driver_delivery_leads").select("*").is("deleted_at", null).order("created_at", { ascending: false }).limit(500),
      supabaseAdmin.from("executive_launch_leads").select("*").is("deleted_at", null).order("created_at", { ascending: false }).limit(500),
      supabaseAdmin.from("ambassador_prospects").select("*").is("deleted_at", null).order("created_at", { ascending: false }).limit(500),
    ]);

    const rows: LeadCenterItem[] = [
      ...(commerce.data ?? []).map((x) => ({
        id: x.id, type: "comercio" as const, name: x.responsible_name, phone: x.phone, email: x.email,
        instagram: x.instagram, city: x.city, state: x.state,
        detail: `${x.establishment} • ${x.category}`, createdAt: x.created_at, source: x.utm_source,
      })),
      ...(drivers.data ?? []).map((x) => ({
        id: x.id, type: "mototaxi" as const, name: x.name, phone: x.phone, email: x.email,
        instagram: x.instagram, city: x.city, state: x.state,
        detail: x.role, createdAt: x.created_at, source: x.utm_source,
      })),
      ...(executives.data ?? []).map((x) => ({
        id: x.id, type: "executivo" as const, name: x.name, phone: x.phone, email: x.email,
        city: null, state: null, detail: x.campaign, createdAt: x.created_at, source: x.utm_source,
      })),
      ...(ambassadors.data ?? []).map((x) => ({
        id: x.id, type: "embaixador" as const, name: x.name, phone: x.phone, email: x.email,
        city: x.city, state: x.state, detail: x.qualification, createdAt: x.created_at, source: x.utm_source,
      })),
    ].sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

    return { agent, leads: rows };
  });
