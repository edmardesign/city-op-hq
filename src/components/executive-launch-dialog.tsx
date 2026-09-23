import { LeadDialogContent } from "@/components/lead-dialog-content";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { OPEN_LEAD_DIALOG_EVENT } from "@/components/progressive-lead-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { formatPhone, isValidPhone } from "@/lib/brazil-phone";
import { submitExecutiveLaunchLead } from "@/lib/executive-launch-leads.functions";

export const EXECUTIVE_COMMUNITY_URL = "https://chat.whatsapp.com/KMez68wgvL4JiF2u8iTBdJ";

type StepKey = "name" | "phone" | "email";

interface ExecutiveStep {
  key: StepKey;
  label: string;
  helper: string;
  placeholder: string;
  type: "text" | "tel" | "email";
  inputMode: "text" | "tel" | "email";
  autoComplete: string;
}

const steps: ExecutiveStep[] = [
  {
    key: "name",
    label: "Qual é o seu nome?",
    helper: "Use o nome pelo qual você quer ser chamado na comunidade.",
    placeholder: "Seu nome completo",
    type: "text",
    inputMode: "text",
    autoComplete: "name",
  },
  {
    key: "phone",
    label: "Qual é o seu WhatsApp com DDD?",
    helper: "É por ele que enviaremos o aviso de abertura do lançamento.",
    placeholder: "(75) 99999-9999",
    type: "tel",
    inputMode: "tel",
    autoComplete: "tel",
  },
  {
    key: "email",
    label: "Qual é o seu melhor e-mail?",
    helper: "Guardamos seus dados apenas para os avisos desta campanha.",
    placeholder: "voce@email.com",
    type: "email",
    inputMode: "email",
    autoComplete: "email",
  },
];

function validateStep(key: StepKey, value: string) {
  const trimmed = value.trim();
  if (key === "email") return z.string().email("Informe um e-mail válido.").safeParse(trimmed);
  if (key === "phone") {
    return z
      .string()
      .refine((phone) => isValidPhone(phone), "Informe um WhatsApp válido com DDD.")
      .safeParse(trimmed);
  }
  return z.string().min(2, "Conte seu nome para continuar.").safeParse(trimmed);
}

function readTracking() {
  const params = new URLSearchParams(window.location.search);
  const take = (key: string) => params.get(key)?.slice(0, 120) || undefined;
  return {
    utmSource: take("utm_source"),
    utmMedium: take("utm_medium"),
    utmCampaign: take("utm_campaign"),
    utmContent: take("utm_content"),
    utmTerm: take("utm_term"),
  };
}

export interface ExecutiveLaunchDialogProps {
  title: string;
  description: string;
}

export function ExecutiveLaunchDialog({ title, description }: ExecutiveLaunchDialogProps) {
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Record<StepKey, string>>({
    name: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const submissionLock = useRef(false);
  const submitLead = useServerFn(submitExecutiveLaunchLead);
  const step = steps[stepIndex]!;
  const isLastStep = stepIndex === steps.length - 1;

  useEffect(() => {
    const openDialog = () => setOpen(true);
    window.addEventListener(OPEN_LEAD_DIALOG_EVENT, openDialog);
    return () => window.removeEventListener(OPEN_LEAD_DIALOG_EVENT, openDialog);
  }, []);

  useEffect(() => {
    if (open && !isDone) window.setTimeout(() => inputRef.current?.focus(), 120);
  }, [open, isDone, stepIndex]);

  async function continueFlow(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Guard against a double submit while the registration is still in flight.
    if (submissionLock.current) return;

    const result = validateStep(step.key, values[step.key]);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Revise sua resposta.");
      return;
    }
    setError("");

    if (!isLastStep) {
      setStepIndex((current) => current + 1);
      return;
    }

    submissionLock.current = true;
    setIsSubmitting(true);
    try {
      await submitLead({
        data: {
          name: values.name.trim(),
          phone: values.phone,
          email: values.email.trim(),
          consent: true,
          ...readTracking(),
        },
      });
      // Only celebrate after the lead is actually stored.
      setIsDone(true);
    } catch {
      // Keep every answer so the person can simply try again.
      setError("Não foi possível enviar agora. Verifique sua conexão e tente novamente.");
    } finally {
      submissionLock.current = false;
      setIsSubmitting(false);
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    if (submissionLock.current) return;
    setOpen(nextOpen);
    if (!nextOpen && isDone) {
      window.setTimeout(() => {
        setStepIndex(0);
        setValues({ name: "", phone: "", email: "" });
        setError("");
        setIsDone(false);
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <LeadDialogContent className="inset-x-0 bottom-0 top-auto max-h-[92dvh] w-full max-w-none translate-x-0 translate-y-0 overflow-y-auto rounded-t-2xl border-x-0 border-b-0 p-0 sm:left-1/2 sm:top-1/2 sm:max-w-xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:border">
        <div className="lead-dialog-body p-4 sm:p-10">
          {isDone ? (
            <div className="animate-fade-in py-6 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check aria-hidden="true" />
              </span>
              <p className="mt-7 text-xs font-bold uppercase text-primary">Cadastro registrado</p>
              <DialogTitle className="mt-3 text-3xl leading-tight">
                Falta só entrar na comunidade!
              </DialogTitle>
              <DialogDescription className="mx-auto mt-3 max-w-md leading-6">
                Toque no botão abaixo para abrir a comunidade gratuita no WhatsApp e confirmar sua
                entrada por lá.
              </DialogDescription>
              <Button asChild size="lg" className="mt-8 h-auto min-h-14 w-full whitespace-normal rounded-xl px-4 py-4 text-sm font-bold">
                <a href={EXECUTIVE_COMMUNITY_URL} target="_blank" rel="noreferrer">
                  ENTRAR NA COMUNIDADE DO WHATSAPP <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader className="pr-8 text-left">
                <div className="mb-4 flex items-center gap-3 sm:mb-7 sm:gap-4">
                  <span className="shrink-0 whitespace-nowrap text-xs font-semibold text-muted-foreground">
                    {stepIndex + 1} de {steps.length}
                  </span>
                  <Progress value={((stepIndex + 1) / steps.length) * 100} className="h-1" />
                </div>
                <p className="text-xs font-bold uppercase text-primary">{title}</p>
                <DialogTitle className="text-xl leading-tight sm:text-3xl">
                  {step.label}
                </DialogTitle>
                <DialogDescription className="pt-2 text-sm leading-6">
                  {stepIndex === 0 ? description : step.helper}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={continueFlow} className="mt-4 sm:mt-8">
                <div key={step.key} className="animate-fade-in">
                  <Input
                    ref={inputRef}
                    name={step.key}
                    value={values[step.key]}
                    onChange={(event) => {
                      const nextValue =
                        step.key === "phone"
                          ? formatPhone(event.target.value)
                          : event.target.value;
                      setValues((current) => ({ ...current, [step.key]: nextValue }));
                      setError("");
                    }}
                    type={step.type}
                    inputMode={step.inputMode}
                    autoComplete={step.autoComplete}
                    maxLength={step.key === "phone" ? 16 : 120}
                    placeholder={step.placeholder}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "executive-step-error" : undefined}
                    className="h-14 rounded-xl px-4 text-base shadow-none"
                  />
                </div>
                <div className="min-h-7 pt-2">
                  {error && (
                    <p id="executive-step-error" className="text-sm text-destructive">
                      {error}
                    </p>
                  )}
                </div>
                {isLastStep && (
                  <p className="pt-1 text-xs leading-5 text-muted-foreground">
                    Ao enviar, você concorda em receber avisos sobre o lançamento do Executivo
                    BoraZé! 2026 por WhatsApp e e-mail. Seus dados não são vendidos e você pode
                    pedir a remoção quando quiser.
                  </p>
                )}
                <div className="mt-5 flex items-center justify-between gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStepIndex((current) => Math.max(0, current - 1))}
                    disabled={stepIndex === 0 || isSubmitting}
                    className="h-12 px-3"
                  >
                    <ArrowLeft aria-hidden="true" /> Voltar
                  </Button>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="h-12 min-w-36 rounded-xl px-6 font-bold"
                  >
                    {isSubmitting ? "Enviando..." : isLastStep ? "Enviar cadastro" : "Continuar"}
                    {isLastStep ? <Check aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </LeadDialogContent>
    </Dialog>
  );
}
