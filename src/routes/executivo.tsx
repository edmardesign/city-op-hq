import { createFileRoute } from "@tanstack/react-router";
import { ExecutivePage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/executivo")({
  head: () =>
    landingHead({
      title: "Executivo Bora Zé — Ganhe com negócios locais",
      description:
        "Conheça o programa Executivo Bora Zé e desenvolva uma carteira de negócios locais conectados à plataforma.",
      canonicalPath: "/executivo",
    }),
  component: ExecutivePage,
});
