import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { z } from "zod";
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
  inputMode?: "text" | "tel" | "email";
  maxLength?: number;
  options?: string[];
}

const qualificationOptions = [
  "Sim, tenho disponibilidade.",
  "Tenho interesse e consigo me organizar.",
  "Preciso entender melhor antes.",
  "Hoje não tenho disponibilidade.",
];

const baseSteps: Record<LeadType, LeadStep[]> = {
  executivo: [
    {
      key: "city",
      label: "Em qual cidade você quer construir sua oportunidade?",
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
      key: "name",
      label: "Como podemos chamar você?",
      placeholder: "Seu nome completo",
      autoComplete: "name",
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
  embaixador: [
    {
      key: "city",
      label: "Qual cidade você gostaria de desenvolver?",
      placeholder: "Cidade de interesse",
      autoComplete: "address-level2",
    },
    {
      key: "state",
      label: "Em qual estado fica essa cidade?",
      placeholder: "BA",
      autoComplete: "address-level1",
      maxLength: 2,
    },
    {
      key: "name",
      label: "Como podemos chamar você?",
      placeholder: "Seu nome completo",
      autoComplete: "name",
    },
    {
      key: "phone",
      label: "Qual é o seu WhatsApp?",
      placeholder: "(75) 99999-9999",
      type: "tel",
      inputMode: "tel",
      autoComplete: "tel",
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
        "Se sua cidade estiver disponível e fizer sentido para você, hoje teria condições de realizar aproximadamente esse investimento?",
      helper:
        "Para iniciar uma operação Bora Zé, pode ser necessário um investimento aproximado de R$ 10 mil, dependendo das condições e configuração da operação.",
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

function validateStep(step: LeadStep, value: string) {
  const trimmed = value.trim();
  if (step.key === "email") {
    return z.string().email("Informe um e-mail válido.").safeParse(trimmed);
  }
  if (step.key === "phone") {
    return z
      .string()
      .regex(/\d{10,}/, "Informe um WhatsApp com DDD.")
      .safeParse(trimmed.replace(/\D/g, ""));
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

  function continueFlow(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = values[step.key] ?? "";
    const result = validateStep(step, value);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Revise sua resposta.");
      return;
    }
    setError("");
    if (stepIndex < steps.length - 1) {
      setStepIndex((current) => current + 1);
      return;
    }
    onComplete(buildMessage(config.type, values));
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="inset-x-0 bottom-0 top-auto max-h-[92dvh] w-full max-w-none translate-x-0 translate-y-0 overflow-y-auto rounded-t-2xl border-x-0 border-b-0 p-0 sm:left-1/2 sm:top-1/2 sm:max-w-xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:border">
        <div className="p-6 sm:p-10">
          <DialogHeader className="pr-8 text-left">
            <div className="mb-7 flex items-center gap-4">
              <span className="text-xs font-semibold text-muted-foreground">
                {stepIndex + 1} de {steps.length}
              </span>
              <Progress value={((stepIndex + 1) / steps.length) * 100} className="h-1" />
            </div>
            <p className="text-xs font-bold uppercase text-primary">{config.title}</p>
            <DialogTitle className="text-2xl leading-tight sm:text-3xl">{step.label}</DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-6">
              {step.helper ?? config.description}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={continueFlow} className="mt-8">
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
                  value={values[step.key] ?? ""}
                  onChange={(event) => {
                    const nextValue =
                      step.key === "state" ? event.target.value.toUpperCase() : event.target.value;
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
              <Button type="submit" size="lg" className="h-12 min-w-36 rounded-xl px-6 font-bold">
                {stepIndex === steps.length - 1 ? "Ir para o WhatsApp" : "Continuar"}
                {stepIndex === steps.length - 1 ? (
                  <Check aria-hidden="true" />
                ) : (
                  <ArrowRight aria-hidden="true" />
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
