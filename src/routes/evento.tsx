import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/event-page";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/evento")({
  head: () =>
    landingHead({
      title: "Evento Bora Zé — Oportunidades Embaixador e Executivo",
      description:
        "Conheça o modelo Bora Zé, as oportunidades de Embaixador e Executivo e participe do evento de lançamento. Ingresso por R$ 47,00.",
      canonicalPath: "/evento",
    }),
  component: EventPage,
});
