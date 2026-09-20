import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, LoaderCircle } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { submitCommerceLead } from "@/lib/commerce-leads.functions";
import { BRAZILIAN_STATES, COMMERCE_CATEGORIES } from "@/lib/commerce-categories";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OPEN_LEAD_DIALOG_EVENT } from "@/components/progressive-lead-dialog";

const WHATSAPP_DIGITS = "557588653204";

interface CityOption {
  id: number;
  nome: string;
}

interface CommerceLeadDialogProps {
  title: string;
  description: string;
}

const steps = ["location", "category", "establishment", "name", "phone", "email", "instagram"] as const;

function getTracking() {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source")?.slice(0, 120) ?? undefined,
    utmMedium: params.get("utm_medium")?.slice(0, 120) ?? undefined,
    utmCampaign: params.get("utm_campaign")?.slice(0, 120) ?? undefined,
    utmContent: params.get("utm_content")?.slice(0, 120) ?? undefined,
    utmTerm: params.get("utm_term")?.slice(0, 120) ?? undefined,
  };
}

function openCommerceWhatsApp(category: string, city: string) {
  const message = `Olá, meu negócio é da categoria ${category.toLocaleLowerCase("pt-BR")} em ${city}.`;
  window.location.assign(`https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`);
}

export function CommerceLeadDialog({ title, description }: CommerceLeadDialogProps) {
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [cities, setCities] = useState<CityOption[]>([]);
  const [citiesStatus, setCitiesStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitLead = useServerFn(submitCommerceLead);
  const step = steps[stepIndex];

  useEffect(() => {
    const openDialog = () => setOpen(true);
    window.addEventListener(OPEN_LEAD_DIALOG_EVENT, openDialog);
    return () => window.removeEventListener(OPEN_LEAD_DIALOG_EVENT, openDialog);
  }, []);

  async function loadCities(state: string) {
    setValues((current) => ({ ...current, state, city: "" }));
    setCities([]);
    setCitiesStatus("loading");
    setError("");
    try {
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${encodeURIComponent(state)}/municipios?orderBy=nome`,
      );
      if (!response.ok) throw new Error("Unable to load cities");
      const data = z.array(z.object({ id: z.number(), nome: z.string() })).parse(await response.json());
      setCities(data);
      setCitiesStatus("ready");
    } catch {
      setCitiesStatus("error");
      setError("Não foi possível carregar as cidades. Tente escolher o estado novamente.");
    }
  }

  function validateCurrentStep() {
    if (step === "location") {
      if (!values.state || !values.city) return "Escolha o estado e a cidade.";
      return "";
    }
    if (step === "category") {
      if (!values.category) return "Escolha uma categoria.";
      if (values.category === "Outro" && (values.categoryOther?.trim().length ?? 0) < 2) {
        return "Informe o tipo do seu negócio.";
      }
      return "";
    }
    const value = values[step]?.trim() ?? "";
    if (step === "instagram") return "";
    if (step === "email" && !z.string().email().safeParse(value).success) return "Informe um e-mail válido.";
    if (step === "phone" && value.replace(/\D/g, "").length < 10) return "Informe um WhatsApp com DDD.";
    if (value.length < 2) return "Preencha este campo para continuar.";
    return "";
  }

  async function continueFlow(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateCurrentStep();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    if (stepIndex < steps.length - 1) {
      setStepIndex((current) => current + 1);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitLead({
        data: {
          state: values.state ?? "",
          city: values.city ?? "",
          category: values.category as (typeof COMMERCE_CATEGORIES)[number],
          categoryOther: values.categoryOther,
          establishment: values.establishment ?? "",
          responsibleName: values.name ?? "",
          phone: values.phone ?? "",
          email: values.email ?? "",
          instagram: values.instagram,
          ...getTracking(),
        },
      });
      openCommerceWhatsApp(result.category, result.city);
    } catch {
      setError("Não foi possível concluir agora. Verifique sua conexão e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      window.setTimeout(() => {
        setStepIndex(0);
        setValues({});
        setCities([]);
        setCitiesStatus("idle");
        setError("");
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="inset-x-0 bottom-0 top-auto max-h-[92dvh] w-full max-w-none translate-x-0 translate-y-0 overflow-y-auto rounded-t-2xl border-x-0 border-b-0 p-0 sm:left-1/2 sm:top-1/2 sm:max-w-xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:border">
        <div className="p-6 sm:p-10">
          <DialogHeader className="pr-8 text-left">
            <div className="mb-7 flex items-center gap-4">
              <span className="text-xs font-semibold text-muted-foreground">{stepIndex + 1} de {steps.length}</span>
              <Progress value={((stepIndex + 1) / steps.length) * 100} className="h-1" />
            </div>
            <p className="text-xs font-bold uppercase text-primary">{title}</p>
            <DialogTitle className="text-2xl leading-tight sm:text-3xl">
              {step === "location" && "Onde fica o seu negócio?"}
              {step === "category" && "Em qual categoria seu negócio atua?"}
              {step === "establishment" && "Qual é o nome do estabelecimento?"}
              {step === "name" && "Quem é o responsável pelo negócio?"}
              {step === "phone" && "Qual é o WhatsApp para atendimento?"}
              {step === "email" && "Qual é o seu melhor e-mail?"}
              {step === "instagram" && "Qual é o Instagram do negócio?"}
            </DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-6">
              {step === "instagram" ? "Opcional. Você pode deixar em branco." : description}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={continueFlow} className="mt-8">
            <div key={step} className="animate-fade-in">
              {step === "location" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold" htmlFor="commerce-state">Estado</label>
                    <Select value={values.state ?? ""} onValueChange={loadCities}>
                      <SelectTrigger id="commerce-state" className="h-14 rounded-xl px-4 text-base"><SelectValue placeholder="Selecione o estado" /></SelectTrigger>
                      <SelectContent>
                        {BRAZILIAN_STATES.map((state) => <SelectItem key={state.uf} value={state.uf}>{state.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold" htmlFor="commerce-city">Cidade</label>
                    <Select value={values.city ?? ""} onValueChange={(city) => { setValues((current) => ({ ...current, city })); setError(""); }} disabled={!values.state || citiesStatus !== "ready"}>
                      <SelectTrigger id="commerce-city" className="h-14 rounded-xl px-4 text-base"><SelectValue placeholder={citiesStatus === "loading" ? "Carregando..." : "Selecione a cidade"} /></SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => <SelectItem key={city.id} value={city.nome}>{city.nome}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  {citiesStatus === "loading" && <p className="flex items-center gap-2 text-sm text-muted-foreground sm:col-span-2" role="status"><LoaderCircle className="size-4 animate-spin" aria-hidden="true" />Carregando municípios...</p>}
                </div>
              )}
              {step === "category" && (
                <div className="space-y-4">
                  <Select value={values.category ?? ""} onValueChange={(category) => { setValues((current) => ({ ...current, category })); setError(""); }}>
                    <SelectTrigger className="h-14 rounded-xl px-4 text-base"><SelectValue placeholder="Selecione a categoria" /></SelectTrigger>
                    <SelectContent>{COMMERCE_CATEGORIES.map((category) => <SelectItem key={category} value={category}>{category}</SelectItem>)}</SelectContent>
                  </Select>
                  {values.category === "Outro" && <Input value={values.categoryOther ?? ""} onChange={(event) => { setValues((current) => ({ ...current, categoryOther: event.target.value })); setError(""); }} placeholder="Qual é o tipo do seu negócio?" maxLength={120} className="h-14 rounded-xl px-4 text-base shadow-none" />}
                </div>
              )}
              {(step === "establishment" || step === "name" || step === "phone" || step === "email" || step === "instagram") && (
                <Input
                  value={values[step] ?? ""}
                  onChange={(event) => { setValues((current) => ({ ...current, [step]: event.target.value })); setError(""); }}
                  type={step === "email" ? "email" : step === "phone" ? "tel" : "text"}
                  inputMode={step === "email" ? "email" : step === "phone" ? "tel" : "text"}
                  autoComplete={step === "establishment" ? "organization" : step === "name" ? "name" : step === "phone" ? "tel" : step === "email" ? "email" : "off"}
                  placeholder={step === "establishment" ? "Nome do estabelecimento" : step === "name" ? "Nome completo" : step === "phone" ? "(75) 99999-9999" : step === "email" ? "voce@email.com" : "@seunegocio"}
                  maxLength={step === "email" ? 255 : 150}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "commerce-lead-error" : undefined}
                  className="h-14 rounded-xl px-4 text-base shadow-none"
                />
              )}
            </div>
            <div className="min-h-7 pt-2">{error && <p id="commerce-lead-error" className="text-sm text-destructive" role="alert">{error}</p>}</div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <Button type="button" variant="ghost" onClick={() => { setStepIndex((current) => Math.max(0, current - 1)); setError(""); }} disabled={stepIndex === 0} className="h-12 px-3"><ArrowLeft aria-hidden="true" /> Voltar</Button>
              <Button type="submit" size="lg" disabled={isSubmitting || citiesStatus === "loading"} className="h-12 min-w-36 rounded-xl px-6 font-bold">
                {isSubmitting ? "Enviando..." : stepIndex === steps.length - 1 ? "Enviar cadastro" : "Continuar"}
                {stepIndex === steps.length - 1 ? <Check aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}