import { createFileRoute } from "@tanstack/react-router";
import { CommercePage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/comercio")({
  head: () =>
    landingHead({
      title: "Bora Zé para Comércio — Mais clientes no celular",
      description:
        "Crie um novo canal de vendas para mais clientes da sua cidade encontrarem e pedirem no seu negócio.",
      canonicalPath: "/comercio",
    }),
  component: CommercePage,
});
