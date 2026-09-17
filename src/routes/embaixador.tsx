import { createFileRoute } from "@tanstack/react-router";
import { AmbassadorPage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/embaixador")({
  head: () =>
    landingHead({
      title: "Embaixador Bora Zé — Operação digital na sua cidade",
      description:
        "Conheça a oportunidade de desenvolver uma operação local Bora Zé com tecnologia, treinamento e suporte.",
      canonicalPath: "/embaixador",
    }),
  component: AmbassadorPage,
});
