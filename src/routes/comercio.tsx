import { createFileRoute } from "@tanstack/react-router";
import { CommercePage } from "@/components/campaign-pages";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/comercio")({
  head: () => landingHead({ title: "Bora Zé para Comércio — Coloque sua loja no app", description: "Cadastre seu comércio no aplicativo Bora Zé e receba pedidos de clientes da sua cidade.", canonicalPath: "/comercio" }),
  component: CommercePage,
});