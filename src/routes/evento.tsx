import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/event-page";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/evento")({
  head: () => {
    const base = landingHead({
      title: "Evento BoraZé! — 27 e 28 de outubro, às 20h",
      description:
        "Evento online BoraZé! nos dias 27 e 28 de outubro, às 20h. Conheça o Super App, seus modelos de participação e a lógica de renda recorrente. Ingresso individual por R$ 47,00.",
      canonicalPath: "/evento",
    });

    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Evento Online BoraZé!",
            description:
              "Evento online BoraZé! nos dias 27 e 28 de outubro, às 20h, com apresentação do Super App, modelos de participação e lógica econômica.",
            startDate: "2026-10-27T20:00:00-03:00",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
            location: {
              "@type": "VirtualLocation",
              url: "https://city-op-hq.lovable.app/evento",
            },
            image:
              "https://city-op-hq.lovable.app/__l5e/assets-v1/23d68c5f-8f33-42f9-8931-bfd75d38a52a/app-home-boraze-mobile.webp",
            organizer: {
              "@type": "Organization",
              name: "BoraZé!",
              url: "https://city-op-hq.lovable.app/",
            },
            offers: {
              "@type": "Offer",
              price: "47.00",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
              url: "https://city-op-hq.lovable.app/evento",
            },
          }),
        },
      ],
    };
  },
  component: EventPage,
});
