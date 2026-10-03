import { createFileRoute } from "@tanstack/react-router";
import { CommercePage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/comercio")({
  head: () =>
    landingHead({
      title: "Aplicativo para Comércio Local e Delivery | BoraZé!",
      description:
        "Cadastre sua loja, restaurante, mercado ou comércio no BoraZé!, o aplicativo de pedidos, delivery e serviços da cidade.",
      canonicalPath: "/comercio",
    }),
  component: CommercePage,
});
