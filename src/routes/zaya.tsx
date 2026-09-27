import { createFileRoute } from "@tanstack/react-router";
import { ZayaPage } from "@/components/zaya-page";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/zaya")({
  head: () =>
    landingHead({
      title: "Zaya — Sua atendente no WhatsApp",
      description:
        "Conheça a Zaya, a inteligência que conversa com clientes por texto ou áudio, monta pedidos e ajuda seu negócio a vender pelo WhatsApp.",
      canonicalPath: "/zaya",
    }),
  component: ZayaPage,
});
