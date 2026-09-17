import { createFileRoute } from "@tanstack/react-router";
import { ExecutivePage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/")({
  head: () => landingHead({ title: "Executivo Bora Zé — Negócios locais em uma plataforma", description: "Participe do desenvolvimento do ecossistema Bora Zé conectando negócios locais à plataforma.", canonicalPath: "/" }),
  component: ExecutivePage,
});