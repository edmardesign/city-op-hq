import { createFileRoute } from "@tanstack/react-router";
import { ExecutivePage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/executivo")({
  head: () =>
    landingHead({
      title: "Executivo Bora Zé — Ganhe com negócios locais",
      description:
        "Construa sua oportunidade conectando negócios locais a uma plataforma pronta, sem precisar ser dono de uma loja.",
      canonicalPath: "/executivo",
    }),
  component: ExecutivePage,
});
