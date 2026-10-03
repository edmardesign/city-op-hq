import { createFileRoute } from "@tanstack/react-router";
import { CommercePage } from "@/components/campaign-pages";
import { BorazeIntro } from "@/components/boraze-intro";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/")({
  head: () =>
    landingHead({
      title: "Super App para Comércio, Delivery e Mototáxi | BoraZé!",
      description:
        "BoraZé! reúne comércio local, restaurantes, delivery, entregas e mototáxi em um Super App para cidades brasileiras. Conheça como funciona.",
      canonicalPath: "/",
      structuredData: [{"@context":"https://schema.org","@type":"Organization","@id":"https://city-op-hq.lovable.app/#organization","name":"BoraZé!","url":"https://city-op-hq.lovable.app/"},{"@context":"https://schema.org","@type":"WebSite","@id":"https://city-op-hq.lovable.app/#website","name":"BoraZé!","url":"https://city-op-hq.lovable.app/","publisher":{"@id":"https://city-op-hq.lovable.app/#organization"}},{"@context":"https://schema.org","@type":"SoftwareApplication","@id":"https://city-op-hq.lovable.app/#app","name":"BoraZé! Super App","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"Plataforma de comércio local, delivery, entregas e mototáxi em cidades brasileiras.","url":"https://city-op-hq.lovable.app/"}],
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
