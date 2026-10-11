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
      structuredData: [{"@context":"https://schema.org","@type":"Organization","@id":"https://boraze.app.br/#organization","name":"BoraZé!","alternateName":["BoraZé","Bora Zé","BoraZé! Super App"],"url":"https://boraze.app.br/"},{"@context":"https://schema.org","@type":"WebSite","@id":"https://boraze.app.br/#website","name":"BoraZé!","url":"https://boraze.app.br/","publisher":{"@id":"https://boraze.app.br/#organization"}},{"@context":"https://schema.org","@type":"SoftwareApplication","@id":"https://boraze.app.br/#app","name":"BoraZé! Super App","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"Plataforma de comércio local, delivery, entregas e mototáxi em cidades brasileiras.","url":"https://boraze.app.br/"}],
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
