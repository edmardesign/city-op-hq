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
  "Olá! Quero participar do Evento Online BoraZé! nos dias 27 e 28 de outubro e garantir meu ingresso de R$ 47,00.",
);
const ambassadorUrl = getWhatsAppUrl(
  "Olá! Quero conhecer o modelo Embaixador BoraZé! no evento online de 27 e 28 de outubro.",
);
const executiveUrl = getWhatsAppUrl(
  "Olá! Quero conhecer o modelo Executivo BoraZé! no evento online de 27 e 28 de outubro.",
);

const learnItems = [
  {
    icon: <Smartphone />,
    title: "NÃO É APENAS MAIS UM APP DE DELIVERY.",
    description:
      "É UM SUPER APP PARA O INTERIOR. O BoraZé! reúne comida, mercado, farmácia, bebidas, gás e água, mototáxi, comércio local e serviços dentro de uma única plataforma.",
  },
  {
    icon: <MapPinned />,
    title: "O INTERIOR ESTÁ MUDANDO.",
    description:
      "Durante anos, grande parte da inovação digital ficou concentrada nas grandes cidades. Enquanto isso, milhares de cidades do interior continuaram movimentando dinheiro todos os dias.",
  },
  {
    icon: <Building2 />,
    title: "EMBAIXADOR BORA ZÉ!",
    description:
      "Sua cidade pode se transformar em um ativo de recorrência. O Embaixador desenvolve a operação local, conecta estabelecimentos, fortalece a rede de mobilidade e participa economicamente dos resultados conforme as regras do programa.",
  },
  {
    icon: <Store />,
    title: "EXECUTIVO BORA ZÉ!",
    description:
      "Transforme os negócios que você conhece em uma carteira que pode gerar recorrência. O Executivo atua conectando estabelecimentos ao Super App e participa da expansão conforme as regras vigentes.",
  },
  {
    icon: <WalletCards />,
    title: "DE ONDE VEM O DINHEIRO",
    description:
      "No evento vamos abrir a lógica econômica do BoraZé! e mostrar como estabelecimentos ativos, volume de vendas, corridas e utilização da plataforma podem impactar a operação.",
  },
  {
    icon: <Network />,
    title: "A ABERTURA DAS OPORTUNIDADES",
    description:
      "Você conhecerá as condições, critérios e próximos passos para quem decidir avançar como Embaixador ou Executivo BoraZé!.",
  },
];

const program = [
  {
    number: "01",
    title: "A oportunidade que existe no interior",
    text:
      "Por que milhares de cidades ainda possuem espaço para uma plataforma local de comércio, serviços e mobilidade.",
  },
  {
    number: "02",
    title: "Por dentro do Super App BoraZé!",
    text:
      "Como consumidores, estabelecimentos, entregadores e mototaxistas fazem parte do mesmo ecossistema.",
  },
  {
    number: "03",
    title: "De onde vem o dinheiro",
    text:
      "Vamos mostrar a lógica de monetização da plataforma e as fontes de receita da operação.",
  },
  {
    number: "04",
    title: "Como funciona o Embaixador",
    text:
      "O papel, as responsabilidades, a participação na operação e a lógica de recorrência.",
  },
  {
    number: "05",
    title: "Como funciona o Executivo",
    text:
      "Como prospectar negócios, construir uma carteira e participar economicamente da expansão.",
  },
  {
    number: "06",
    title: "Simulações de ganhos",
    text:
      "Cenários para visualizar como estabelecimentos, movimentação e recorrência podem se transformar em receita.",
  },
  {
    number: "07",
    title: "A abertura das oportunidades",
    text:
      "Condições, critérios e próximos passos para quem decidir avançar.",
  },
];

const faq = [
  {
    q: "Quanto é possível ganhar?",
    a:
      "Essa é uma das perguntas que vamos responder no evento. Vamos abrir a lógica econômica do BoraZé! e mostrar, com exemplos, como a movimentação pode se transformar em receita.",
  },
  {
    q: "O evento promete dinheiro fácil?",
    a:
      "Não. Resultado depende da implantação, adesão dos estabelecimentos, utilização pelos consumidores, volume transacionado e execução de cada participante.",
  },
  {
    q: "O ingresso já me torna Embaixador ou Executivo?",
    a:
      "Não. O ingresso dá acesso ao evento. A entrada nos programas Embaixador ou Executivo é opcional e possui condições próprias.",
  },
  {
    q: "Quando acontece o evento?",
    a: "O evento será online, nos dias 27 e 28 de outubro, às 20h.",
  },
  {
    q: "Quanto custa o ingresso?",
    a: "O ingresso individual custa R$ 47,00.",
  },
];

function TicketButton({
  className = "",
  href = ticketUrl,
  label = "GARANTIR MEU INGRESSO — R$ 47",
}: {
  className?: string;
  href?: string;
  label?: string;
}) {
  return (
    <Button asChild size="lg" className={"h-14 rounded-xl px-7 font-bold " + className}>
      <a href={href} target="_blank" rel="noreferrer">
        {label}
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
              EVENTO ONLINE DE LANÇAMENTO • 27 E 28 DE OUTUBRO • 20H
            </p>
            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              EXISTE DINHEIRO CIRCULANDO TODOS OS DIAS NA SUA CIDADE.
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-brand-white/70 md:text-xl md:leading-8">
              E agora existe uma oportunidade de participar desse movimento.
            </p>
            <div className="mx-auto mt-8 max-w-3xl space-y-2 text-base leading-7 text-brand-white/70 md:text-lg">
              <p>Imagine ganhar quando alguém pede comida.</p>
              <p>Quando uma família compra no mercado.</p>
              <p>Quando alguém pede um medicamento na farmácia.</p>
              <p>Quando solicita gás ou água.</p>
              <p>Quando chama um mototáxi.</p>
              <p className="pt-2 font-semibold text-brand-white">
                Agora imagine tudo isso acontecendo dentro de uma única plataforma.
              </p>
            </div>
            <p className="mt-7 text-3xl font-bold text-primary md:text-5xl">Esse é o BoraZé!</p>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-brand-white/70 md:text-lg">
              Um Super App criado para conectar o interior do Brasil, reunindo comércio, delivery,
              serviços e mobilidade em um único ecossistema.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-brand-white/70 md:text-lg">
              E estamos procurando pessoas para crescer junto com essa operação.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-xl font-bold md:text-2xl">
              Conheça as oportunidades de Embaixador e Executivo BoraZé!
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <TicketButton className="w-full sm:w-auto" label="QUERO CONHECER ESSA OPORTUNIDADE" />
              <p className="text-sm font-bold text-primary">INGRESSO: R$ 47</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="O INTERIOR ESTÁ MUDANDO."
              title="O dinheiro já circula. O que ainda falta em muitas cidades é uma plataforma capaz de conectar tudo isso."
              description="Durante anos, grande parte da inovação digital ficou concentrada nas grandes cidades. Enquanto isso, milhares de cidades do interior continuaram movimentando dinheiro todos os dias."
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
            <div className="mt-10 grid gap-2 text-sm text-muted-foreground md:grid-cols-2 lg:grid-cols-4">
              {[
                "Restaurantes vendem.",
                "Mercados vendem.",
                "Farmácias vendem.",
                "Lojas vendem.",
                "Gás e água são entregues.",
                "Mototaxistas fazem corridas.",
                "Prestadores realizam serviços.",
                "O dinheiro já circula.",
              ].map((item) => <p key={item}>{item}</p>)}
            </div>
            <p className="mt-8 text-2xl font-bold">
              É exatamente nesse espaço que nasce o BoraZé!
            </p>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              light
              eyebrow="NÃO É APENAS MAIS UM APP DE DELIVERY."
              title="É UM SUPER APP PARA O INTERIOR."
              description="O BoraZé! foi pensado para reunir diferentes necessidades do dia a dia da cidade dentro de uma única plataforma."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["Comida.", "Mercado.", "Farmácia.", "Bebidas.", "Gás e água.", "Mototáxi.", "Comércio local.", "Serviços."].map((item) => (
                <div key={item} className="rounded-xl border border-brand-white/10 bg-brand-white/5 p-4 font-semibold">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm font-bold uppercase text-primary">Um único ecossistema conectando:</p>
            <p className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
              CONSUMIDORES + COMERCIANTES + MOTOTAXISTAS + ENTREGADORES + SERVIÇOS
            </p>
            <p className="mt-6 max-w-4xl text-base leading-7 text-brand-white/65">
              E quanto maior a utilização da plataforma, maior pode se tornar a movimentação dentro desse ecossistema.
            </p>
            <p className="mt-5 text-2xl font-bold">É aqui que começa a oportunidade.</p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="E SE, EM VEZ DE APENAS CONSUMIR, VOCÊ PUDESSE PARTICIPAR DESSE CRESCIMENTO?"
              title="Pense por alguns segundos na sua própria cidade."
              description="Esse movimento já existe. O BoraZé! quer digitalizá-lo. E criamos modelos para que pessoas possam participar da expansão dessa operação."
            />
            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {[
                "Quantos pedidos de comida acontecem por dia?",
                "Quantas compras são feitas em mercados?",
                "Quantas pessoas compram medicamentos?",
                "Quantos botijões de gás são entregues?",
                "Quantas corridas de mototáxi acontecem?",
                "Quantos negócios locais precisam de novos clientes?",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-border bg-card p-5 font-semibold">{item}</div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-3xl font-bold md:text-5xl">
              <span>30 dias.</span>
              <span className="text-primary">×</span>
              <span>12 meses.</span>
            </div>
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="DUAS OPORTUNIDADES. DUAS FORMAS DE GANHAR COM A EXPANSÃO."
              title="Escolha o caminho que combina com a forma como você quer participar."
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-border bg-background p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">EMBAIXADOR BORA ZÉ!</p>
                <h3 className="mt-4 text-3xl font-bold">Sua cidade pode se transformar em um ativo de recorrência.</h3>
                <div className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  <p>O Embaixador é a pessoa responsável por desenvolver a operação BoraZé! em seu município.</p>
                  <p>Ele ajuda a plataforma a crescer.</p>
                  <p>Ajuda a conectar estabelecimentos.</p>
                  <p>Desenvolve a operação local.</p>
                  <p>Fortalece a rede de mobilidade.</p>
                  <p>E participa economicamente dos resultados gerados pela operação da sua cidade, conforme as regras do programa.</p>
                  <p>Ou seja: quanto mais o ecossistema local se desenvolve, maior pode ser a base de movimentação sobre a qual existe participação.</p>
                  <p>Não é simplesmente vender uma vez.</p>
                  <p>É ajudar a construir uma operação que pode continuar movimentando transações todos os dias.</p>
                  <p className="font-semibold text-foreground">Imagine participar da movimentação de um Super App inteiro dentro da sua cidade.</p>
                </div>
                <TicketButton href={ambassadorUrl} label="QUERO CONHECER O MODELO EMBAIXADOR" className="mt-8 w-full" />
              </article>

              <article className="rounded-2xl border border-border bg-background p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">EXECUTIVO BORA ZÉ!</p>
                <h3 className="mt-4 text-3xl font-bold">Transforme os negócios que você conhece em uma carteira que pode gerar recorrência.</h3>
                <div className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  <p>Existe restaurante na sua cidade? Existe mercado? Farmácia? Pizzaria? Hamburgueria? Açaí? Loja? Distribuidora?</p>
                  <p>Todos eles precisam de clientes.</p>
                  <p>O Executivo BoraZé! atua conectando esses estabelecimentos ao Super App.</p>
                  <p>E o modelo foi estruturado para que essa atividade possa gerar remuneração pela ativação e participação recorrente, de acordo com as regras vigentes do programa.</p>
                  <p>Você não precisa desenvolver aplicativo.</p>
                  <p>Não precisa montar uma equipe de tecnologia.</p>
                  <p>Não precisa abrir restaurante.</p>
                  <p>Não precisa ter estoque.</p>
                  <p>Você trabalha na expansão de uma plataforma que já está sendo construída.</p>
                  <p>E cada estabelecimento que entra pode passar a fazer parte da sua carteira.</p>
                  <p>É a diferença entre pensar somente: “Quanto eu ganho nessa venda?”</p>
                  <p className="font-semibold text-foreground">e começar a pensar: “Quanto essa carteira pode movimentar nos próximos meses?”</p>
                </div>
                <TicketButton href={executiveUrl} label="QUERO CONHECER O MODELO EXECUTIVO" className="mt-8 w-full" />
              </article>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="AGORA FAÇA UMA CONTA DIFERENTE."
              title="O verdadeiro potencial está na RECORRÊNCIA."
              description="Imagine construir uma carteira com 10 estabelecimentos. Depois 30. Depois 50. Agora imagine esses estabelecimentos recebendo pedidos todos os meses dentro do BoraZé!."
            />
            <div className="grid gap-3">
              {[
                "Um estabelecimento pode continuar vendendo.",
                "Uma cidade pode continuar fazendo pedidos.",
                "Mototáxis podem continuar recebendo chamadas.",
                "Consumidores podem continuar usando a plataforma.",
                "Dia após dia.",
                "Mês após mês.",
                "É isso que torna um ecossistema digital diferente de uma simples venda pontual.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-border bg-card p-4">
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
              eyebrow="QUANTO É POSSÍVEL GANHAR?"
              title="Essa é uma das perguntas que vamos responder no evento."
              description="Vamos abrir a lógica econômica do BoraZé! e mostrar, com exemplos, como a movimentação pode se transformar em receita."
            />
            <div className="mt-12 overflow-hidden rounded-2xl border border-border">
              <div className="grid bg-brand-black text-brand-white md:grid-cols-2">
                <div className="border-b border-brand-white/10 p-7 md:border-b-0 md:border-r md:p-9">
                  <p className="text-xs font-bold uppercase text-brand-white/45">VOCÊ VAI VER CENÁRIOS COM</p>
                  <div className="mt-6 grid gap-3 text-sm text-brand-white/65">
                    <p>Estabelecimentos ativos.</p>
                    <p>Volume de vendas.</p>
                    <p>Corridas.</p>
                    <p>Utilização da plataforma.</p>
                  </div>
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-xs font-bold uppercase text-primary">E COMO ISSO PODE IMPACTAR A OPERAÇÃO</p>
                  <div className="mt-6 grid gap-3 text-sm text-brand-white/65">
                    <p>Como Embaixadores participam dessa economia.</p>
                    <p>Como Executivos participam dessa economia.</p>
                    <p>Como a recorrência pode alterar a lógica de uma venda pontual.</p>
                    <p>Como avaliar os números por conta própria.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 font-semibold">Sem promessa de dinheiro fácil.</p>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-muted-foreground">
              Resultado depende da implantação, adesão dos estabelecimentos, utilização pelos consumidores, volume transacionado e execução de cada participante.
            </p>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              light
              eyebrow="O QUE ACONTECERIA SE O BORA ZÉ! SE TORNASSE PARTE DO DIA A DIA DA SUA CIDADE?"
              title="Essa é a pergunta mais importante deste evento."
              description="Não estamos falando apenas de vender comida pela internet. Estamos falando de construir uma infraestrutura digital local capaz de conectar diferentes partes da economia da cidade."
            />
            <p className="mt-8 max-w-4xl text-2xl font-bold leading-tight md:text-4xl">
              Existe uma diferença enorme entre descobrir uma oportunidade depois que todo mundo já conhece… e participar enquanto ela ainda está sendo construída.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="O BORA ZÉ! ESTÁ EM EXPANSÃO."
              title="E para crescer cidade por cidade, precisamos de pessoas."
              description="Pessoas que conheçam o comércio local. Que saibam conversar com empresários. Que conheçam a realidade do interior. Que tenham ambição de construir algo."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-bold uppercase text-primary">EMBAIXADOR</p>
                <p className="mt-3 text-xl font-bold">Desenvolva uma operação BoraZé! em uma cidade.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-bold uppercase text-primary">EXECUTIVO</p>
                <p className="mt-3 text-xl font-bold">Construa uma carteira de estabelecimentos parceiros.</p>
              </div>
              <p className="md:col-span-2 text-sm leading-6 text-muted-foreground">
                No evento, você conhecerá detalhadamente os dois modelos.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="O QUE VOCÊ VAI VER NO EVENTO"
              title="Do potencial do interior à abertura oficial das oportunidades."
              description="Nos dias 27 e 28 de outubro, às 20h, você verá o modelo BoraZé por dentro e os caminhos para participar."
            />
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2">
              {program.map((item) => (
                <article key={item.number} className="bg-background p-7 md:p-9">
                  <span className="text-xs font-bold text-primary">{item.number}</span>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="TALVEZ A SUA CIDADE SEJA PEQUENA."
              title="MAS A SOMA DE TUDO QUE ACONTECE NELA TODOS OS DIAS NÃO É."
              description="Milhares de transações acontecendo todos os meses. O BoraZé! quer conectar esse movimento. E você pode conhecer uma forma de participar dessa expansão."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {["Comida.", "Mercado.", "Farmácia.", "Gás.", "Água.", "Mobilidade.", "Serviços.", "Comércio."].map((item) => (
                <span key={item} className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold">
                  {item}
                </span>
              ))}
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
                  Conheça por dentro o Super App, os modelos de negócio e as oportunidades de Embaixador e Executivo.
                </h2>
                <p className="mt-7 text-sm font-bold uppercase text-brand-white/50">INGRESSO INDIVIDUAL</p>
                <div className="mt-3 flex items-end justify-center gap-2">
                  <span className="pb-2 text-lg text-brand-white/60">R$</span>
                  <span className="text-7xl font-bold text-primary md:text-8xl">47</span>
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "Evento online",
                    "Apresentação do Super App",
                    "Modelo Embaixador",
                    "Modelo Executivo",
                    "Fontes de receita",
                    "Recorrência",
                    "Simulações de cenários",
                    "Condições de participação",
                    "Abertura oficial das oportunidades",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <TrendingUp className="size-4 shrink-0 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
                <TicketButton className="mt-9 w-full" />
                <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
                  O ingresso dá acesso ao evento. A entrada nos programas Embaixador ou Executivo é opcional e possui condições próprias. Resultados financeiros não são garantidos e dependem, entre outros fatores, de execução, mercado, adesão e movimentação da plataforma.
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
                    Você poderá olhar os números e avaliar por conta própria o tamanho da oportunidade. O ingresso dá acesso ao evento e não obriga a entrada em nenhum dos programas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <SectionHeading eyebrow="Perguntas frequentes" title="Antes de garantir seu ingresso." />
            <div className="mt-10">
              <SimpleFaq items={faq} />
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
              O BoraZé! está construindo um Super App pensado para o interior. E estamos procurando as pessoas que poderão participar dessa expansão conosco.
            </p>
            <p className="mt-6 text-2xl font-bold">Talvez a próxima cidade seja a sua.</p>
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
