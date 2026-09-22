import { createFileRoute } from "@tanstack/react-router";
import { CommercePage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/")({
  head: () =>
    landingHead({
      title: "Bora Zé para Comércio — Seu negócio no app local",
      description:
        "Cadastre seu comércio no Bora Zé, o aplicativo local que reúne pedidos, compras e serviços da sua cidade em um só lugar.",
      canonicalPath: "/",
    }),
  component: CommercePage,
});
