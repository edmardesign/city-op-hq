import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/boraze-logo-2026-mobile.webp.asset.json";
import { Button } from "@/components/ui/button";
import { OPEN_LEAD_DIALOG_EVENT } from "@/components/progressive-lead-dialog";

interface SiteNavProps {
  ctaLabel?: string;
  /** Some campaigns concentrate the single call to action at the end of the page. */
  hideCta?: boolean;
}

export function SiteNav({ ctaLabel = "Quero começar", hideCta = false }: SiteNavProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-brand-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          to="/"
          aria-label="Bora Zé — início"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <img src={logo.url} alt="Bora Zé" className="h-8 w-auto md:h-9" />
        </Link>
        {!hideCta && (
          <Button
            size="lg"
            onClick={() => window.dispatchEvent(new Event(OPEN_LEAD_DIALOG_EVENT))}
            className="h-11 rounded-xl px-4 text-xs font-bold md:px-6"
          >
            {ctaLabel}
            <ArrowUpRight aria-hidden="true" />
          </Button>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  const links = [
    { to: "/comercio" as const, label: "Parceiros" },
    { to: "/mototaxi" as const, label: "Mototáxi" },
    { to: "/embaixador" as const, label: "Embaixador" },
    { to: "/termos" as const, label: "Termos" },
    { to: "/privacidade" as const, label: "Privacidade" },
  ];

  return (
    <footer className="border-t border-border bg-brand-black py-10 text-brand-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <img src={logo.url} alt="Bora Zé" className="h-7 w-auto opacity-90" loading="lazy" />
          <nav
            aria-label="Outras oportunidades Bora Zé"
            className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-brand-white/45"
          >
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors hover:text-brand-white focus-visible:text-brand-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-xs text-brand-white/35">
          © {new Date().getFullYear()} Bora Zé. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
