import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/boraze-logo.png.asset.json";
import { Button } from "@/components/ui/button";

interface SiteNavProps {
  ctaHref?: string;
  ctaLabel?: string;
}

export function SiteNav({ ctaHref = "#conversao", ctaLabel = "Quero começar" }: SiteNavProps) {
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
        <Button asChild size="lg" className="h-11 px-4 text-xs font-bold uppercase md:px-6">
          <a href={ctaHref}>
            {ctaLabel}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const links = [
    { to: "/executivo" as const, label: "Executivo" },
    { to: "/embaixador" as const, label: "Embaixador" },
    { to: "/comercio" as const, label: "Comércio" },
    { to: "/mototaxi" as const, label: "Mototáxi" },
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
