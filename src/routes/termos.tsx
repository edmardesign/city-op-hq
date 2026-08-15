import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — BoraZé! Embaixador" },
      { name: "description", content: "Termos de Uso do programa BoraZé! Embaixador." },
      { property: "og:title", content: "Termos de Uso — BoraZé! Embaixador" },
      { property: "og:description", content: "Termos de Uso do programa BoraZé! Embaixador." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://mtztextfature10.lovable.app/termos" }],
  }),
  component: TermosPage,
});

function TermosPage() {
  return <LegalPage title="Termos de Uso" />;
}

export function LegalPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-white/10 bg-black/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:border-[var(--neon)]/60 hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Voltar
        </Link>
        <h1 className="mt-10 font-display uppercase leading-[0.9] text-5xl md:text-7xl">
          {title}
        </h1>
        <div className="mt-10 space-y-6 text-base text-foreground/75 md:text-lg">
          <p>
            Esta página está em elaboração. A versão definitiva será publicada em breve,
            revisada por assessoria jurídica especializada em Direito Digital e LGPD.
          </p>
          <p>
            Em caso de dúvidas sobre coleta de dados ou uso da plataforma, entre em
            contato pelo formulário de reserva de cidade ou pelo canal de suporte.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
