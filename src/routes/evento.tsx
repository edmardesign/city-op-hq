import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/event-page";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/evento")({
  head: () =>
    landingHead({
      title: "Evento Bora Zé — Renda recorrente com o Super App",
      description:
        "Descubra como participar da movimentação de um Super App criado para o interior e conhecer modelos de renda recorrente. Ingresso por R$ 47,00.",
      canonicalPath: "/evento",
    }),
  component: EventPage,
});
