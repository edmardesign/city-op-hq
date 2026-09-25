import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { LogOut, RefreshCw, Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { getLeadCenterData, type LeadCenterItem } from "@/lib/lead-center.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/leads")({
  component: LeadsPage,
});

type AccessState = "loading" | "signed_out" | "ready" | "forbidden" | "error";

const typeLabels: Record<LeadCenterItem["type"], string> = {
  comercio: "Parceiros",
  mototaxi: "Mototáxi/Entregador",
  executivo: "Executivo",
  embaixador: "Embaixador",
};

function LeadsPage() {
  const loadLeads = useServerFn(getLeadCenterData);
  const [state, setState] = useState<AccessState>("loading");
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");
  const [leads, setLeads] = useState<LeadCenterItem[]>([]);
  const [agentName, setAgentName] = useState("");
  const [filter, setFilter] = useState<"todos" | LeadCenterItem["type"]>("todos");
  const [query, setQuery] = useState("");

  async function refresh() {
    setState("loading");
    try {
      const result = await loadLeads();
      setLeads(result.leads);
      setAgentName(result.agent.name || result.agent.email);
      setState("ready");
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      setState(message.toLowerCase().includes("forbidden") ? "forbidden" : "error");
    }
  }

  useEffect(() => {
    let alive = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!alive) return;
      if (data.session) void refresh();
      else setState("signed_out");
    });
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!alive) return;
      if (session) void refresh();
      else {
        setLeads([]);
        setState("signed_out");
      }
    });
    return () => {
      alive = false;
      data.subscription.unsubscribe();
    };
  }, []);

  async function requestAccess(event: FormEvent) {
    event.preventDefault();
    setNotice("");
    const normalized = email.trim().toLowerCase();
    if (!normalized) return;
    const { error } = await supabase.auth.signInWithOtp({
      email: normalized,
      options: { emailRedirectTo: window.location.origin + "/leads", shouldCreateUser: true },
    });
    setNotice(
      error
        ? "Não foi possível enviar o acesso. Tente novamente."
        : "Enviamos um link de acesso para seu e-mail. Abra o link neste dispositivo.",
    );
  }

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return leads.filter((lead) => {
      if (filter !== "todos" && lead.type !== filter) return false;
      if (!needle) return true;
      return [
        lead.name,
        lead.phone,
        lead.email,
        lead.instagram ?? "",
        lead.city ?? "",
        lead.state ?? "",
        lead.detail ?? "",
        lead.source ?? "",
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [leads, filter, query]);

  if (state === "signed_out") {
    return (
      <main className="min-h-screen bg-brand-black px-5 py-16 text-brand-white">
        <div className="mx-auto max-w-md rounded-2xl border border-brand-white/10 bg-brand-white/5 p-7">
          <p className="text-xs font-bold uppercase text-primary">Central de Leads BoraZé!</p>
          <h1 className="mt-3 text-3xl font-bold">Acesso dos agentes</h1>
          <p className="mt-3 text-sm leading-6 text-brand-white/65">
            Use um e-mail autorizado. Você receberá um link seguro para entrar.
          </p>
          <form onSubmit={requestAccess} className="mt-7 space-y-4">
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="agente@empresa.com"
              className="h-14 bg-white text-black"
            />
            <Button className="h-14 w-full font-bold">ENVIAR LINK DE ACESSO</Button>
          </form>
          {notice && <p className="mt-4 text-sm text-brand-white/70">{notice}</p>}
        </div>
      </main>
    );
  }

  if (state === "forbidden") {
    return (
      <main className="grid min-h-screen place-items-center bg-brand-black px-5 text-brand-white">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold">Acesso ainda não liberado</h1>
          <p className="mt-3 text-sm leading-6 text-brand-white/65">
            Seu login funcionou, mas este e-mail ainda não está cadastrado como agente autorizado.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => supabase.auth.signOut()}
          >
            Sair
          </Button>
        </div>
      </main>
    );
  }

  if (state === "loading") {
    return <main className="grid min-h-screen place-items-center">Carregando central de leads...</main>;
  }

  if (state === "error") {
    return (
      <main className="grid min-h-screen place-items-center px-5">
        <div className="text-center">
          <p>Não foi possível carregar os leads.</p>
          <Button className="mt-4" onClick={() => void refresh()}>Tentar novamente</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-surface">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-8">
          <div>
            <p className="text-xs font-bold uppercase text-primary">BoraZé!</p>
            <h1 className="text-2xl font-bold">Central de Leads</h1>
            <p className="text-sm text-muted-foreground">Olá, {agentName}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => void refresh()}>
              <RefreshCw className="size-4" /> Atualizar
            </Button>
            <Button variant="outline" size="sm" onClick={() => supabase.auth.signOut()}>
              <LogOut className="size-4" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="grid gap-3 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar nome, cidade, telefone, e-mail..."
              className="h-12 pl-11"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["todos", "comercio", "mototaxi", "executivo", "embaixador"] as const).map((value) => (
              <Button
                key={value}
                variant={filter === value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(value)}
              >
                {value === "todos" ? "Todos" : typeLabels[value]}
              </Button>
            ))}
          </div>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">{visible.length} lead(s)</p>

        <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-background">
          <table className="w-full min-w-[980px] text-sm">
            <thead className="border-b border-border bg-muted/40 text-left">
              <tr>
                <th className="px-4 py-3">Data</th>
                <th className="px-4 py-3">Tipo</th>
                <th className="px-4 py-3">Nome</th>
                <th className="px-4 py-3">Cidade</th>
                <th className="px-4 py-3">Contato</th>
                <th className="px-4 py-3">Detalhes</th>
                <th className="px-4 py-3">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visible.map((lead) => (
                <tr key={lead.type + lead.id} className="align-top">
                  <td className="px-4 py-4 whitespace-nowrap">
                    {new Date(lead.createdAt).toLocaleString("pt-BR")}
                  </td>
                  <td className="px-4 py-4 font-semibold">{typeLabels[lead.type]}</td>
                  <td className="px-4 py-4">
                    <div className="font-semibold">{lead.name}</div>
                    {lead.instagram && <div className="text-muted-foreground">{lead.instagram}</div>}
                  </td>
                  <td className="px-4 py-4">{[lead.city, lead.state].filter(Boolean).join("/") || "—"}</td>
                  <td className="px-4 py-4">
                    <div>{lead.phone}</div>
                    <div className="text-muted-foreground">{lead.email || "—"}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div>{lead.detail || "—"}</div>
                    {lead.source && <div className="mt-1 text-xs text-muted-foreground">Origem: {lead.source}</div>}
                  </td>
                  <td className="px-4 py-4">
                    <Button asChild size="sm">
                      <a
                        href={`https://wa.me/55${lead.phone.replace(/\D/g, "").replace(/^55/, "")}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Atender no WhatsApp
                      </a>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
