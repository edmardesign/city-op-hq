import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./termos";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Bora Zé" },
      { name: "description", content: "Política de Privacidade do ecossistema Bora Zé." },
      { property: "og:title", content: "Política de Privacidade — Bora Zé" },
      { property: "og:description", content: "Política de Privacidade do ecossistema Bora Zé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://mtztextfature10.lovable.app/privacidade" }],
  }),
  component: () => <LegalPage title="Política de Privacidade" />,
});
