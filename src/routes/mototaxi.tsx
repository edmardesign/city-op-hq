import { createFileRoute } from "@tanstack/react-router";
import { MotoTaxiPage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/mototaxi")({
  head: () =>
    landingHead({
      title: "Bora Zé para Mototaxistas e Entregadores",
      description:
        "Cadastre-se para receber oportunidades de corridas e entregas pelo aplicativo local Bora Zé, conforme a operação disponível na sua cidade.",
      canonicalPath: "/mototaxi",
    }),
  component: MotoTaxiPage,
});
