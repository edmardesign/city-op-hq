import type { ReactNode } from "react";
import { ArrowRight, Check, ChevronDown, Smartphone } from "lucide-react";
import logo from "@/assets/boraze-logo-2026-mobile.webp.asset.json";
import {
  ProgressiveLeadDialog,
  OPEN_LEAD_DIALOG_EVENT,
  type ProgressiveLeadConfig,
} from "@/components/progressive-lead-dialog";
import { CommerceLeadDialog } from "@/components/commerce-lead-dialog";
import { DriverDeliveryLeadDialog } from "@/components/driver-delivery-lead-dialog";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import { cn } from "@/lib/utils";


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
  const params = new URLSearchParams(window.location.search);
  const campaign = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
    .map((key) => [key, params.get(key)] as const)
    .filter((entry): entry is readonly [string, string] => Boolean(entry[1]))
    .map(([key, value]) => `${key}: ${value.slice(0, 120)}`)
    .join("\n");
  const trackedMessage = campaign ? `${message}\n\nOrigem da campanha:\n${campaign}` : message;
  openWhatsAppMessage(trackedMessage);
}

export function openLeadDialog() {
  window.dispatchEvent(new Event(OPEN_LEAD_DIALOG_EVENT));
}

export function CampaignShell({
  children,
  ctaLabel,
  leadConfig,
}: {
  children: ReactNode;
  ctaLabel: string;
  leadConfig: ProgressiveLeadConfig;
}) {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteNav ctaLabel={ctaLabel} />
      <main>{children}</main>
      <SiteFooter />
      {leadConfig.type === "comercio" ? (
        <CommerceLeadDialog title={leadConfig.title} description={leadConfig.description} />
      ) : leadConfig.type === "mototaxi" ? (
        <DriverDeliveryLeadDialog title={leadConfig.title} description={leadConfig.description} />
      ) : (
        <ProgressiveLeadDialog config={leadConfig} onComplete={openWhatsApp} />
      )}
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
  imagePosition?: string;
}

export function CampaignHero({
  eyebrow,
  title,
  description,
  cta,
  image,
  imageAlt,
  proof = [],
  imagePosition,
}: CampaignHeroProps) {
  return (
    <section className="relative isolate bg-brand-black pb-12 pt-28 text-brand-white md:pb-20 md:pt-36">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="reveal-up max-w-2xl">
          <p className="text-xs font-bold uppercase text-primary md:text-sm">{eyebrow}</p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-brand-white/70 md:text-lg md:leading-8">
            {description}
          </p>
          <Button
            onClick={openLeadDialog}
            size="lg"
            className="mt-8 h-14 w-full rounded-xl px-7 text-sm font-bold sm:w-auto"
          >
            {cta}
            <ArrowRight aria-hidden="true" />
          </Button>
          {proof.length > 0 && (
            <p className="mt-5 text-xs leading-5 text-brand-white/45">{proof.join(" • ")}</p>
          )}
        </div>
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-brand-charcoal shadow-2xl shadow-primary/10">
          <img
            src={image}
            alt={imageAlt}
            width={768}
            height={960}
            fetchPriority="high"
            className={cn("aspect-[4/5] h-full w-full object-cover", imagePosition)}
          />
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase text-primary">{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 text-4xl font-bold leading-tight md:text-6xl",
          light ? "text-brand-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-7 md:text-lg",
            light ? "text-brand-white/65" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function FeatureGrid({
  items,
  columns = 3,
  dark = false,
}: {
  items: FeatureItem[];
  columns?: 3 | 4 | 6;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid gap-3",
        columns === 3 && "md:grid-cols-3",
        columns === 4 && "md:grid-cols-2 lg:grid-cols-4",
        columns === 6 && "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
      )}
    >
      {items.map((item) => (
        <article
          key={item.title}
          className={cn(
            "rounded-xl border p-5 transition-transform duration-300 hover:-translate-y-1",
            dark ? "border-brand-white/10 bg-brand-white/5" : "border-border bg-card",
          )}
        >
          {item.icon && <div className="mb-7 text-primary">{item.icon}</div>}
          <h3 className={cn("text-base font-bold md:text-lg", dark && "text-brand-white")}>
            {item.title}
          </h3>
          <p
            className={cn(
              "mt-2 text-sm leading-6",
              dark ? "text-brand-white/55" : "text-muted-foreground",
            )}
          >
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: FeatureItem[] }) {
  return (
    <div
      className={cn(
        "grid overflow-hidden rounded-xl border border-border bg-border",
        steps.length === 5
          ? "sm:grid-cols-2 lg:grid-cols-5"
          : steps.length === 6
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-4",
      )}
    >
      {steps.map((step, index) => (
        <article key={step.title} className="relative bg-background p-7">
          <span className="text-xs font-bold text-primary">0{index + 1}</span>
          <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
          {index < steps.length - 1 && (
            <ArrowRight
              aria-hidden="true"
              className={cn(
                "absolute right-5 top-7 hidden text-muted-foreground",
                steps.length === 5 ? "lg:block" : steps.length === 6 ? "sm:block" : "md:block",
              )}
            />
          )}
        </article>
      ))}
    </div>
  );
}

export function ConversionSection({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <section id="conversao" className="bg-brand-surface py-20 md:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-end md:px-8">
        <SectionHeading eyebrow="Próximo passo" title={title} description={description} />
        <Button
          onClick={openLeadDialog}
          size="lg"
          className="h-14 w-full shrink-0 rounded-xl px-7 font-bold md:w-auto"
        >
          {cta}
          <ArrowRight aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}

export function PlatformMark() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
      <img src={logo.url} alt="Bora Zé" loading="lazy" className="h-10 w-auto" />
      <div className="flex items-center gap-3 text-sm text-brand-white/60">
        <Smartphone className="text-primary" aria-hidden="true" />
        Um aplicativo conectado ao comércio e à mobilidade local.
      </div>
    </div>
  );
}

export function MediaBand({
  image,
  alt,
  eyebrow,
  title,
  description,
  reverse = false,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-20 md:py-28">
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="overflow-hidden rounded-2xl bg-muted">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            width={768}
            height={960}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}

export function SimpleFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
            {item.q}
            <ChevronDown
              className="transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-3xl pt-3 text-sm leading-6 text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-center gap-3 text-sm",
            light ? "text-brand-white/75" : "text-foreground",
          )}
        >
          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-3.5" aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
