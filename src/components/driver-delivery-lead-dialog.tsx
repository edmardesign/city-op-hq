import { LeadDialogContent } from "@/components/lead-dialog-content";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, LoaderCircle } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { submitDriverDeliveryLead } from "@/lib/driver-delivery-leads.functions";
import { BRAZILIAN_STATES } from "@/lib/commerce-categories";
import {
  formatPhone,
  getStateFromPhone,
  isValidPhone,
  normalizePhoneDigits,
} from "@/lib/brazil-phone";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OPEN_LEAD_DIALOG_EVENT } from "@/components/progressive-lead-dialog";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const steps = ["phone", "location", "role", "name"] as const;
type Step = (typeof steps)[number];
type Role = "mototaxi" | "entregador" | "ambos";

interface CityOption {
  id: number;
  nome: string;
}
interface Props {
  title: string;
  description: string;
}

const roleOptions: Array<{ value: Role; label: string }> = [
  { value: "mototaxi", label: "Mototáxi" },
  { value: "entregador", label: "Entregador" },
  { value: "ambos", label: "Mototáxi e Entregador" },
];

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

function getCleanWhatsAppUrl(role: Role, city: string) {
  const messages: Record<Role, string> = {
    mototaxi: `Olá, sou mototaxista em ${city}.`,
    entregador: `Olá, quero fazer entregas em ${city}.`,
    ambos: `Olá, quero atuar como mototaxista e entregador em ${city}.`,
  };
  return getWhatsAppUrl(messages[role]);
}

export function DriverDeliveryLeadDialog({ title, description }: Props) {
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [cities, setCities] = useState<CityOption[]>([]);
  const [citiesStatus, setCitiesStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const submitLead = useServerFn(submitDriverDeliveryLead);
  const step: Step = steps[stepIndex] ?? "phone";

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
      const data = z
        .array(z.object({ id: z.number(), nome: z.string() }))
        .parse(await response.json());
      setCities(data);
      setCitiesStatus("ready");
    } catch {
      setCitiesStatus("error");
      setError("Não foi possível carregar as cidades. Escolha o estado novamente.");
    }
  }

  function validateStep() {
    if (step === "phone")
      return isValidPhone(values.phone ?? "") ? "" : "Informe seu WhatsApp com DDD.";
    if (step === "location")
      return values.state && values.city ? "" : "Confirme o estado e escolha a cidade.";
    if (step === "role") return values.role ? "" : "Escolha como você quer trabalhar.";
    const value = values[step]?.trim() ?? "";
    return value.length >= 2 ? "" : "Preencha este campo para continuar.";
  }

  async function continueFlow(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateStep();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");

    if (step === "phone") {
      const detectedState = getStateFromPhone(values.phone ?? "");
      if (detectedState && detectedState !== values.state) void loadCities(detectedState);
      setStepIndex((current) => current + 1);
      return;
    }

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
          role: values.role as Role,
          name: values.name ?? "",
          phone: normalizePhoneDigits(values.phone ?? ""),
          ...getTracking(),
        },
      });
      setWhatsAppUrl(getCleanWhatsAppUrl(result.role, result.city));
    } catch {
      setError("Não foi possível concluir agora. Verifique sua conexão e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen)
      window.setTimeout(() => {
        setStepIndex(0);
        setValues({});
        setCities([]);
        setCitiesStatus("idle");
        setError("");
        setWhatsAppUrl("");
      }, 200);
  }

  const titles: Record<Step, string> = {
    phone: "Qual é o seu WhatsApp?",
    location: "Em qual cidade você quer trabalhar?",
    role: "Como você quer trabalhar no Bora Zé?",
    name: "Qual é o seu nome completo?",
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <LeadDialogContent className="inset-x-0 bottom-0 top-auto max-h-[92dvh] w-full max-w-none translate-x-0 translate-y-0 overflow-y-auto rounded-t-2xl border-x-0 border-b-0 p-0 sm:left-1/2 sm:top-1/2 sm:max-w-xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:border">
        <div className="lead-dialog-body p-4 sm:p-10">
          <DialogHeader className="pr-8 text-left">
            <div className="mb-4 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <span className="shrink-0 whitespace-nowrap text-xs font-semibold text-muted-foreground">
                {stepIndex + 1} de {steps.length}
              </span>
              <Progress value={((stepIndex + 1) / steps.length) * 100} className="h-1" />
            </div>
            <p className="text-xs font-bold uppercase text-primary">{title}</p>
            <DialogTitle className="text-xl leading-tight sm:text-3xl">{titles[step]}</DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-6">{description}</DialogDescription>
          </DialogHeader>
          {whatsAppUrl ? (
            <div className="mt-8 animate-fade-in" role="status">
              <div className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check aria-hidden="true" />
              </div>
              <p className="mt-5 text-xl font-bold">Obrigado!</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Seu cadastro foi enviado. Fale agora com um atendente para continuar.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-7 h-auto min-h-14 w-full rounded-xl px-5 py-3 text-center text-sm font-bold whitespace-normal"
              >
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                  FALAR COM ATENDENTE
                </a>
              </Button>
            </div>
          ) : (
            <form onSubmit={continueFlow} className="mt-4 sm:mt-8">
              <div key={step} className="animate-fade-in">
                {step === "phone" && (
                  <Input
                    value={formatPhone(values.phone ?? "")}
                    onChange={(event) => {
                      setValues((current) => ({
                        ...current,
                        phone: normalizePhoneDigits(event.target.value),
                      }));
                      setError("");
                    }}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="(75) 99999-9999"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "driver-lead-error" : undefined}
                    className="h-14 rounded-xl px-4 text-base shadow-none"
                  />
                )}
                {step === "location" && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold" htmlFor="driver-state">
                        Estado
                      </label>
                      <Select value={values.state ?? ""} onValueChange={loadCities}>
                        <SelectTrigger id="driver-state" className="h-14 rounded-xl px-4 text-base">
                          <SelectValue placeholder="Selecione o estado" />
                        </SelectTrigger>
                        <SelectContent>
                          {BRAZILIAN_STATES.map((state) => (
                            <SelectItem key={state.uf} value={state.uf}>
                              {state.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold" htmlFor="driver-city">
                        Cidade
                      </label>
                      <Select
                        value={values.city ?? ""}
                        onValueChange={(city) => {
                          setValues((current) => ({ ...current, city }));
                          setError("");
                        }}
                        disabled={!values.state || citiesStatus !== "ready"}
                      >
                        <SelectTrigger id="driver-city" className="h-14 rounded-xl px-4 text-base">
                          <SelectValue
                            placeholder={
                              citiesStatus === "loading" ? "Carregando..." : "Selecione a cidade"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city.id} value={city.nome}>
                              {city.nome}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {citiesStatus === "loading" && (
                      <p
                        className="flex items-center gap-2 text-sm text-muted-foreground sm:col-span-2"
                        role="status"
                      >
                        <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                        Carregando municípios...
                      </p>
                    )}
                  </div>
                )}
                {step === "role" && (
                  <RadioGroup
                    value={values.role ?? ""}
                    onValueChange={(role) => {
                      setValues((current) => ({ ...current, role }));
                      setError("");
                    }}
                    className="gap-3"
                  >
                    {roleOptions.map((option) => (
                      <label
                        key={option.value}
                        className={cn(
                          "flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition-all",
                          values.role === option.value
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/60",
                        )}
                      >
                        <RadioGroupItem value={option.value} />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                )}
                {step === "name" && (
                  <Input
                    value={values.name ?? ""}
                    onChange={(event) => {
                      setValues((current) => ({ ...current, name: event.target.value }));
                      setError("");
                    }}
                    type="text"
                    inputMode="text"
                    autoComplete="name"
                    placeholder="Nome completo"
                    maxLength={120}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "driver-lead-error" : undefined}
                    className="h-14 rounded-xl px-4 text-base shadow-none"
                  />
                )}
              </div>
              <div className="min-h-7 pt-2">
                {error && (
                  <p id="driver-lead-error" className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    setStepIndex((current) => Math.max(0, current - 1));
                    setError("");
                  }}
                  disabled={stepIndex === 0}
                  className="h-12 px-3"
                >
                  <ArrowLeft aria-hidden="true" /> Voltar
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || citiesStatus === "loading"}
                  className="h-12 min-w-36 rounded-xl px-6 font-bold"
                >
                  {isSubmitting
                    ? "Enviando..."
                    : stepIndex === steps.length - 1
                      ? "Enviar cadastro"
                      : "Continuar"}
                  {stepIndex === steps.length - 1 ? (
                    <Check aria-hidden="true" />
                  ) : (
                    <ArrowRight aria-hidden="true" />
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </LeadDialogContent>
    </Dialog>
  );
}
