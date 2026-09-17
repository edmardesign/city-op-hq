import { createFileRoute } from "@tanstack/react-router";
import { MotoTaxiPage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/mototaxi")({
  head: () =>
    landingHead({
      title: "Mototaxista parceiro Bora Zé — Cadastre-se",
      description:
        "Receba solicitações de corrida pelo aplicativo Bora Zé e conecte-se a passageiros da sua cidade.",
      canonicalPath: "/mototaxi",
    }),
  component: MotoTaxiPage,
});
