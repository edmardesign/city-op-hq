import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { LeadDialogContent } from "@/components/lead-dialog-content";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OPEN_LEAD_DIALOG_EVENT } from "@/components/progressive-lead-dialog";
import { submitZayaLead } from "@/lib/zaya-leads.functions";
import { formatPhone, isValidPhone, normalizePhoneDigits } from "@/lib/brazil-phone";

const steps = ["name", "phone", "establishment", "city", "segment"] as const;

const segments = [
  "Restaurante",
  "Pizzaria",
  "Hamburgueria",
  "Açaí",
  "Mercado",
  "Farmácia",
  "Bebidas",
  "Conveniência",
  "Outro negócio local",
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

export function ZayaLeadDialog() {
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitLead = useServerFn(submitZayaLead);
  const step = steps[stepIndex];

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_LEAD_DIALOG_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_LEAD_DIALOG_EVENT, onOpen);
  }, []);

  function validate() {
    if (step === "phone") {
      return isValidPhone(values.phone ?? "") ? "" : "Informe seu WhatsApp com DDD.";
    }
    const value = values[step]?.trim() ?? "";
    return value.length >= 2 ? "" : "Preencha este campo para continuar.";
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validate();
    if (validation) {
      setError(validation);
      return;
    }
    setError("");

    if (stepIndex < steps.length - 1) {
      setStepIndex((current) => current + 1);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({
        data: {
          name: values.name ?? "",
          phone: normalizePhoneDigits(values.phone ?? ""),
          establishment: values.establishment ?? "",
          city: values.city ?? "",
          segment: values.segment ?? "",
          ...getTracking(),
        },
      });
      setSubmitted(true);
    } catch {
      setError("Não foi possível concluir agora. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function reset(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      window.setTimeout(() => {
        setStepIndex(0);
        setValues({});
        setError("");
        setSubmitted(false);
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={reset}>
      <LeadDialogContent className="inset-x-0 bottom-0 top-auto max-h-[92dvh] w-full max-w-none translate-x-0 translate-y-0 overflow-y-auto rounded-t-2xl border-x-0 border-b-0 p-0 sm:left-1/2 sm:top-1/2 sm:max-w-xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:border">
        <div className="lead-dialog-body p-4 sm:p-10">
          <DialogHeader className="pr-8 text-left">
            <div className="mb-4 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <span className="shrink-0 whitespace-nowrap text-xs font-semibold text-muted-foreground">
                {Math.min(stepIndex + 1, steps.length)} de {steps.length}
              </span>
              <Progress value={((stepIndex + 1) / steps.length) * 100} className="h-1" />
            </div>
            <p className="text-xs font-bold uppercase text-primary">ZAYA</p>
            <DialogTitle className="text-xl leading-tight sm:text-3xl">
              {step === "name" && "Qual é o seu nome?"}
              {step === "phone" && "Qual é o seu WhatsApp?"}
              {step === "establishment" && "Qual é o nome do estabelecimento?"}
              {step === "city" && "Em qual cidade fica o negócio?"}
              {step === "segment" && "Qual é o segmento do seu negócio?"}
            </DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-6">
              Preencha os dados para conhecer a Zaya e entender como ela pode atender seus clientes no WhatsApp.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="mt-8">
              <div className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check />
              </div>
              <p className="mt-5 text-xl font-bold">Cadastro recebido.</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Seus dados foram enviados para a equipe Zaya. Entraremos em contato pelo WhatsApp informado.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-6">
              {step === "phone" ? (
                <Input
                  value={formatPhone(values.phone ?? "")}
                  onChange={(event) => {
                    setValues((current) => ({ ...current, phone: normalizePhoneDigits(event.target.value) }));
                    setError("");
                  }}
                  type="tel"
                  inputMode="numeric"
                  placeholder="(11) 99999-9999"
                  className="h-14 rounded-xl px-4 text-base shadow-none"
                />
              ) : step === "segment" ? (
                <Select
                  value={values.segment ?? ""}
                  onValueChange={(segment) => {
                    setValues((current) => ({ ...current, segment }));
                    setError("");
                  }}
                >
                  <SelectTrigger className="h-14 rounded-xl px-4 text-base">
                    <SelectValue placeholder="Selecione o segmento" />
                  </SelectTrigger>
                  <SelectContent>
                    {segments.map((segment) => (
                      <SelectItem key={segment} value={segment}>{segment}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  value={values[step] ?? ""}
                  onChange={(event) => {
                    setValues((current) => ({ ...current, [step]: event.target.value }));
                    setError("");
                  }}
                  placeholder={
                    step === "name"
                      ? "Seu nome"
                      : step === "establishment"
                        ? "Nome do estabelecimento"
                        : "Cidade"
                  }
                  maxLength={150}
                  className="h-14 rounded-xl px-4 text-base shadow-none"
                />
              )}

              <div className="min-h-7 pt-2">
                {error && <p className="text-sm text-destructive">{error}</p>}
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
                  <ArrowLeft /> Voltar
                </Button>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 min-w-36 rounded-xl px-6 font-bold"
                >
                  {isSubmitting ? "Enviando..." : stepIndex === steps.length - 1 ? "QUERO CONHECER A ZAYA" : "Continuar"}
                  {stepIndex === steps.length - 1 ? <Check /> : <ArrowRight />}
                </Button>
              </div>
            </form>
          )}
        </div>
      </LeadDialogContent>
    </Dialog>
  );
}
