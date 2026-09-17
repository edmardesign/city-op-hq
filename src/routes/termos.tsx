import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Bora Zé" },
      { name: "description", content: "Termos de Uso do ecossistema Bora Zé." },
      { property: "og:title", content: "Termos de Uso — Bora Zé" },
      { property: "og:description", content: "Termos de Uso do ecossistema Bora Zé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-xs font-semibold text-muted-foreground hover:border-primary hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Voltar
        </Link>
        <h1 className="mt-10 text-5xl font-bold leading-tight md:text-7xl">{title}</h1>
        <div className="mt-10 space-y-6 text-base text-foreground/75 md:text-lg">
          <p>
            Esta página está em elaboração. A versão definitiva será publicada em breve, revisada
            por assessoria jurídica especializada em Direito Digital e LGPD.
          </p>
          <p>
            Em caso de dúvidas sobre coleta de dados ou uso da plataforma, entre em contato pelo
            formulário de reserva de cidade ou pelo canal de suporte.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
