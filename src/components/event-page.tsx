import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const generalTicketUrl = getWhatsAppUrl(
  "Olá! Quero participar do Evento Online BoraZé! nos dias 27 e 28 de outubro e garantir meu ingresso de R$ 47,00.",
);

const ambassadorUrl = getWhatsAppUrl(
  "Olá! Quero conhecer o modelo Embaixador BoraZé! e participar do evento online de 27 e 28 de outubro.",
);

const executiveUrl = getWhatsAppUrl(
  "Olá! Quero conhecer o modelo Executivo BoraZé! e participar do evento online de 27 e 28 de outubro.",
);

function CTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button asChild size="lg" className={"h-14 rounded-xl px-7 font-bold " + className}>
      <a href={href} target="_blank" rel="noreferrer">
        {children}
        <ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}

function Divider() {
  return <div className="mx-auto h-px max-w-5xl bg-border" />;
}

export function EventPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav hideCta />

      <main>
        <section className="bg-brand-black pb-20 pt-32 text-brand-white md:pb-28 md:pt-40">
          <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              EVENTO ONLINE DE LANÇAMENTO • 27 E 28 DE OUTUBRO • 20H
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              EXISTE DINHEIRO CIRCULANDO TODOS OS DIAS NA SUA CIDADE.
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-xl font-semibold leading-8 text-brand-white/85 md:text-2xl">
              E agora existe uma oportunidade de participar desse movimento.
            </p>

            <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-8 text-brand-white/70 md:text-lg">
              <p>Imagine ganhar quando alguém pede comida.</p>
              <p>Quando uma família compra no mercado.</p>
              <p>Quando alguém pede um medicamento na farmácia.</p>
              <p>Quando solicita gás ou água.</p>
              <p>Quando chama um mototáxi.</p>
              <p>Agora imagine tudo isso acontecendo dentro de uma única plataforma.</p>
            </div>

            <p className="mt-10 text-3xl font-bold text-primary md:text-5xl">Esse é o BoraZé!</p>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-brand-white/70 md:text-lg">
              Um Super App criado para conectar o interior do Brasil, reunindo comércio, delivery,
              serviços e mobilidade em um único ecossistema.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-brand-white/70 md:text-lg">
              E estamos procurando pessoas para crescer junto com essa operação.
            </p>

            <p className="mx-auto mt-7 max-w-3xl text-2xl font-bold md:text-3xl">
              Conheça as oportunidades de Embaixador e Executivo BoraZé!
            </p>

            <div className="mt-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-white/55">
                EVENTO ONLINE DE LANÇAMENTO
              </p>
              <p className="mt-3 text-3xl font-bold text-primary">INGRESSO: R$ 47</p>
            </div>

            <div className="mt-8">
              <CTA href={generalTicketUrl} className="w-full sm:w-auto">
                QUERO CONHECER ESSA OPORTUNIDADE
              </CTA>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">O INTERIOR ESTÁ MUDANDO.</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
              <p>Durante anos, grande parte da inovação digital ficou concentrada nas grandes cidades.</p>
              <p>
                Enquanto isso, milhares de cidades do interior continuaram movimentando dinheiro
                todos os dias.
              </p>
              <p>Restaurantes vendem.</p>
              <p>Mercados vendem.</p>
              <p>Farmácias vendem.</p>
              <p>Lojas vendem.</p>
              <p>Gás e água são entregues.</p>
              <p>Mototaxistas fazem corridas.</p>
              <p>Prestadores realizam serviços.</p>
              <p className="font-semibold text-foreground">O dinheiro já circula.</p>
              <p>
                O que ainda falta em muitas cidades é uma plataforma capaz de conectar tudo isso.
              </p>
              <p className="text-2xl font-bold text-foreground">
                É exatamente nesse espaço que nasce o BoraZé!
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              NÃO É APENAS MAIS UM APP DE DELIVERY.
            </h2>
            <p className="mt-4 text-3xl font-bold text-primary md:text-5xl">
              É UM SUPER APP PARA O INTERIOR.
            </p>

            <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
              <p>
                O BoraZé! foi pensado para reunir diferentes necessidades do dia a dia da cidade
                dentro de uma única plataforma.
              </p>
              <p>Comida.</p>
              <p>Mercado.</p>
              <p>Farmácia.</p>
              <p>Bebidas.</p>
              <p>Gás e água.</p>
              <p>Mototáxi.</p>
              <p>Comércio local.</p>
              <p>Serviços.</p>
              <p className="font-semibold text-foreground">Um único ecossistema conectando:</p>
              <p className="text-xl font-bold text-primary md:text-2xl">
                CONSUMIDORES + COMERCIANTES + MOTOTAXISTAS + ENTREGADORES + SERVIÇOS
              </p>
              <p>
                E quanto maior a utilização da plataforma, maior pode se tornar a movimentação
                dentro desse ecossistema.
              </p>
              <p className="text-2xl font-bold text-foreground">É aqui que começa a oportunidade.</p>
            </div>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              E SE, EM VEZ DE APENAS CONSUMIR, VOCÊ PUDESSE PARTICIPAR DESSE CRESCIMENTO?
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-brand-white/70 md:text-lg">
              <p>Pense por alguns segundos na sua própria cidade.</p>
              <p>Quantos pedidos de comida acontecem por dia?</p>
              <p>Quantas compras são feitas em mercados?</p>
              <p>Quantas pessoas compram medicamentos?</p>
              <p>Quantos botijões de gás são entregues?</p>
              <p>Quantas corridas de mototáxi acontecem?</p>
              <p>Quantos negócios locais precisam de novos clientes?</p>
              <p>Agora multiplique isso por:</p>
              <p className="text-3xl font-bold text-primary">30 dias.</p>
              <p>Depois por:</p>
              <p className="text-3xl font-bold text-primary">12 meses.</p>
              <p>Esse movimento já existe.</p>
              <p>O BoraZé! quer digitalizá-lo.</p>
              <p>
                E criamos modelos para que pessoas possam participar da expansão dessa operação.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              DUAS OPORTUNIDADES. DUAS FORMAS DE GANHAR COM A EXPANSÃO.
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  EMBAIXADOR BORA ZÉ!
                </p>
                <h3 className="mt-4 text-3xl font-bold">
                  Sua cidade pode se transformar em um ativo de recorrência.
                </h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                  <p>
                    O Embaixador é a pessoa responsável por desenvolver a operação BoraZé! em seu
                    município.
                  </p>
                  <p>Ele ajuda a plataforma a crescer.</p>
                  <p>Ajuda a conectar estabelecimentos.</p>
                  <p>Desenvolve a operação local.</p>
                  <p>Fortalece a rede de mobilidade.</p>
                  <p>
                    E participa economicamente dos resultados gerados pela operação da sua cidade,
                    conforme as regras do programa.
                  </p>
                  <p>
                    Ou seja: quanto mais o ecossistema local se desenvolve, maior pode ser a base de
                    movimentação sobre a qual existe participação.
                  </p>
                  <p>Não é simplesmente vender uma vez.</p>
                  <p>
                    É ajudar a construir uma operação que pode continuar movimentando transações
                    todos os dias.
                  </p>
                  <p className="font-semibold text-foreground">
                    Imagine participar da movimentação de um Super App inteiro dentro da sua cidade.
                  </p>
                </div>
                <div className="mt-8">
                  <CTA href={ambassadorUrl} className="w-full">
                    QUERO CONHECER O MODELO EMBAIXADOR
                  </CTA>
                </div>
              </article>

              <article className="rounded-2xl border border-border bg-card p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  EXECUTIVO BORA ZÉ!
                </p>
                <h3 className="mt-4 text-3xl font-bold">
                  Transforme os negócios que você conhece em uma carteira que pode gerar recorrência.
                </h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                  <p>Existe restaurante na sua cidade?</p>
                  <p>Existe mercado?</p>
                  <p>Farmácia?</p>
                  <p>Pizzaria?</p>
                  <p>Hamburgueria?</p>
                  <p>Açaí?</p>
                  <p>Loja?</p>
                  <p>Distribuidora?</p>
                  <p>Todos eles precisam de clientes.</p>
                  <p>
                    O Executivo BoraZé! atua conectando esses estabelecimentos ao Super App.
                  </p>
                  <p>
                    E o modelo foi estruturado para que essa atividade possa gerar remuneração pela
                    ativação e participação recorrente, de acordo com as regras vigentes do programa.
                  </p>
                  <p>Você não precisa desenvolver aplicativo.</p>
                  <p>Não precisa montar uma equipe de tecnologia.</p>
                  <p>Não precisa abrir restaurante.</p>
                  <p>Não precisa ter estoque.</p>
                  <p>
                    Você trabalha na expansão de uma plataforma que já está sendo construída.
                  </p>
                  <p>E cada estabelecimento que entra pode passar a fazer parte da sua carteira.</p>
                  <p>É a diferença entre pensar somente:</p>
                  <p className="font-semibold text-foreground">“Quanto eu ganho nessa venda?”</p>
                  <p>e começar a pensar:</p>
                  <p className="font-semibold text-foreground">
                    “Quanto essa carteira pode movimentar nos próximos meses?”
                  </p>
                </div>
                <div className="mt-8">
                  <CTA href={executiveUrl} className="w-full">
                    QUERO CONHECER O MODELO EXECUTIVO
                  </CTA>
                </div>
              </article>
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">AGORA FAÇA UMA CONTA DIFERENTE.</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
              <p>Imagine construir uma carteira com:</p>
              <p className="text-3xl font-bold text-primary">10 estabelecimentos.</p>
              <p>Depois:</p>
              <p className="text-3xl font-bold text-primary">30 estabelecimentos.</p>
              <p>Depois:</p>
              <p className="text-3xl font-bold text-primary">50 estabelecimentos.</p>
              <p>Agora imagine esses estabelecimentos recebendo pedidos todos os meses dentro do BoraZé!.</p>
              <p>A oportunidade não está apenas na primeira ativação.</p>
              <p className="text-2xl font-bold text-foreground">O verdadeiro potencial está na RECORRÊNCIA.</p>
              <p>Um estabelecimento pode continuar vendendo.</p>
              <p>Uma cidade pode continuar fazendo pedidos.</p>
              <p>Mototáxis podem continuar recebendo chamadas.</p>
              <p>Consumidores podem continuar usando a plataforma.</p>
              <p>Dia após dia.</p>
              <p>Mês após mês.</p>
              <p>
                É isso que torna um ecossistema digital diferente de uma simples venda pontual.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">QUANTO É POSSÍVEL GANHAR?</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
              <p>Essa é uma das perguntas que vamos responder no evento.</p>
              <p>
                Vamos abrir a lógica econômica do BoraZé! e mostrar, com exemplos, como a movimentação
                pode se transformar em receita.
              </p>
              <p>Você verá simulações para entender como diferentes cenários de:</p>
              <p className="font-semibold text-foreground">
                estabelecimentos ativos + volume de vendas + corridas + utilização da plataforma
              </p>
              <p>podem impactar a operação.</p>
              <p>
                E também como Embaixadores e Executivos participam dessa economia de acordo com as
                regras de cada programa.
              </p>
              <p className="font-semibold text-foreground">Sem promessa de dinheiro fácil.</p>
              <p>
                Resultado depende da implantação, adesão dos estabelecimentos, utilização pelos
                consumidores, volume transacionado e execução de cada participante.
              </p>
              <p>
                Mas você poderá olhar os números e avaliar por conta própria o tamanho da oportunidade.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              O QUE ACONTECERIA SE O BORA ZÉ! SE TORNASSE PARTE DO DIA A DIA DA SUA CIDADE?
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
              <p>Essa é a pergunta mais importante deste evento.</p>
              <p>Porque não estamos falando apenas de vender comida pela internet.</p>
              <p>
                Estamos falando de construir uma infraestrutura digital local capaz de conectar
                diferentes partes da economia da cidade.
              </p>
              <p>
                E existe uma diferença enorme entre descobrir uma oportunidade depois que todo mundo
                já conhece…
              </p>
              <p className="text-2xl font-bold text-foreground">
                e participar enquanto ela ainda está sendo construída.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">O BORA ZÉ! ESTÁ EM EXPANSÃO.</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-white/70 md:text-lg">
              <p>E para crescer cidade por cidade, precisamos de pessoas.</p>
              <p>Pessoas que conheçam o comércio local.</p>
              <p>Que saibam conversar com empresários.</p>
              <p>Que conheçam a realidade do interior.</p>
              <p>Que tenham ambição de construir algo.</p>
              <p>Você pode entrar de duas maneiras:</p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-brand-white/10 bg-brand-white/5 p-6">
                <p className="text-xs font-bold uppercase text-primary">EMBAIXADOR</p>
                <p className="mt-3 text-xl font-bold">Desenvolva uma operação BoraZé! em uma cidade.</p>
              </div>
              <div className="rounded-2xl border border-brand-white/10 bg-brand-white/5 p-6">
                <p className="text-xs font-bold uppercase text-primary">EXECUTIVO</p>
                <p className="mt-3 text-xl font-bold">Construa uma carteira de estabelecimentos parceiros.</p>
              </div>
            </div>

            <p className="mt-8 text-lg text-brand-white/70">
              No evento, você conhecerá detalhadamente os dois modelos.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">O QUE VOCÊ VAI VER NO EVENTO</h2>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {[
                [
                  "01 — A oportunidade que existe no interior",
                  "Por que milhares de cidades ainda possuem espaço para uma plataforma local de comércio, serviços e mobilidade.",
                ],
                [
                  "02 — Por dentro do Super App BoraZé!",
                  "Como consumidores, estabelecimentos, entregadores e mototaxistas fazem parte do mesmo ecossistema.",
                ],
                [
                  "03 — De onde vem o dinheiro",
                  "Vamos mostrar a lógica de monetização da plataforma e as fontes de receita da operação.",
                ],
                [
                  "04 — Como funciona o Embaixador",
                  "O papel, as responsabilidades, a participação na operação e a lógica de recorrência.",
                ],
                [
                  "05 — Como funciona o Executivo",
                  "Como prospectar negócios, construir uma carteira e participar economicamente da expansão.",
                ],
                [
                  "06 — Simulações de ganhos",
                  "Cenários para visualizar como estabelecimentos, movimentação e recorrência podem se transformar em receita.",
                ],
                [
                  "07 — A abertura das oportunidades",
                  "Condições, critérios e próximos passos para quem decidir avançar.",
                ],
              ].map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">TALVEZ A SUA CIDADE SEJA PEQUENA.</h2>
            <p className="mt-4 text-3xl font-bold text-primary md:text-5xl">
              MAS A SOMA DE TUDO QUE ACONTECE NELA TODOS OS DIAS NÃO É.
            </p>
            <div className="mt-8 space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
              <p>Comida.</p>
              <p>Mercado.</p>
              <p>Farmácia.</p>
              <p>Gás.</p>
              <p>Água.</p>
              <p>Mobilidade.</p>
              <p>Serviços.</p>
              <p>Comércio.</p>
              <p>Milhares de transações acontecendo todos os meses.</p>
              <p>O BoraZé! quer conectar esse movimento.</p>
              <p>E você pode conhecer uma forma de participar dessa expansão.</p>
            </div>
          </div>
        </section>

        <section id="ingresso" className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-2xl shadow-brand-black/5">
              <div className="bg-brand-black px-6 py-10 text-center text-brand-white md:px-12 md:py-14">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  EVENTO ONLINE BORA ZÉ! • 27 E 28 DE OUTUBRO • 20H
                </p>
                <h2 className="mt-4 text-4xl font-bold md:text-6xl">
                  Conheça por dentro o Super App, os modelos de negócio e as oportunidades de Embaixador e Executivo.
                </h2>
                <p className="mt-8 text-sm font-bold uppercase text-brand-white/50">INGRESSO INDIVIDUAL</p>
                <p className="mt-2 text-7xl font-bold text-primary md:text-8xl">R$ 47</p>
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
                    <div key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-3.5" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-9">
                  <CTA href={generalTicketUrl} className="w-full">
                    GARANTIR MEU INGRESSO — R$ 47
                  </CTA>
                </div>

                <p className="mt-5 text-center text-xs leading-5 text-muted-foreground">
                  O ingresso dá acesso ao evento. A entrada nos programas Embaixador ou Executivo é
                  opcional e possui condições próprias. Resultados financeiros não são garantidos e
                  dependem, entre outros fatores, de execução, mercado, adesão e movimentação da
                  plataforma.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              SUA CIDADE JÁ COMPRA.
            </h2>
            <div className="mt-4 space-y-2 text-3xl font-bold text-primary md:text-4xl">
              <p>JÁ VENDE.</p>
              <p>JÁ PEDE.</p>
              <p>JÁ SE MOVIMENTA.</p>
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-brand-white/70">
              A oportunidade é conectar tudo isso.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-brand-white/65">
              O BoraZé! está construindo um Super App pensado para o interior.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-brand-white/65">
              E estamos procurando as pessoas que poderão participar dessa expansão conosco.
            </p>

            <p className="mt-6 text-2xl font-bold">Talvez a próxima cidade seja a sua.</p>

            <div className="mt-9">
              <CTA href={generalTicketUrl} className="w-full sm:w-auto">
                QUERO PARTICIPAR DO EVENTO — R$ 47
              </CTA>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
