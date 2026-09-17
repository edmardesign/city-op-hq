import { createFileRoute } from "@tanstack/react-router";
import { MotoTaxiPage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/mototaxi")({
  head: () =>
    landingHead({
      title: "Mototaxista Bora Zé — Receba mais chamadas",
      description:
        "Tenha mais um canal para receber solicitações de passageiros da sua cidade diretamente pelo celular.",
      canonicalPath: "/mototaxi",
    }),
  component: MotoTaxiPage,
});
