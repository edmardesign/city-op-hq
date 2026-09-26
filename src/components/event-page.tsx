import { useState } from "react";
import {
  ArrowRight,
  Bike,
  Building2,
  Flame,
  HeartPulse,
  PackageOpen,
  ShoppingBasket,
  Smartphone,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import smartBusiness from "@/assets/executivo-negocio-inteligente-mobile.webp.asset.json";
import appHome from "@/assets/app-home-boraze-mobile.webp.asset.json";
import appDelivery from "@/assets/app-delivery-boraze-mobile.webp.asset.json";
import motoImage from "@/assets/mototaxi-boraze.webp.asset.json";
import {
  CampaignHero,
  CheckList,
  FeatureGrid,
  MediaBand,
  PlatformMark,
  ProcessSteps,
  SectionHeading,
  SimpleFaq,
} from "@/components/landing-system";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const ticketUrl = getWhatsAppUrl(
  "Olá! Quero participar do Evento Online BoraZé! nos dias 27 e 28 de outubro e garantir meu ingresso de R$ 47,00.",
);

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

function TicketButton({ className = "", label = "GARANTIR MEU INGRESSO — R$ 47" }: { className?: string; label?: string }) {
  return (
    <Button asChild size="lg" className={"h-14 rounded-xl px-7 font-bold " + className}>
      <a href={ticketUrl} target="_blank" rel="noreferrer">
        {label}
        <ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}

function EventSimulator() {
  const [businesses, setBusinesses] = useState(20);
  const [drivers, setDrivers] = useState(15);

  const deliveryGmv = businesses * 3 * 35 * 30;
  const deliveryParticipation = deliveryGmv * 0.05;
  const monthlyRides = drivers * 4 * 30;
  const rideParticipation = monthlyRides;
  const total = deliveryParticipation + rideParticipation;

  return (
    <section className="bg-brand-black py-20 text-brand-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          light
          eyebrow="Simulação de cenário"
          title="Comece visualizando um cenário próximo de R$ 5 mil por mês."
          description="Ajuste os controles para entender como estabelecimentos ativos e corridas podem alterar a movimentação mensal de uma operação local."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8 rounded-xl border border-brand-white/10 bg-brand-white/5 p-6 md:p-8">
            <div>
              <div className="flex items-end justify-between gap-4">
                <label htmlFor="event-businesses" className="text-sm font-semibold">Estabelecimentos ativos</label>
                <p className="text-2xl font-bold text-primary">{businesses}</p>
              </div>
              <input
                id="event-businesses"
                type="range"
                min={20}
                max={80}
                step={5}
                value={businesses}
                onChange={(e) => setBusinesses(Number(e.target.value))}
                className="mt-5 w-full accent-primary"
              />
            </div>

            <div>
              <div className="flex items-end justify-between gap-4">
                <label htmlFor="event-drivers" className="text-sm font-semibold">Mototaxistas ativos</label>
                <p className="text-2xl font-bold text-primary">{drivers}</p>
              </div>
              <input
                id="event-drivers"
                type="range"
                min={15}
                max={50}
                step={5}
                value={drivers}
                onChange={(e) => setDrivers(Number(e.target.value))}
                className="mt-5 w-full accent-primary"
              />
            </div>

            <div className="rounded-lg border border-brand-white/10 p-4 text-xs leading-5 text-brand-white/45">
              Cenário ilustrativo: 3 pedidos/dia por estabelecimento, ticket médio de R$ 35, participação simulada de 5% no delivery, 4 corridas/dia por mototaxista e R$ 1 por corrida.
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-white/10 bg-brand-white/5 p-6">
              <p className="text-xs uppercase text-brand-white/45">Movimentação delivery / mês</p>
              <p className="mt-2 text-3xl font-bold">{currency.format(deliveryGmv)}</p>
            </div>
            <div className="rounded-lg border border-brand-white/10 bg-brand-white/5 p-6">
              <p className="text-xs uppercase text-brand-white/45">Participação delivery simulada</p>
              <p className="mt-2 text-3xl font-bold">{currency.format(deliveryParticipation)}</p>
            </div>
            <div className="rounded-lg border border-brand-white/10 bg-brand-white/5 p-6">
              <p className="text-xs uppercase text-brand-white/45">Corridas / mês</p>
              <p className="mt-2 text-3xl font-bold">{monthlyRides.toLocaleString("pt-BR")}</p>
            </div>
            <div className="rounded-lg border border-brand-white/10 bg-brand-white/5 p-6">
              <p className="text-xs uppercase text-brand-white/45">Participação mototáxi simulada</p>
              <p className="mt-2 text-3xl font-bold">{currency.format(rideParticipation)}</p>
            </div>

            <div className="rounded-lg bg-primary p-6 text-primary-foreground sm:col-span-2">
              <p className="text-sm font-semibold">Cenário potencial mensal</p>
              <p className="mt-2 text-4xl font-bold md:text-5xl">{currency.format(total)}</p>
            </div>
          </div>
        </div>

        <p className="mt-5 text-xs leading-5 text-brand-white/40">
          Simulação meramente ilustrativa. Não representa promessa ou garantia de faturamento. Resultados variam conforme cidade, adesão, volume, regras vigentes e execução.
        </p>
      </div>
    </section>
  );
}

export function EventPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav hideCta />

      <main>
        <CampaignHero
          eyebrow="EVENTO ONLINE • 27 E 28 DE OUTUBRO • 20H"
          title={
            <>
              Fature R$ 5.000,00+ por mês com nosso <span className="text-primary">SUPER APP</span>
            </>
          }
          description="Conheça o BoraZé!, entenda como funciona a economia da plataforma e descubra as oportunidades de Embaixador e Executivo."
          cta="QUERO CONHECER ESSA OPORTUNIDADE"
          image={smartBusiness.url}
          imageAlt="Executivo BoraZé apresentando o Super App no celular"
          proof={["Evento online", "2 noites ao vivo", "Ingresso R$ 47"]}
          imagePosition="object-top"
        />

        <section className="bg-brand-black py-9 text-brand-white">
          <PlatformMark />
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="EXISTE DINHEIRO CIRCULANDO TODOS OS DIAS NA SUA CIDADE."
              title={
                <>
                  E agora existe uma oportunidade de{" "}
                  <span className="text-muted-foreground">participar desse movimento.</span>
                </>
              }
              description="Imagine ganhar quando alguém pede comida, quando uma família compra no mercado, quando alguém pede um medicamento, solicita gás ou água ou chama um mototáxi."
            />

            <div className="mt-12">
              <FeatureGrid
                items={[
                  { title: "Delivery", description: "Pedidos de restaurantes e lanchonetes.", icon: <UtensilsCrossed /> },
                  { title: "Mercado", description: "Compras que fazem parte da rotina local.", icon: <ShoppingBasket /> },
                  { title: "Farmácia", description: "Medicamentos e conveniência.", icon: <HeartPulse /> },
                  { title: "Gás e água", description: "Itens essenciais todos os dias.", icon: <Flame /> },
                  { title: "Comércio", description: "Lojas e negócios da cidade.", icon: <PackageOpen /> },
                  { title: "Mototáxi", description: "Mobilidade local conectada.", icon: <Bike /> },
                ]}
                columns={6}
              />
            </div>

            <p className="mt-8 max-w-4xl text-2xl font-bold leading-tight md:text-4xl">
              Agora imagine tudo isso acontecendo dentro de uma única plataforma. Esse é o BoraZé!
            </p>
          </div>
        </section>

        <MediaBand
          image={appHome.url}
          alt="Super App BoraZé reunindo comércio e serviços locais"
          eyebrow="NÃO É APENAS MAIS UM APP DE DELIVERY."
          title="É UM SUPER APP PARA O INTERIOR."
          description="O BoraZé! foi pensado para reunir comida, mercado, farmácia, bebidas, gás e água, mototáxi, comércio local e serviços dentro de um único ecossistema."
        />

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                light
                eyebrow="O INTERIOR ESTÁ MUDANDO."
                title="O dinheiro já circula. A oportunidade é conectar esse movimento."
                description="Restaurantes vendem. Mercados vendem. Farmácias vendem. Lojas vendem. Gás e água são entregues. Mototaxistas fazem corridas. Prestadores realizam serviços."
              />
              <div className="mt-9">
                <CheckList
                  light
                  items={[
                    "Consumidores já compram todos os dias",
                    "Comerciantes já precisam de novos clientes",
                    "Mototaxistas já fazem corridas",
                    "Serviços locais já movimentam dinheiro",
                    "O BoraZé organiza esse ecossistema",
                    "Embaixadores e Executivos podem participar da expansão",
                  ]}
                />
              </div>
            </div>

            <img
              src={appDelivery.url}
              loading="lazy"
              width={768}
              height={1024}
              alt="BoraZé conectando pedidos e negócios locais"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="DUAS OPORTUNIDADES."
              title="Duas formas de ganhar com a expansão."
              description="No evento você conhecerá detalhadamente os dois modelos e poderá avaliar qual deles combina mais com o seu perfil."
            />
            <div className="mt-12">
              <ProcessSteps
                steps={[
                  {
                    title: "Embaixador BoraZé!",
                    description:
                      "Desenvolva a operação BoraZé! em uma cidade, ajude a fortalecer o ecossistema local e participe dos resultados conforme as regras do programa.",
                  },
                  {
                    title: "Executivo BoraZé!",
                    description:
                      "Conecte estabelecimentos ao Super App, construa uma carteira de parceiros e participe da expansão conforme as regras vigentes.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <MediaBand
          image={motoImage.url}
          alt="Mototáxi integrado ao ecossistema BoraZé"
          eyebrow="RECORRÊNCIA"
          title="O verdadeiro potencial está no que continua acontecendo mês após mês."
          description="Um estabelecimento pode continuar vendendo. Uma cidade pode continuar fazendo pedidos. Mototaxistas podem continuar recebendo chamadas. Consumidores podem continuar usando a plataforma. É isso que diferencia um ecossistema digital de uma venda pontual."
          reverse
        />

        <EventSimulator />

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="O QUE VOCÊ VAI VER NO EVENTO"
              title="Em 2 noites, vamos abrir o modelo BoraZé por dentro."
              description="Nos dias 27 e 28 de outubro, às 20h, você verá o funcionamento da plataforma, a lógica econômica e as oportunidades."
            />

            <div className="mt-12">
              <ProcessSteps
                steps={[
                  { title: "A oportunidade no interior", description: "Por que milhares de cidades ainda têm espaço para uma plataforma local." },
                  { title: "Por dentro do Super App", description: "Como consumidores, comércios, entregadores e mototaxistas se conectam." },
                  { title: "De onde vem o dinheiro", description: "A lógica de monetização e as fontes de receita da operação." },
                  { title: "Modelo Embaixador", description: "Papel, responsabilidades, operação e lógica de recorrência." },
                  { title: "Modelo Executivo", description: "Prospecção, carteira de parceiros e participação na expansão." },
                  { title: "Simulações e abertura", description: "Cenários, critérios, condições e próximos passos para quem decidir avançar." },
                ]}
              />
            </div>
          </div>
        </section>

        <section id="ingresso" className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-2xl shadow-brand-black/5">
              <div className="bg-brand-black px-6 py-10 text-center text-brand-white md:px-12 md:py-14">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  EVENTO ONLINE BORA ZÉ! • 27 E 28 DE OUTUBRO • 20H
                </p>
                <h2 className="mt-4 text-4xl font-bold md:text-6xl">
                  Conheça por dentro o Super App e as oportunidades de Embaixador e Executivo.
                </h2>
                <p className="mt-7 text-sm font-bold uppercase text-brand-white/50">INGRESSO INDIVIDUAL</p>
                <p className="mt-3 text-7xl font-bold text-primary md:text-8xl">R$ 47</p>
              </div>

              <div className="p-6 md:p-10">
                <CheckList
                  items={[
                    "Evento online",
                    "Apresentação do Super App",
                    "Modelo Embaixador",
                    "Modelo Executivo",
                    "Fontes de receita",
                    "Recorrência",
                    "Simulações de cenários",
                    "Condições de participação",
                    "Abertura oficial das oportunidades",
                  ]}
                />
                <TicketButton className="mt-9 w-full" />
                <p className="mt-5 text-center text-xs leading-5 text-muted-foreground">
                  O ingresso dá acesso ao evento. A entrada nos programas Embaixador ou Executivo é opcional e possui condições próprias. Resultados financeiros não são garantidos e dependem, entre outros fatores, de execução, mercado, adesão e movimentação da plataforma.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <SectionHeading eyebrow="Perguntas frequentes" title="Antes de garantir seu ingresso." />
            <div className="mt-10">
              <SimpleFaq
                items={[
                  {
                    q: "Quando acontece o evento?",
                    a: "O evento será online, nos dias 27 e 28 de outubro, às 20h.",
                  },
                  {
                    q: "Quanto custa o ingresso?",
                    a: "O ingresso individual custa R$ 47,00.",
                  },
                  {
                    q: "O ingresso já me torna Embaixador ou Executivo?",
                    a: "Não. O ingresso dá acesso ao evento. A entrada em qualquer programa é opcional e depende das condições apresentadas.",
                  },
                  {
                    q: "Quanto é possível ganhar?",
                    a: "No evento apresentaremos cenários e a lógica econômica. Não há promessa de renda fixa e os resultados dependem da execução, do mercado e da movimentação da plataforma.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              SUA CIDADE JÁ COMPRA. JÁ VENDE. JÁ PEDE. JÁ SE MOVIMENTA.
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              A oportunidade é conectar tudo isso.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-white/65">
              O BoraZé! está construindo um Super App pensado para o interior. Talvez a próxima cidade seja a sua.
            </p>
            <div className="mt-9">
              <TicketButton className="w-full sm:w-auto" label="QUERO PARTICIPAR DO EVENTO — R$ 47" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
