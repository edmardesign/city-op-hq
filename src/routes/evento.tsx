import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/event-page";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/evento")({
  head: () =>
    landingHead({
      title: "Evento Bora Zé — Agentes de IA na prática",
      description:
        "Aprenda como usar agentes de IA em vendas, atendimento, marketing e operação. Ingresso por R$ 47,00.",
      canonicalPath: "/evento",
    }),
  component: EventPage,
});
