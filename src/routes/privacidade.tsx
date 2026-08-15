import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./termos";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — BoraZé! Embaixador" },
      { name: "description", content: "Política de Privacidade do programa BoraZé! Embaixador." },
      { property: "og:title", content: "Política de Privacidade — BoraZé! Embaixador" },
      { property: "og:description", content: "Política de Privacidade do programa BoraZé! Embaixador." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://mtztextfature10.lovable.app/privacidade" }],
  }),
  component: () => <LegalPage title="Política de Privacidade" />,
});
