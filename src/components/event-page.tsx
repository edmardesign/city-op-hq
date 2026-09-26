import {
  ArrowRight,
  Building2,
  Check,
  MapPinned,
  Network,
  ShieldCheck,
  Smartphone,
  Store,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import { SectionHeading, SimpleFaq } from "@/components/landing-system";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const ticketUrl = getWhatsAppUrl(
  "Olá! Quero garantir meu ingresso de R$ 47,00 para o Evento BoraZé e conhecer as oportunidades de Embaixador e Executivo.",
);

const learnItems = [
  {
    icon: <Smartphone />,
    title: "Como funciona o Super App BoraZé!",
    description:
      "Entenda como delivery, comércio local, mototáxi, gás, água, farmácia e outros serviços podem operar dentro de uma única plataforma.",
  },
  {
    icon: <MapPinned />,
    title: "A oportunidade escondida nas cidades",
    description:
      "Veja por que cidades pequenas e médias movimentam muito dinheiro todos os dias e como uma operação local pode participar desse fluxo.",
  },
  {
    icon: <Building2 />,
    title: "O modelo Embaixador BoraZé!",
    description:
      "Conheça o papel de quem lidera o desenvolvimento do BoraZé em uma cidade e participa da construção da operação local.",
  },
  {
    icon: <Store />,
    title: "O modelo Executivo BoraZé!",
    description:
      "Descubra como atuar conectando restaurantes, mercados, farmácias e outros negócios ao Super App.",
  },
  {
    icon: <WalletCards />,
    title: "De onde vem a receita",
    description:
      "Entenda as fontes de receita da plataforma, como a movimentação local gera resultado e como os programas participam desse ecossistema.",
  },
  {
    icon: <Network />,
    title: "Como entrar na expansão",
    description:
      "No evento você conhecerá os caminhos para participar do crescimento do BoraZé e as condições de entrada apresentadas no lançamento.",
  },
];

const program = [
  {
    number: "01",
    title: "O dinheiro que já circula na sua cidade",
    text:
      "Vamos mostrar o tamanho da economia cotidiana: comida, mercado, farmácia, gás, água, mobilidade e outros serviços que acontecem todos os dias.",
  },
  {
    number: "02",
    title: "Por que o interior ainda é uma oportunidade",
    text:
      "Você vai entender por que muitas cidades continuam mal atendidas por grandes plataformas e como o BoraZé foi construído para atuar nesse espaço.",
  },
  {
    number: "03",
    title: "Por dentro do modelo BoraZé",
    text:
      "Como o Super App conecta consumidores, comerciantes, mototaxistas e entregadores e transforma essas transações em uma operação digital local.",
  },
  {
    number: "04",
    title: "Como funciona o Embaixador",
    text:
      "O papel de quem representa e desenvolve uma cidade, estrutura a operação local e acompanha o crescimento daquele território.",
  },
  {
    number: "05",
    title: "Como funciona o Executivo",
    text:
      "Como uma pessoa pode atuar apresentando o BoraZé aos negócios, ajudando nas ativações e construindo uma carteira de estabelecimentos.",
  },
  {
    number: "06",
    title: "Abertura oficial das oportunidades",
    text:
      "No encontro final, apresentaremos as condições vigentes, critérios, responsabilidades e próximos passos para quem decidir participar.",
  },
];

const paths = [
  {
    title: "Embaixador BoraZé!",
    eyebrow: "DESENVOLVA UMA CIDADE",
    description:
      "Para o perfil empreendedor que quer liderar a implantação e o crescimento da operação BoraZé em um município.",
    bullets: [
      "Atuação territorial",
      "Desenvolvimento da operação local",
      "Relacionamento com comércio e mobilidade",
      "Participação nos resultados conforme as regras do programa",
    ],
  },
  {
    title: "Executivo BoraZé!",
    eyebrow: "CONECTE NEGÓCIOS",
    description:
      "Para quem quer atuar comercialmente conectando estabelecimentos ao Super App, presencialmente ou pela internet.",
    bullets: [
      "Prospecção de estabelecimentos",
      "Atuação online ou presencial",
      "Apoio à ativação dos parceiros",
      "Remuneração e recorrência conforme as regras do programa",
    ],
  },
];

const faq = [
  {
    q: "O ingresso já me torna Embaixador ou Executivo BoraZé?",
    a:
      "Não. O ingresso dá acesso ao evento online. As oportunidades e condições de participação serão apresentadas durante o lançamento, e cada pessoa decide depois se deseja avançar.",
  },
  {
    q: "Preciso ter experiência com aplicativos ou tecnologia?",
    a:
      "Não. O evento explica o modelo desde o início. O mais importante é ter interesse em negócios, comércio local e desenvolvimento de oportunidades.",
  },
  {
    q: "Preciso já ter empresa aberta?",
    a:
      "Não para participar do evento. Eventuais requisitos para cada programa serão explicados quando as condições de entrada forem apresentadas.",
  },
  {
    q: "O evento é somente para quem quer ser Embaixador?",
    a:
      "Não. Durante o evento apresentaremos duas possibilidades de participação: Embaixador BoraZé e Executivo BoraZé. Os perfis e responsabilidades são diferentes.",
  },
  {
    q: "Quanto custa participar do evento?",
    a: "O ingresso desta edição custa R$ 47,00 por participante.",
  },
  {
    q: "O evento garante algum valor de faturamento?",
    a:
      "Não. O evento apresenta o modelo, cenários, fontes de receita e funcionamento dos programas. Resultados dependem de mercado, execução, adesão e das regras vigentes.",
  },
  {
    q: "Como faço para garantir o ingresso?",
    a:
      "Clique em qualquer botão de ingresso desta página. Você será direcionado ao atendimento oficial BoraZé para concluir sua inscrição.",
  },
];

function TicketButton({ className = "" }: { className?: string }) {
  return (
    <Button asChild size="lg" className={"h-14 rounded-xl px-7 font-bold " + className}>
      <a href={ticketUrl} target="_blank" rel="noreferrer">
        GARANTIR MEU INGRESSO — R$ 47
        <ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}

export function EventPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav hideCta />

      <main>
        <section className="relative isolate overflow-hidden bg-brand-black pb-20 pt-32 text-brand-white md:pb-28 md:pt-40">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary md:text-sm">
              EVENTO ONLINE • LANÇAMENTO BORA ZÉ!
            </p>
            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Descubra como transformar o crescimento da sua cidade em uma{" "}
              <span className="text-primary">oportunidade de negócio.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-brand-white/70 md:text-xl md:leading-8">
              Participe do evento em que vamos abrir os bastidores do BoraZé!, mostrar como funciona
              a expansão do Super App e apresentar as oportunidades de Embaixador e Executivo.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <TicketButton className="w-full sm:w-auto" />
              <p className="text-xs text-brand-white/45">
                Evento online • Ingresso individual • R$ 47,00
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="O que você vai descobrir"
              title="Você não precisa abrir um restaurante, comprar motos ou criar um aplicativo para participar da economia da sua cidade."
              description="O BoraZé conecta negócios, serviços, mobilidade e consumidores. No evento, você vai entender onde está a oportunidade para quem ajuda essa operação a crescer."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {learnItems.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="text-primary">{item.icon}</div>
                  <h3 className="mt-7 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              light
              eyebrow="Conteúdo do evento"
              title="Do movimento da cidade até a abertura oficial das oportunidades."
              description="Uma sequência de encontros para você entender o mercado, o modelo BoraZé e as duas formas de participar da expansão."
            />
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-brand-white/10 md:grid-cols-2">
              {program.map((item) => (
                <article key={item.number} className="bg-brand-black p-7 md:p-9">
                  <span className="text-xs font-bold text-primary">{item.number}</span>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-white/60">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Duas formas de participar"
              title="Você poderá descobrir qual caminho combina mais com o seu perfil."
              description="No evento, vamos explicar responsabilidades, critérios e funcionamento de cada programa antes de abrir as condições para quem quiser avançar."
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {paths.map((path) => (
                <article key={path.title} className="rounded-2xl border border-border bg-card p-7 md:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    {path.eyebrow}
                  </p>
                  <h3 className="mt-4 text-3xl font-bold">{path.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{path.description}</p>
                  <div className="mt-7 grid gap-3">
                    {path.bullets.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                          <Check className="size-3.5" />
                        </span>
                        <span className="text-sm leading-6">{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Para quem é"
              title="Para quem olha para a própria cidade e enxerga oportunidade."
              description="O evento foi pensado para pessoas que querem conhecer um modelo de negócio ligado à expansão do comércio, serviços e mobilidade local."
            />
            <div className="grid gap-3">
              {[
                "Empreendedores interessados em desenvolver uma operação local.",
                "Vendedores, representantes e profissionais comerciais.",
                "Donos de agência, profissionais de marketing e consultores.",
                "Pessoas bem relacionadas com o comércio da própria cidade.",
                "Quem busca uma nova atividade que possa ser operada com apoio de tecnologia.",
                "Quem quer entender primeiro a oportunidade antes de tomar qualquer decisão.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-border bg-background p-4">
                  <Users className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Os dois caminhos"
              title="Negócio tradicional ou participação em uma plataforma local?"
              description="O evento vai mostrar por que operar ou desenvolver uma plataforma pode ter uma lógica diferente de abrir mais um estabelecimento físico."
            />
            <div className="mt-12 overflow-hidden rounded-2xl border border-border">
              <div className="grid bg-brand-black text-brand-white md:grid-cols-2">
                <div className="border-b border-brand-white/10 p-7 md:border-b-0 md:border-r md:p-9">
                  <p className="text-xs font-bold uppercase text-brand-white/45">NEGÓCIO TRADICIONAL</p>
                  <h3 className="mt-3 text-2xl font-bold">Você vende o que é seu.</h3>
                  <div className="mt-6 grid gap-3 text-sm text-brand-white/65">
                    <p>Estoque, estrutura ou operação própria.</p>
                    <p>Receita concentrada no seu produto ou serviço.</p>
                    <p>Crescimento ligado à capacidade do próprio negócio.</p>
                  </div>
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-xs font-bold uppercase text-primary">ECOSSISTEMA BORA ZÉ!</p>
                  <h3 className="mt-3 text-2xl font-bold">Você ajuda uma rede inteira a crescer.</h3>
                  <div className="mt-6 grid gap-3 text-sm text-brand-white/65">
                    <p>Comércio, serviços e mobilidade conectados.</p>
                    <p>Participação ligada à movimentação gerada dentro da plataforma.</p>
                    <p>Modelo digital construído para expansão territorial.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ingresso" className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-2xl shadow-brand-black/5">
              <div className="bg-brand-black px-6 py-10 text-center text-brand-white md:px-12 md:py-14">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  ACESSO AO EVENTO DE LANÇAMENTO
                </p>
                <h2 className="mt-4 text-4xl font-bold md:text-6xl">
                  Garanta sua participação
                </h2>
                <div className="mt-7 flex items-end justify-center gap-2">
                  <span className="pb-2 text-lg text-brand-white/60">R$</span>
                  <span className="text-7xl font-bold text-primary md:text-8xl">47</span>
                  <span className="pb-3 text-xl text-brand-white/60">,00</span>
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "Acesso aos encontros online do evento",
                    "Apresentação completa do modelo BoraZé",
                    "Visão sobre mercado e oportunidade local",
                    "Explicação do programa Embaixador",
                    "Explicação do programa Executivo",
                    "Acesso à abertura oficial das oportunidades",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <TrendingUp className="size-4 shrink-0 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
                <TicketButton className="mt-9 w-full" />
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  O ingresso dá acesso ao evento. A participação nos programas BoraZé é opcional e
                  possui condições próprias, apresentadas durante o lançamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-7 md:p-10">
              <div className="flex items-start gap-4">
                <ShieldCheck className="size-9 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-bold uppercase text-primary">DECISÃO CONSCIENTE</p>
                  <h2 className="mt-2 text-3xl font-bold">Primeiro você entende. Depois decide.</h2>
                  <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
                    Durante o evento, você conhecerá o funcionamento do BoraZé, as responsabilidades,
                    os critérios e as condições dos programas. Comprar o ingresso não obriga você a
                    contratar nenhuma oportunidade apresentada depois.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title="Antes de garantir seu ingresso."
            />
            <div className="mt-10">
              <SimpleFaq items={faq} />
            </div>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              O BORA ZÉ ESTÁ EM EXPANSÃO
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              A próxima oportunidade pode estar na sua cidade.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-white/65">
              Entre no evento, conheça o modelo por dentro e descubra se existe um caminho para você
              participar dessa expansão.
            </p>
            <div className="mt-9">
              <TicketButton className="w-full sm:w-auto" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
