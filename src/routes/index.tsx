import { createFileRoute } from "@tanstack/react-router";
import { CommercePage } from "@/components/campaign-pages";
import { BorazeIntro } from "@/components/boraze-intro";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/")({
  head: () =>
    landingHead({
      title: "BoraZé! — O Super App da sua cidade",
      description:
        "Conheça o BoraZé!, o Super App que conecta consumidores, comércios, entregas, mobilidade e serviços locais em um só lugar.",
      canonicalPath: "/",
    }),
  component: BorazeHomePage,
});


function BorazeHomePage() {
  return (
    <>
      <BorazeIntro />
      <CommercePage />
    </>
  );
}
