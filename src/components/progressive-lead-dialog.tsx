import { LeadDialogContent } from "@/components/lead-dialog-content";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { submitAmbassadorLead } from "@/lib/ambassador-leads.functions";
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
import { cn } from "@/lib/utils";

export const OPEN_LEAD_DIALOG_EVENT = "boraze:open-lead-dialog";

export type LeadType = "embaixador" | "comercio" | "mototaxi" | "executivo";

export interface ProgressiveLeadConfig {
  type: LeadType;
  title: string;
  description: string;
}

interface LeadStep {
  key: string;
  label: string;
  helper?: string;
  placeholder?: string;
  type?: "text" | "tel" | "email";
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  maxLength?: number;
  options?: string[];
}

const qualificationOptions = [
  "Sim, tenho disponibilidade.",
  "Tenho interesse e consigo me organizar.",
  "Preciso entender melhor antes.",
  "Hoje não tenho disponibilidade.",
];

const EXECUTIVE_PROGRAM_URL = "https://embaixador.site/executivo";

const baseSteps: Record<LeadType, LeadStep[]> = {
  executivo: [
    {
      key: "phone",
      label: "Qual é o seu WhatsApp?",
      placeholder: "(75) 99999-9999",
      type: "tel",
      inputMode: "numeric",
      autoComplete: "tel",
    },
    {
      key: "state",
      label: "Confirme o seu estado",
      placeholder: "BA",
      autoComplete: "address-level1",
      maxLength: 2,
    },
    {
      key: "city",
      label: "Em qual cidade você quer construir sua oportunidade?",
      placeholder: "Sua cidade",
      autoComplete: "address-level2",
    },
    {
      key: "name",
      label: "Como podemos chamar você?",
      placeholder: "Seu nome completo",
      autoComplete: "name",
    },
  ],
  embaixador: [
    {
      key: "phone",
      label: "Qual é o seu WhatsApp?",
      placeholder: "(75) 99999-9999",
      type: "tel",
      inputMode: "tel",
      autoComplete: "tel",
    },
    {
      key: "state",
      label: "Confirme o estado da cidade de interesse",
      placeholder: "BA",
      autoComplete: "address-level1",
      maxLength: 2,
    },
    {
      key: "city",
      label: "Qual cidade você gostaria de desenvolver?",
      placeholder: "Cidade de interesse",
      autoComplete: "address-level2",
    },
    {
      key: "name",
      label: "Como podemos chamar você?",
      placeholder: "Seu nome completo",
      autoComplete: "name",
    },
    {
      key: "email",
      label: "Qual é o seu melhor e-mail?",
      placeholder: "voce@email.com",
      type: "email",
      inputMode: "email",
      autoComplete: "email",
    },
    {
      key: "qualification",
      label:
        "Você tem esse capital disponível hoje?",
      helper: "Considerando que sua cidade esteja disponível e a oportunidade faça sentido para você, o investimento inicial necessário é de aproximadamente R$ 10.000,00.",
      options: qualificationOptions,
    },
  ],

  comercio: [
    {
      key: "establishment",
      label: "Qual é o nome do seu negócio?",
      placeholder: "Nome do estabelecimento",
      autoComplete: "organization",
    },
    {
      key: "name",
      label: "Qual é o seu nome?",
      placeholder: "Seu nome completo",
      autoComplete: "name",
    },
    {
      key: "category",
      label: "Em qual categoria seu negócio atua?",
      placeholder: "Ex.: Restaurante, mercado ou farmácia",
    },
    {
      key: "city",
      label: "Em qual cidade fica seu negócio?",
      placeholder: "Sua cidade",
      autoComplete: "address-level2",
    },
    {
      key: "state",
      label: "Em qual estado?",
      placeholder: "BA",
      autoComplete: "address-level1",
      maxLength: 2,
    },
    {
      key: "phone",
      label: "Qual é o seu WhatsApp?",
      placeholder: "(75) 99999-9999",
      type: "tel",
      inputMode: "tel",
      autoComplete: "tel",
    },
  ],
  mototaxi: [
    {
      key: "name",
      label: "Qual é o seu nome?",
      placeholder: "Seu nome completo",
      autoComplete: "name",
    },
    {
      key: "city",
      label: "Em qual cidade você trabalha?",
      placeholder: "Sua cidade",
      autoComplete: "address-level2",
    },
    {
      key: "state",
      label: "Em qual estado?",
      placeholder: "BA",
      autoComplete: "address-level1",
      maxLength: 2,
    },
    {
      key: "phone",
      label: "Qual é o seu WhatsApp?",
      placeholder: "(75) 99999-9999",
      type: "tel",
      inputMode: "tel",
      autoComplete: "tel",
    },
  ],
};

const AMBASSADOR_CONTACT_NUMBER = "5511972497891";

function getAmbassadorContactUrl() {
  const message = "Quero saber mais sobre programa Embaixador";
  return `https://wa.me/${AMBASSADOR_CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
}

function validateStep(step: LeadStep, value: string) {
  const trimmed = value.trim();
  if (step.key === "email") {
    return z.string().email("Informe um e-mail válido.").safeParse(trimmed);
  }
  if (step.key === "phone") {
    return z
      .string()
      .refine((value) => isValidPhone(value), "Informe um WhatsApp válido com DDD.")
      .safeParse(trimmed);
  }

  if (step.key === "state") {
    return z.string().length(2, "Use a sigla do estado com 2 letras.").safeParse(trimmed);
  }
  return z.string().min(2, "Conte um pouco mais para continuar.").safeParse(trimmed);
}

function buildMessage(type: LeadType, values: Record<string, string>) {
  const place = `${values.city}/${values.state.toUpperCase()}`;
  const messages: Record<LeadType, string> = {
    executivo: `Olá! Vim pela página de Executivo Bora Zé e quero conhecer a oportunidade.\n\nNome: ${values.name}\nCidade: ${place}\nTelefone: ${values.phone}`,
    embaixador: `Olá! Acabei de fazer meu pré-cadastro para conhecer a oportunidade de Embaixador Bora Zé em ${place}.\n\nNome: ${values.name}\nE-mail: ${values.email}\nTelefone: ${values.phone}\nCidade de interesse: ${place}\nDisponibilidade de investimento: ${values.qualification}`,
    comercio: `Olá! Quero cadastrar meu estabelecimento no Bora Zé.\n\nNome: ${values.name}\nEstabelecimento: ${values.establishment}\nCategoria: ${values.category}\nCidade: ${place}\nTelefone: ${values.phone}`,
    mototaxi: `Olá! Quero me cadastrar como mototaxista parceiro Bora Zé.\n\nNome: ${values.name}\nCidade: ${place}\nTelefone: ${values.phone}`,
  };
  return messages[type];
}

interface ProgressiveLeadDialogProps {
  config: ProgressiveLeadConfig;
  onComplete: (message: string) => void;
}

export function ProgressiveLeadDialog({ config, onComplete }: ProgressiveLeadDialogProps) {
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [finalStage, setFinalStage] = useState<"form" | "group" | "executivo" | "farewell">("form");
  const submitLead = useServerFn(submitAmbassadorLead);
  const inputRef = useRef<HTMLInputElement>(null);
  const steps = useMemo(() => baseSteps[config.type], [config.type]);
  const step = steps[stepIndex];

  useEffect(() => {
    const openDialog = () => setOpen(true);
    window.addEventListener(OPEN_LEAD_DIALOG_EVENT, openDialog);
    return () => window.removeEventListener(OPEN_LEAD_DIALOG_EVENT, openDialog);
  }, []);

  useEffect(() => {
    if (open && !step.options) window.setTimeout(() => inputRef.current?.focus(), 120);
  }, [open, step.options, stepIndex]);

  async function continueFlow(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = values[step.key] ?? "";
    const result = validateStep(step, value);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Revise sua resposta.");
      return;
    }
    setError("");
    if (step.key === "phone") {
      // Infer the state from the area code so the next step comes pre-filled.
      const detectedState = getStateFromPhone(value);
      if (detectedState) setValues((current) => ({ ...current, state: detectedState }));
    }

    if (stepIndex < steps.length - 1) {
      setStepIndex((current) => current + 1);
      return;
    }
    if (config.type !== "embaixador") {
      onComplete(buildMessage(config.type, values));
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitLead({
        data: {
          name: values.name ?? "",
          email: values.email ?? "",
          phone: values.phone ?? "",
          city: values.city ?? "",
          state: values.state ?? "",
          qualification: values.qualification as
            | "Sim, tenho disponibilidade."
            | "Tenho interesse e consigo me organizar."
            | "Preciso entender melhor antes."
            | "Hoje não tenho disponibilidade.",
          website: "",
        },
      });
      setFinalStage(result.branch);
    } catch {
      setError("Não foi possível enviar agora. Verifique sua conexão e tente novamente.");
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
        setError("");
        setFinalStage("form");
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <LeadDialogContent className="inset-x-0 bottom-0 top-auto max-h-[92dvh] w-full max-w-none translate-x-0 translate-y-0 overflow-y-auto rounded-t-2xl border-x-0 border-b-0 p-0 sm:left-1/2 sm:top-1/2 sm:max-w-xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:border">
        <div className="lead-dialog-body p-4 sm:p-10">
          {finalStage === "group" ? (
            <div className="animate-fade-in py-6 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check aria-hidden="true" />
              </span>
              <p className="mt-7 text-xs font-bold uppercase text-primary">Cadastro enviado</p>
              <DialogTitle className="mt-3 text-3xl leading-tight">
                Vamos conversar sobre sua cidade?
              </DialogTitle>
              <DialogDescription className="mx-auto mt-3 max-w-md leading-6">
                Fale com nossa equipe pelo WhatsApp para iniciar o atendimento e agendar uma ligação
                sobre a oportunidade de Embaixador.
              </DialogDescription>
              <Button asChild size="lg" className="mt-8 h-auto min-h-14 w-full rounded-xl px-4 py-3 font-bold">
                <a href={getAmbassadorContactUrl()} target="_blank" rel="noreferrer">
                  INICIAR ATENDIMENTO NO WHATSAPP <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            </div>
          ) : finalStage === "executivo" ? (
            <div className="animate-fade-in py-6 text-center">
              <p className="text-xs font-bold uppercase text-primary">UMA OPORTUNIDADE PARA VOCÊ</p>
              <DialogTitle className="mt-3 text-2xl leading-tight sm:text-3xl">
                Ainda não é o momento de ser Embaixador?
              </DialogTitle>
              <DialogDescription className="mx-auto mt-3 max-w-md text-sm leading-6">
                Você já percebeu que está diante de uma grande oportunidade. Existe outro formato
                para participar: torne-se um Executivo BoraZé! Vamos lá?
              </DialogDescription>
              <div className="mt-6 grid gap-3 sm:mt-8">
                <Button asChild size="lg" className="h-auto min-h-14 rounded-xl px-4 py-3 font-bold">
                  <a href="https://chat.whatsapp.com/KMez68wgvL4JiF2u8iTBdJ" target="_blank" rel="noreferrer">
                    QUERO SABER MAIS! <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-xl font-bold"
                  onClick={() => setFinalStage("farewell")}
                >
                  AGORA NÃO
                </Button>
              </div>
            </div>
          ) : finalStage === "farewell" ? (
            <div className="animate-fade-in py-8 text-center">
              <DialogTitle className="text-3xl leading-tight">
                Obrigado pelo seu interesse.
              </DialogTitle>
              <DialogDescription className="mx-auto mt-3 max-w-sm leading-6">
                Respeitamos seu momento. Quando quiser conhecer uma nova oportunidade Bora Zé,
                estaremos por aqui.
              </DialogDescription>
              <Button
                type="button"
                variant="outline"
                className="mt-4 sm:mt-8"
                onClick={() => setOpen(false)}
              >
                Fechar
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
                <p className="text-xs font-bold uppercase text-primary">{config.title}</p>
                {step.key === "qualification" && (
                  <DialogDescription className="pt-2 pb-2 text-sm leading-6">
                    {step.helper}
                  </DialogDescription>
                )}
                <DialogTitle className="text-xl leading-tight sm:text-3xl">
                  {step.label}
                </DialogTitle>
                {step.key !== "qualification" && (
                  <DialogDescription className="pt-2 text-sm leading-6">
                    {step.helper ?? config.description}
                  </DialogDescription>
                )}
              </DialogHeader>

              <form onSubmit={continueFlow} className="mt-4 sm:mt-8">
                <div key={step.key} className="animate-fade-in">
                  {step.options ? (
                    <RadioGroup
                      value={values[step.key] ?? ""}
                      onValueChange={(value) => {
                        setValues((current) => ({ ...current, [step.key]: value }));
                        setError("");
                      }}
                      className="gap-3"
                    >
                      {step.options.map((option) => (
                        <label
                          key={option}
                          className={cn(
                            "flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition-all",
                            values[step.key] === option
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/60",
                          )}
                        >
                          <RadioGroupItem value={option} />
                          <span>{option}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  ) : (
                    <Input
                      ref={inputRef}
                      name={step.key}
                      value={
                        step.key === "phone"
                          ? formatPhone(values[step.key] ?? "")
                          : (values[step.key] ?? "")
                      }
                      onChange={(event) => {
                        const nextValue =
                          step.key === "state"
                            ? event.target.value.toUpperCase()
                            : step.key === "phone"
                              ? normalizePhoneDigits(event.target.value)
                              : event.target.value;
                        setValues((current) => ({ ...current, [step.key]: nextValue }));
                        setError("");
                      }}
                      type={step.type ?? "text"}
                      inputMode={step.inputMode}
                      autoComplete={step.autoComplete}
                      maxLength={step.maxLength ?? 120}
                      placeholder={step.placeholder}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? "lead-step-error" : undefined}
                      className="h-14 rounded-xl px-4 text-base shadow-none"
                    />
                  )}
                </div>
                <div className="min-h-7 pt-2">
                  {error && (
                    <p id="lead-step-error" className="text-sm text-destructive">
                      {error}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStepIndex((current) => Math.max(0, current - 1))}
                    disabled={stepIndex === 0}
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
                    {isSubmitting
                      ? "Enviando..."
                      : stepIndex === steps.length - 1 && config.type === "embaixador"
                        ? "Enviar"
                        : stepIndex === steps.length - 1
                          ? "Ir para o WhatsApp"
                          : "Continuar"}
                    {stepIndex === steps.length - 1 ? (
                      <Check aria-hidden="true" />
                    ) : (
                      <ArrowRight aria-hidden="true" />
                    )}
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
