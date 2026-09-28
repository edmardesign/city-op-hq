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
      { property: "og:image", content: "https://city-op-hq.lovable.app/__l5e/assets-v1/23d68c5f-8f33-42f9-8931-bfd75d38a52a/app-home-boraze-mobile.webp" },
      { property: "og:image:alt", content: "BoraZé! — Super App para cidades brasileiras" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://city-op-hq.lovable.app/__l5e/assets-v1/23d68c5f-8f33-42f9-8931-bfd75d38a52a/app-home-boraze-mobile.webp" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://city-op-hq.lovable.app/privacidade" }],
  }),
  component: () => <LegalPage title="Política de Privacidade" />,
});
