import { createFileRoute } from "@tanstack/react-router";
import { AmbassadorPage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/embaixador")({
  head: () =>
    landingHead({
      title: "Operação de Super App em Cidades | Embaixador BoraZé!",
      description:
        "Conheça o modelo de atuação local do BoraZé!: delivery, comércio e mobilidade. Saiba como funciona a análise de disponibilidade da cidade.",
      canonicalPath: "/embaixador",
    }),
  component: AmbassadorPage,
});
