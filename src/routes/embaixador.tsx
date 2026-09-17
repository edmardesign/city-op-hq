import { createFileRoute } from "@tanstack/react-router";
import { AmbassadorPage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/embaixador")({
  head: () =>
    landingHead({
      title: "Embaixador Bora Zé — Ganhe com sua cidade",
      description:
        "Conheça a oportunidade de desenvolver uma operação digital conectada ao movimento econômico da sua cidade.",
      canonicalPath: "/embaixador",
    }),
  component: AmbassadorPage,
});
