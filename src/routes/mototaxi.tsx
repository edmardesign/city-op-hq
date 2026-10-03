import { createFileRoute } from "@tanstack/react-router";
import { MotoTaxiPage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/mototaxi")({
  head: () =>
    landingHead({
      title: "Aplicativo para Mototaxistas e Entregadores | BoraZé!",
      description:
        "Conheça o BoraZé! para mototáxi e entregas na sua cidade. Saiba como se cadastrar e receber solicitações quando houver operação disponível.",
      canonicalPath: "/mototaxi",
    }),
  component: MotoTaxiPage,
});
