import { useMemo, useState, type ComponentProps, type FormEvent, type ReactNode } from "react";
import { ArrowDown, ArrowRight, Check, ChevronDown, Smartphone } from "lucide-react";
import { z } from "zod";
import logo from "@/assets/boraze-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import { cn } from "@/lib/utils";

export const WHATSAPP_DIGITS = "557588653204";

export interface LandingMeta {
  title: string;
  description: string;
  canonicalPath: string;
}

export function landingHead(meta: LandingMeta) {
  const canonical = `https://city-op-hq.lovable.app${meta.canonicalPath}`;
  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: meta.title },
      { name: "twitter:description", content: meta.description },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`;
  window.location.assign(url);
}

export function CampaignShell({ children, ctaLabel }: { children: ReactNode; ctaLabel: string }) {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteNav ctaLabel={ctaLabel} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

interface CampaignHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  cta: string;
  image: string;
  imageAlt: string;
  proof?: string[];
}

export function CampaignHero({ eyebrow, title, description, cta, image, imageAlt, proof = [] }: CampaignHeroProps) {
  return (
    <section className="relative isolate min-h-[760px] bg-brand-black text-brand-white md:min-h-[820px]">
      <img src={image} alt={imageAlt} width={1600} height={1104} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/10" />
      <div className="mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-16 pt-32 md:min-h-[820px] md:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="mb-6 text-xs font-bold uppercase text-primary md:text-sm">{eyebrow}</p>
          <h1 className="text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-brand-white/75 md:text-xl md:leading-8">{description}</p>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-14 w-full px-7 text-sm font-bold uppercase sm:w-auto">
              <a href="#conversao">{cta}<ArrowDown aria-hidden="true" /></a>
            </Button>
            {proof.length > 0 && <p className="max-w-sm text-xs leading-5 text-brand-white/50">{proof.join(" • ")}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: ReactNode; description?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase text-primary">{eyebrow}</p>
      <h2 className={cn("mt-4 text-4xl font-bold leading-tight md:text-6xl", light ? "text-brand-white" : "text-foreground")}>{title}</h2>
      {description && <p className={cn("mt-5 text-base leading-7 md:text-lg", light ? "text-brand-white/65" : "text-muted-foreground")}>{description}</p>}
    </div>
  );
}

export interface FeatureItem { title: string; description: string; icon?: ReactNode }

export function FeatureGrid({ items, columns = 3, dark = false }: { items: FeatureItem[]; columns?: 3 | 4 | 6; dark?: boolean }) {
  return (
    <div className={cn("grid gap-3", columns === 3 && "md:grid-cols-3", columns === 4 && "md:grid-cols-2 lg:grid-cols-4", columns === 6 && "grid-cols-2 md:grid-cols-3 lg:grid-cols-6")}>
      {items.map((item) => (
        <article key={item.title} className={cn("rounded-lg border p-6", dark ? "border-brand-white/10 bg-brand-white/5" : "border-border bg-card")}>
          {item.icon && <div className="mb-8 text-primary">{item.icon}</div>}
          <h3 className={cn("text-lg font-bold", dark && "text-brand-white")}>{item.title}</h3>
          <p className={cn("mt-2 text-sm leading-6", dark ? "text-brand-white/55" : "text-muted-foreground")}>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: FeatureItem[] }) {
  return (
    <div className="grid gap-0 overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
      {steps.map((step, index) => (
        <article key={step.title} className="relative bg-background p-7">
          <span className="text-xs font-bold text-primary">0{index + 1}</span>
          <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
          {index < steps.length - 1 && <ArrowRight aria-hidden="true" className="absolute right-5 top-7 hidden text-muted-foreground md:block" />}
        </article>
      ))}
    </div>
  );
}

const baseSchema = z.object({
  name: z.string().trim().min(3, "Informe seu nome completo.").max(100),
  phone: z.string().trim().min(10, "Informe um telefone válido.").max(20),
  city: z.string().trim().min(2, "Informe sua cidade.").max(100),
  state: z.string().trim().length(2, "Use a sigla do estado."),
});

type FormErrors = Record<string, string>;

function Field({ label, name, error, ...props }: ComponentProps<typeof Input> & { label: string; name: string; error?: string }) {
  return (
    <label className="block text-sm font-semibold" htmlFor={name}>
      {label}
      <Input id={name} name={name} className="mt-2 h-12 bg-background" aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} {...props} />
      {error && <span id={`${name}-error`} className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

export interface LeadFormConfig {
  type: "embaixador" | "comercio" | "mototaxi" | "executivo";
  title: string;
  description: string;
  qualification?: string;
}

export function LeadForm({ config }: { config: LeadFormConfig }) {
  const [errors, setErrors] = useState<FormErrors>({});
  const schema = useMemo(() => baseSchema.extend({
    email: config.type === "embaixador" ? z.string().trim().email("Informe um e-mail válido.").max(255) : z.string().optional(),
    establishment: config.type === "comercio" ? z.string().trim().min(2, "Informe o estabelecimento.").max(120) : z.string().optional(),
    category: config.type === "comercio" ? z.string().trim().min(2, "Informe a categoria.").max(80) : z.string().optional(),
    qualification: config.type === "embaixador" ? z.string().trim().min(1, "Selecione uma opção.") : z.string().optional(),
  }), [config.type]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries());
    const result = schema.safeParse(values);
    if (!result.success) {
      setErrors(Object.fromEntries(result.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      return;
    }
    setErrors({});
    const data = result.data;
    const place = `${data.city}/${data.state.toUpperCase()}`;
    const messages = {
      embaixador: `Olá! Acabei de fazer meu pré-cadastro para conhecer a oportunidade de Embaixador Bora Zé em ${place}.\n\nNome: ${data.name}\n\nE-mail: ${data.email}\n\nTelefone: ${data.phone}\n\nCidade de interesse: ${place}\n\nDisponibilidade de investimento: ${data.qualification}`,
      comercio: `Olá! Quero cadastrar meu estabelecimento no Bora Zé.\n\nNome: ${data.name}\n\nEstabelecimento: ${data.establishment}\n\nCategoria: ${data.category}\n\nCidade: ${place}\n\nTelefone: ${data.phone}`,
      mototaxi: `Olá! Quero me cadastrar como mototaxista parceiro Bora Zé.\n\nNome: ${data.name}\n\nCidade: ${place}\n\nTelefone: ${data.phone}`,
      executivo: `Olá! Vim pela página de Executivo Bora Zé e quero entender como participar.\n\nNome: ${data.name}\n\nCidade: ${place}\n\nTelefone: ${data.phone}`,
    };
    openWhatsApp(messages[config.type]);
  }

  return (
    <section id="conversao" className="bg-brand-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading eyebrow="Próximo passo" title={config.title} description={config.description} />
        <form onSubmit={submit} noValidate className="rounded-lg border border-border bg-card p-5 shadow-xl shadow-brand-black/5 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2"><Field label="Nome completo" name="name" autoComplete="name" maxLength={100} error={errors.name} /></div>
            <Field label="WhatsApp / telefone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={20} error={errors.phone} />
            {config.type === "embaixador" && <Field label="E-mail" name="email" type="email" autoComplete="email" maxLength={255} error={errors.email} />}
            {config.type === "comercio" && <Field label="Nome do estabelecimento" name="establishment" maxLength={120} error={errors.establishment} />}
            {config.type === "comercio" && <Field label="Categoria" name="category" maxLength={80} placeholder="Ex.: Restaurante" error={errors.category} />}
            <Field label={config.type === "embaixador" ? "Cidade de interesse" : "Cidade"} name="city" autoComplete="address-level2" maxLength={100} error={errors.city} />
            <Field label="Estado (UF)" name="state" autoComplete="address-level1" maxLength={2} placeholder="BA" error={errors.state} />
          </div>
          {config.type === "embaixador" && <QualificationSelect error={errors.qualification} />}
          <Button type="submit" size="lg" className="mt-7 h-14 w-full text-sm font-bold uppercase">{config.type === "embaixador" ? "Quero analisar minha cidade" : config.type === "comercio" ? "Cadastrar meu negócio" : config.type === "mototaxi" ? "Quero me cadastrar" : "Falar com o time"}<ArrowRight aria-hidden="true" /></Button>
          <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">Ao continuar, você será direcionado ao WhatsApp oficial do Bora Zé.</p>
        </form>
      </div>
    </section>
  );
}

function QualificationSelect({ error }: { error?: string }) {
  const options = [
    "Sim, tenho disponibilidade para investir agora.",
    "Tenho interesse, mas precisaria me organizar.",
    "Quero entender melhor o modelo antes de decidir.",
    "Não tenho disponibilidade neste momento.",
  ];
  return (
    <fieldset className="mt-7 border-t border-border pt-7">
      <legend className="text-base font-bold">Hoje, você teria disponibilidade para investir aproximadamente R$ 10 mil para iniciar uma operação Bora Zé, caso sua cidade seja aprovada?</legend>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">O projeto pode exigir investimento inicial em torno de R$ 10 mil, conforme cidade, configuração e condições comerciais apresentadas pela equipe.</p>
      <div className="mt-5 grid gap-3">
        {options.map((option) => <label key={option} className="flex cursor-pointer items-start gap-3 rounded-md border border-border p-4 text-sm hover:border-primary"><input type="radio" name="qualification" value={option} className="mt-1 accent-primary" />{option}</label>)}
      </div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </fieldset>
  );
}

export function PlatformMark() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
      <img src={logo.url} alt="Bora Zé" loading="lazy" className="h-10 w-auto" />
      <div className="flex items-center gap-3 text-sm text-brand-white/60"><Smartphone className="text-primary" aria-hidden="true" />Um aplicativo conectado ao comércio e à mobilidade local.</div>
    </div>
  );
}

export function SimpleFaq({ items }: { items: { q: string; a: string }[] }) {
  return <div className="divide-y divide-border border-y border-border">{items.map((item) => <details key={item.q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{item.q}<ChevronDown className="transition-transform group-open:rotate-180" aria-hidden="true" /></summary><p className="max-w-3xl pt-3 text-sm leading-6 text-muted-foreground">{item.a}</p></details>)}</div>;
}

export function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return <ul className="grid gap-3 sm:grid-cols-2">{items.map((item) => <li key={item} className={cn("flex items-center gap-3 text-sm", light ? "text-brand-white/75" : "text-foreground")}><span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-3.5" aria-hidden="true" /></span>{item}</li>)}</ul>;
}