import {
  ArrowRight,
  Check,
  Headphones,
  MessageCircle,
  PackageCheck,
  PauseCircle,
  ReceiptText,
  ShoppingBag,
  Smartphone,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import {
  CheckList,
  FeatureGrid,
  ProcessSteps,
  SectionHeading,
  SimpleFaq,
  openLeadDialog,
} from "@/components/landing-system";
import { ZayaLeadDialog } from "@/components/zaya-lead-dialog";

const segments = [
  "Restaurantes",
  "Pizzarias",
  "Hamburguerias",
  "Açaí",
  "Mercados",
  "Farmácias",
  "Bebidas",
  "Conveniências",
  "Outros negócios locais",
];

const faq = [
  {
    q: "O que é a Zaya?",
    a: "A Zaya funciona como uma atendente do seu negócio dentro do WhatsApp. Ela conversa com clientes, entende pedidos e ajuda a organizar o atendimento até o fechamento.",
  },
  {
    q: "A Zaya substitui meu WhatsApp?",
    a: "Não. Ela funciona no WhatsApp do seu estabelecimento e o cliente continua usando o aplicativo que já conhece.",
  },
  {
    q: "Ela entende áudio?",
    a: "Sim. O cliente pode mandar áudio durante o atendimento e a Zaya entende o que foi pedido.",
  },
  {
    q: "Ela responde em áudio?",
    a: "Sim. A experiência pode continuar por áudio quando esse for o formato de conversa do cliente.",
  },
  {
    q: "Ela pode inventar produtos ou preços?",
    a: "Não. A Zaya trabalha com produtos, preços, adicionais, variações e disponibilidade cadastrados pelo estabelecimento.",
  },
  {
    q: "Posso assumir uma conversa?",
    a: "Sim. Você ou sua equipe podem entrar no atendimento a qualquer momento. A Zaya pausa e pode continuar depois.",
  },
  {
    q: "Funciona para quais tipos de negócio?",
    a: "Para negócios que recebem atendimentos e pedidos pelo WhatsApp, como restaurantes, pizzarias, hamburguerias, açaí, mercados, farmácias, bebidas, conveniências e outros negócios locais.",
  },
  {
    q: "Como os pedidos chegam para minha empresa?",
    a: "Depois da confirmação do cliente, o pedido chega organizado no painel da Zaya para o estabelecimento aceitar ou recusar.",
  },
  {
    q: "Posso usar meu próprio WhatsApp?",
    a: "Sim. A proposta é funcionar no WhatsApp do próprio estabelecimento.",
  },
  {
    q: "Como funciona a cobrança?",
    a: "Existem planos mensais por volume de pedidos e uma opção anual. Os valores e limites estão descritos nesta página.",
  },
];

function CtaButton({ label = "QUERO A ZAYA NO MEU NEGÓCIO", className = "" }: { label?: string; className?: string }) {
  return (
    <Button
      onClick={openLeadDialog}
      size="lg"
      className={"h-14 rounded-xl px-7 font-bold " + className}
    >
      {label}
      <ArrowRight />
    </Button>
  );
}

export function ZayaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav ctaLabel="QUERO A ZAYA" />

      <main>
        <section className="relative isolate overflow-hidden bg-brand-black pb-20 pt-32 text-brand-white md:pb-28 md:pt-40">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">ZAYA</p>
            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              SEU WHATSAPP AGORA TEM UMA ATENDENTE.
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-brand-white/70 md:text-xl md:leading-8">
              Conheça a Zaya, a inteligência que conversa com seus clientes por texto ou áudio, monta pedidos e ajuda seu negócio a vender pelo WhatsApp.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <CtaButton className="w-full sm:w-auto" />
              <p className="text-xs text-brand-white/45">Funciona no WhatsApp do seu estabelecimento.</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="O problema"
              title="QUANTOS CLIENTES ESTÃO ESPERANDO UMA RESPOSTA NO SEU WHATSAPP AGORA?"
              description="Enquanto você e sua equipe estão atendendo clientes, preparando pedidos, organizando estoque ou cuidando do negócio, novas mensagens continuam chegando."
            />
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {["Áudios.", "Perguntas.", "Pedidos.", "Preço.", "Taxa de entrega.", "Forma de pagamento."].map((item) => (
                <div key={item} className="rounded-xl border border-border bg-card p-5 text-lg font-bold">{item}</div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-8">
              E cada cliente esperando uma resposta pode representar uma venda que ainda não aconteceu.
            </p>
            <p className="mt-4 text-3xl font-bold text-primary">É aí que entra a Zaya.</p>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              light
              eyebrow="Atendimento e vendas"
              title="ELA ATENDE. ELA CONVERSA. ELA VENDE."
              description="A Zaya funciona como uma atendente do seu negócio dentro do WhatsApp."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <article className="rounded-xl border border-brand-white/10 bg-brand-white/5 p-6">
                <MessageCircle className="text-primary" />
                <h3 className="mt-7 text-xl font-bold">O cliente chama</h3>
                <p className="mt-3 text-sm leading-6 text-brand-white/60">Seu cliente manda uma mensagem ou um áudio.</p>
              </article>
              <article className="rounded-xl border border-brand-white/10 bg-brand-white/5 p-6">
                <Smartphone className="text-primary" />
                <h3 className="mt-7 text-xl font-bold">A Zaya entende</h3>
                <p className="mt-3 text-sm leading-6 text-brand-white/60">Ela entende o que ele precisa e consulta os produtos reais do estabelecimento.</p>
              </article>
              <article className="rounded-xl border border-brand-white/10 bg-brand-white/5 p-6">
                <PackageCheck className="text-primary" />
                <h3 className="mt-7 text-xl font-bold">O pedido é conduzido</h3>
                <p className="mt-3 text-sm leading-6 text-brand-white/60">A conversa avança até o pedido ficar organizado e pronto para confirmação.</p>
              </article>
            </div>
            <p className="mt-10 max-w-3xl text-lg leading-8 text-brand-white/70">
              Sem obrigar o cliente a baixar outro aplicativo. Sem obrigar o cliente a aprender uma nova maneira de comprar. Ele continua usando o WhatsApp que já conhece.
            </p>
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Áudio de verdade"
                title="SE O CLIENTE MANDA ÁUDIO, A ZAYA RESPONDE EM ÁUDIO."
                description="Nem todo cliente gosta de digitar. E muita gente já compra pelo WhatsApp simplesmente falando o que quer."
              />
              <p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">
                Com a Zaya, isso não é problema. O cliente pode conversar por áudio durante o atendimento e realizar o pedido conversando.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-xl shadow-brand-black/5">
              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs font-bold uppercase text-muted-foreground">CLIENTE</p>
                <p className="mt-2 text-sm leading-6">“Quero dois X-Tudo, uma Coca de 2 litros e entrega aqui em casa.”</p>
              </div>
              <div className="mt-4 rounded-xl bg-primary p-4 text-primary-foreground">
                <p className="text-xs font-bold uppercase">ZAYA</p>
                <p className="mt-2 text-sm leading-6">“Perfeito. Encontrei o X-Tudo do cardápio. Vou colocar dois. Quer aproveitar e acrescentar uma porção de batata?”</p>
              </div>
              <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                <Volume2 className="size-5 text-primary" />
                A conversa deve parecer natural.
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Como funciona"
              title="DO “OI” AO PEDIDO FECHADO."
              description="Uma sequência simples para transformar conversa em pedido organizado."
            />
            <div className="mt-12">
              <ProcessSteps
                steps={[
                  { title: "Cliente chama", description: "O cliente inicia a conversa pelo WhatsApp." },
                  { title: "Texto ou áudio", description: "Ele escolhe como quer conversar." },
                  { title: "Zaya entende", description: "A Zaya interpreta o que o cliente precisa." },
                  { title: "Consulta o catálogo", description: "Busca produtos reais do estabelecimento." },
                  { title: "Monta o pedido", description: "Organiza itens, adicionais e quantidades." },
                  { title: "Pode sugerir complementos", description: "Oferece produtos configurados pela loja." },
                ]}
              />
            </div>
            <div className="mt-3">
              <ProcessSteps
                steps={[
                  { title: "Entrega ou retirada", description: "Confirma como o cliente quer receber." },
                  { title: "Endereço e taxa", description: "Confirma endereço, referência e taxa quando necessário." },
                  { title: "Pagamento", description: "Confirma a forma de pagamento." },
                  { title: "Resumo", description: "Apresenta tudo antes da confirmação." },
                  { title: "Cliente confirma", description: "O cliente aprova o pedido." },
                  { title: "Pedido chega ao negócio", description: "O estabelecimento recebe para aceitar ou recusar." },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              light
              eyebrow="Catálogo real"
              title="A ZAYA NÃO INVENTA O QUE SUA LOJA NÃO VENDE."
              description="A Zaya trabalha com os produtos, preços, adicionais, variações e disponibilidade cadastrados pelo seu estabelecimento."
            />
            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {["PRODUTO REAL.", "PREÇO REAL.", "PEDIDO ESTRUTURADO."].map((item) => (
                <div key={item} className="rounded-xl border border-brand-white/10 bg-brand-white/5 p-6 text-2xl font-bold text-primary">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-4xl text-sm leading-6 text-brand-white/60">
              Se o cliente pedir algo parecido com um produto existente, ela pode confirmar qual produto ele quis dizer. Se o produto não existir, pode apresentar alternativas reais. O objetivo é transformar uma conversa natural em um pedido organizado.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Venda adicional"
              title="ELA NÃO PRECISA APENAS ANOTAR PEDIDOS. ELA TAMBÉM PODE AJUDAR A VENDER MAIS."
              description="O estabelecimento pode configurar produtos para a Zaya oferecer durante o atendimento."
            />
            <div className="mt-12">
              <FeatureGrid
                items={[
                  { title: "Hambúrguer", description: "A Zaya pode oferecer bebida.", icon: <ShoppingBag /> },
                  { title: "Pizza", description: "Pode oferecer refrigerante ou acompanhamento.", icon: <ShoppingBag /> },
                  { title: "Outro produto", description: "Pode apresentar um complemento configurado pela loja.", icon: <ShoppingBag /> },
                ]}
              />
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-6 text-muted-foreground">
              A Zaya poderá realizar até duas ofertas complementares durante o pedido, sempre utilizando produtos reais e disponíveis.
            </p>
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="Você continua no controle"
              title="QUER ASSUMIR A CONVERSA? É SÓ ENTRAR."
              description="A Zaya não tira o controle do seu negócio. Sempre que você ou sua equipe quiserem conversar diretamente com o cliente, poderão assumir o atendimento."
            />
            <div className="rounded-2xl border border-border bg-background p-7">
              <PauseCircle className="size-10 text-primary" />
              <div className="mt-7 space-y-4 text-sm leading-6">
                <p><strong>1.</strong> A Zaya pausa.</p>
                <p><strong>2.</strong> Você conversa com o cliente.</p>
                <p><strong>3.</strong> Quando terminar, pode devolver o atendimento para a Zaya continuar.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Pedido organizado"
                title="DO WHATSAPP DIRETO PARA O SEU PAINEL."
                description="Depois que o cliente confirma, o pedido chega organizado no painel da Zaya. O estabelecimento consegue visualizar as informações e decidir aceitar ou recusar."
              />
              <p className="mt-6 text-sm leading-6 text-muted-foreground">
                Depois do aceite, o pedido segue para preparação. Impressão térmica disponível para operação do estabelecimento.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-brand-black/5">
              <p className="text-xs font-bold uppercase text-primary">NOVO PEDIDO</p>
              <h3 className="mt-2 text-2xl font-bold">Aguardando aceite</h3>
              <div className="mt-6 grid gap-3 text-sm">
                {["Itens", "Adicionais", "Entrega ou retirada", "Endereço", "Referência", "Pagamento", "Total"].map((item) => (
                  <div key={item} className="flex items-center justify-between border-b border-border pb-3">
                    <span>{item}</span>
                    <ReceiptText className="size-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button className="font-bold">ACEITAR PEDIDO</Button>
                <Button variant="outline" className="font-bold">RECUSAR</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              light
              eyebrow="Depois do pedido"
              title="E A ZAYA CONTINUA A CONVERSA."
              description="Depois do pedido, a Zaya pode continuar atualizando o cliente conforme o andamento informado pelo estabelecimento."
            />
            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {["“Seu pedido foi aceito.”", "“Seu pedido está em preparação.”", "“Seu pedido saiu para entrega.”"].map((item) => (
                <div key={item} className="rounded-xl border border-brand-white/10 bg-brand-white/5 p-6 text-lg font-semibold">{item}</div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-6 text-brand-white/60">
              Isso reduz perguntas repetitivas no WhatsApp e mantém o cliente informado.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Para quem é"
              title="SE SEUS CLIENTES CHAMAM NO WHATSAPP, A ZAYA PODE TRABALHAR COM VOCÊ."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {segments.map((segment) => (
                <span key={segment} className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold">
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading eyebrow="Comparação de rotina" title="SEM ZAYA × COM ZAYA" />
            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-border bg-background p-7">
                <p className="text-xs font-bold uppercase text-muted-foreground">SEM ZAYA</p>
                <div className="mt-6">
                  <CheckList
                    items={[
                      "Cliente manda mensagem",
                      "Funcionário precisa parar o que está fazendo",
                      "Escuta áudio",
                      "Consulta produto",
                      "Consulta preço",
                      "Responde",
                      "Pergunta endereço",
                      "Calcula taxa",
                      "Pergunta pagamento",
                      "Confirma pedido",
                      "Anota ou repassa para produção",
                    ]}
                  />
                </div>
              </article>

              <article className="rounded-2xl border border-primary/30 bg-primary/5 p-7">
                <p className="text-xs font-bold uppercase text-primary">COM ZAYA</p>
                <div className="mt-6">
                  <CheckList
                    items={[
                      "Cliente chama",
                      "Zaya atende",
                      "Zaya conversa",
                      "Zaya monta o pedido",
                      "Zaya confirma",
                      "Pedido chega organizado para o estabelecimento",
                    ]}
                  />
                </div>
              </article>
            </div>
            <p className="mt-10 text-3xl font-bold leading-tight md:text-5xl">
              SUA EQUIPE CUIDA DA OPERAÇÃO. <span className="text-primary">A ZAYA CUIDA DA CONVERSA.</span>
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Planos"
              title="ESCOLHA O PLANO PARA O SEU NEGÓCIO"
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-4">
              {[
                ["Até 200 pedidos/mês", "R$ 96/mês", "Mensal"],
                ["201 a 500 pedidos/mês", "R$ 187/mês", "Mensal"],
                ["A partir de 501 pedidos/mês", "R$ 297/mês", "Mensal"],
                ["Até 3.000 pedidos/mês", "R$ 97/mês", "Plano anual"],
              ].map(([limit, price, type], index) => (
                <article key={price + limit} className={"rounded-2xl border p-6 " + (index === 3 ? "border-primary bg-primary/5" : "border-border bg-card")}>
                  <p className="text-xs font-bold uppercase text-primary">{type}</p>
                  <h3 className="mt-5 text-3xl font-bold">{price}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{limit}</p>
                  {index === 3 && (
                    <p className="mt-4 text-xs leading-5 text-muted-foreground">
                      Contrato de 12 meses. Cobrança mensal recorrente no cartão.
                    </p>
                  )}
                </article>
              ))}
            </div>
            <div className="mt-9">
              <CtaButton />
            </div>
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <SectionHeading eyebrow="Perguntas frequentes" title="O que você precisa saber sobre a Zaya." />
            <div className="mt-10">
              <SimpleFaq items={faq} />
            </div>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">ZAYA</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              SEUS CLIENTES JÁ ESTÃO NO WHATSAPP. AGORA COLOQUE A ZAYA PARA ATENDÊ-LOS.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-white/65">
              Tenha uma atendente inteligente conversando com seus clientes, organizando pedidos e ajudando seu negócio a vender.
            </p>
            <div className="mt-9">
              <CtaButton className="w-full sm:w-auto" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ZayaLeadDialog />
    </div>
  );
}
