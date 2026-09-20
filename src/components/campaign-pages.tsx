import { useState } from "react";
import {
  Bike,
  Building2,
  Flame,
  HeartPulse,
  MapPin,
  PackageOpen,
  ShoppingBasket,
  Smartphone,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import smartBusiness from "@/assets/executivo-negocio-inteligente.png.asset.json";
import marketImage from "@/assets/mercado-boraze.webp.asset.json";
import pharmacyImage from "@/assets/farmacia-boraze.webp.asset.json";
import deliveryImage from "@/assets/delivery-boraze.webp.asset.json";
import motoImage from "@/assets/mototaxi-boraze.webp.asset.json";
import gasImage from "@/assets/gas-agua-boraze.webp.asset.json";
import appPharmacy from "@/assets/app-farmacia-boraze.png.asset.json";
import appHome from "@/assets/app-home-boraze.png.asset.json";
import appDelivery from "@/assets/app-delivery-boraze.png.asset.json";
import {
  CampaignHero,
  CampaignShell,
  CheckList,
  ConversionSection,
  FeatureGrid,
  MediaBand,
  PlatformMark,
  ProcessSteps,
  SectionHeading,
  SimpleFaq,
} from "@/components/landing-system";
import {
  AboutProject,
  AmbassadorAdvantages,
  AmbassadorBenefits,
  AmbassadorFaq,
  AmbassadorMetrics,
  AmbassadorProfiles,
  AmbassadorSimulator,
  BusinessComparison,
  CityAnalysis,
  DecisionSecurity,
  ExistingMarket,
  NationalNetwork,
  PlatformEconomyStory,
  RevenueStreams,
} from "@/components/ambassador-sections";

const verticals = [
  {
    title: "Delivery",
    description: "Pedidos de restaurantes e lanchonetes.",
    icon: <UtensilsCrossed />,
  },
  {
    title: "Mercado",
    description: "Compras que fazem parte da rotina local.",
    icon: <ShoppingBasket />,
  },
  {
    title: "Farmácia",
    description: "Conveniência para produtos elegíveis de saúde.",
    icon: <HeartPulse />,
  },
  { title: "Gás e água", description: "Itens essenciais pedidos todos os dias.", icon: <Flame /> },
  {
    title: "Bebidas",
    description: "Distribuidoras próximas de quem compra.",
    icon: <PackageOpen />,
  },
  { title: "Moto-táxi", description: "Passageiros conectados a parceiros locais.", icon: <Bike /> },
];

const executiveLead = {
  type: "executivo" as const,
  title: "Conheça a oportunidade Executivo Bora Zé",
  description: "Uma pergunta por vez. Seus dados seguem com você até a conversa no WhatsApp.",
};

export function ExecutivePage() {
  const [businesses, setBusinesses] = useState(10);
  return (
    <CampaignShell ctaLabel="Quero conhecer" leadConfig={executiveLead}>
      <CampaignHero
        eyebrow="Uma oportunidade construída por você"
        title={
          <>
            Ganhe com negócios locais <span className="text-primary">sem ser dono de um.</span>
          </>
        }
        description="Restaurantes, mercados, farmácias e outros negócios já movimentam dinheiro todos os dias. Você pode construir sua oportunidade conectando esse mercado a uma plataforma pronta."
        cta="Quero conhecer a oportunidade"
        image={smartBusiness.url}
        imageAlt="Executivo apresenta o aplicativo Bora Zé no celular como um negócio inteligente"
        proof={["Seu próprio crescimento", "Sem estoque", "Plataforma pronta"]}
        imagePosition="object-top"
      />
      <section className="bg-brand-black py-9 text-brand-white">
        <PlatformMark />
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Olhe para sua cidade"
            title={
              <>
                O dinheiro já está circulando.{" "}
                <span className="text-muted-foreground">
                  Sua oportunidade é participar desse movimento.
                </span>
              </>
            }
            description="Todos os dias, pessoas compram comida, medicamentos, itens para casa e serviços locais. Você não precisa abrir cada um desses negócios para construir algo em torno dessas transações."
          />
          <div className="mt-12">
            <FeatureGrid items={verticals} columns={6} />
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20 text-brand-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              light
              eyebrow="Um modelo mais inteligente"
              title="Construa seu negócio sem carregar os custos de seis operações."
              description="Em vez de investir em estrutura física, estoque e equipes para cada segmento, você desenvolve uma carteira de negócios locais dentro de uma plataforma digital."
            />
            <div className="mt-9">
              <CheckList
                light
                items={[
                  "Sem comprar estoque",
                  "Sem alugar ponto comercial",
                  "Sem montar cozinha",
                  "Sem abrir farmácia",
                  "Sem manter frota",
                  "Sem desenvolver aplicativo",
                ]}
              />
            </div>
          </div>
          <img
            src={appHome.url}
            loading="lazy"
            width={768}
            height={1024}
            alt="Aplicativo Bora Zé reúne comércio e mobilidade local"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-brand-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Sua oportunidade"
            title="Transforme relacionamento comercial em uma carteira que pode crescer."
            description="Como Executivo, você apresenta a oportunidade a estabelecimentos elegíveis, apoia suas ativações e desenvolve sua própria carteira. Seu resultado depende da sua execução, das regras do programa e do desempenho dos negócios vinculados."
          />
          <div className="mt-12">
            <ProcessSteps
              steps={[
                {
                  title: "Domine a oportunidade",
                  description: "Entenda a plataforma, as verticais e o processo comercial.",
                },
                {
                  title: "Encontre negócios",
                  description:
                    "Converse com estabelecimentos que querem estar mais perto dos clientes.",
                },
                {
                  title: "Construa sua carteira",
                  description: "Acompanhe a entrada dos negócios elegíveis na plataforma.",
                },
                {
                  title: "Continue crescendo",
                  description: "Amplie seus relacionamentos e desenvolva sua atuação comercial.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Visualize seu crescimento"
            title="Uma carteira começa com o primeiro negócio."
            description="Ajuste a quantidade para enxergar a amplitude de uma rede construída por você. É uma referência de escala, não uma projeção de renda."
          />
          <div className="rounded-2xl border border-border bg-card p-7 shadow-xl shadow-brand-black/5">
            <label htmlFor="businesses" className="text-sm font-semibold">
              Negócios na sua carteira
            </label>
            <p className="mt-3 text-6xl font-bold">{businesses}</p>
            <input
              id="businesses"
              type="range"
              min="5"
              max="100"
              step="5"
              value={businesses}
              onChange={(event) => setBusinesses(Number(event.target.value))}
              className="mt-7 w-full accent-primary"
            />
            <div className="mt-7 rounded-xl bg-brand-black p-5 text-brand-white">
              <p className="text-xs text-brand-white/50">
                Uma rede construída relacionamento por relacionamento
              </p>
              <p className="mt-2 text-xl font-bold text-primary">
                {businesses} oportunidades locais
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHeading eyebrow="Dúvidas comuns" title="Antes de dar o próximo passo." />
          <div className="mt-10">
            <SimpleFaq
              items={[
                {
                  q: "Preciso ter uma loja?",
                  a: "Não. A oportunidade do Executivo está em desenvolver uma carteira de estabelecimentos dentro do modelo do programa.",
                },
                {
                  q: "Preciso desenvolver tecnologia?",
                  a: "Não. O Bora Zé fornece a plataforma; você concentra sua energia no desenvolvimento comercial da sua carteira.",
                },
                {
                  q: "Existe garantia de resultado?",
                  a: "Não. Resultados dependem de dedicação, execução, regras vigentes e desempenho dos estabelecimentos vinculados.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <ConversionSection
        title="Sua oportunidade pode começar com uma conversa."
        description="Responda poucas perguntas e conheça os próximos passos no WhatsApp oficial."
        cta="Quero conhecer"
      />
    </CampaignShell>
  );
}

const ambassadorLead = {
  type: "embaixador" as const,
  title: "Analise sua cidade",
  description: "Vamos entender sua cidade e seu momento antes de apresentar os próximos passos.",
};

export function AmbassadorPage() {
  return (
    <CampaignShell ctaLabel="Analisar minha cidade" leadConfig={ambassadorLead}>
      <CampaignHero
        eyebrow="Oportunidade de operação local"
        title={
          <>
            Fature R$ 10.000+ por mês com nosso <span className="text-primary">SUPER APP</span>
          </>
        }
        description="Existe uma grande oportunidade passando na sua frente AGORA. Não abraçá-la vai fazer você se arrepender pelo resto da sua vida."
        cta="Quero analisar minha cidade"
        image={smartBusiness.url}
        imageAlt="Empreendedor apresenta no celular a oportunidade de operação digital Bora Zé"
        proof={["Negócio digital", "Operação local", "Análise por cidade"]}
        imagePosition="object-top"
      />
      <AmbassadorMetrics />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Olhe para sua cidade"
            title={
              <>
                O dinheiro já está circulando.{" "}
                <span className="text-muted-foreground">
                  Sua oportunidade é participar desse movimento.
                </span>
              </>
            }
            description="Todos os dias, pessoas compram comida, medicamentos, itens para casa e serviços locais. Você não precisa abrir cada um desses negócios para construir algo em torno dessas transações."
          />
          <div className="mt-12">
            <FeatureGrid items={verticals} columns={6} />
          </div>
        </div>
      </section>

      <PlatformEconomyStory />
      <NationalNetwork />
      <AmbassadorAdvantages />
      <AmbassadorProfiles />
      <ExistingMarket />
      <AmbassadorBenefits />
      <AmbassadorSimulator />
      <RevenueStreams />
      <BusinessComparison />
      <CityAnalysis />
      <DecisionSecurity />
      <AboutProject />
      <AmbassadorFaq />
      <ConversionSection
        title="Descubra se sua cidade está disponível."
        description="Comece pela sua cidade. A pergunta sobre investimento aparece somente ao final da análise inicial."
        cta="Quero analisar minha cidade"
      />
    </CampaignShell>
  );
}

const commerceLead = {
  type: "comercio" as const,
  title: "Coloque seu negócio no Bora Zé",
  description: "Seu cadastro inicial leva menos de dois minutos e segue para o WhatsApp oficial.",
};

export function CommercePage() {
  return (
    <CampaignShell ctaLabel="Colocar meu negócio" leadConfig={commerceLead}>
      <CampaignHero
        eyebrow="Mais uma porta de entrada para sua loja"
        title={
          <>
            Seu próximo pedido pode começar <span className="text-primary">no Bora Zé.</span>
          </>
        }
        description="Leve seu comércio para onde seus clientes já estão: no celular. Mais pessoas da sua cidade podem encontrar seu negócio e realizar pedidos conforme os serviços disponíveis."
        cta="Quero colocar meu negócio no Bora Zé"
        image={marketImage.url}
        imageAlt="Mercado local disponível nas categorias do aplicativo Bora Zé"
        proof={["Mais presença local", "Novo canal de pedidos", "Operação simples"]}
        imagePosition="object-center"
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Seu comércio no celular"
            title="Transforme o celular dos seus clientes em mais uma porta de entrada."
            description="O Bora Zé é um aplicativo local onde consumidores encontram estabelecimentos e podem fazer pedidos ou solicitações conforme os serviços disponíveis na cidade."
          />
          <div className="mt-12">
            <ProcessSteps
              steps={[
                {
                  title: "Sua loja entra no app",
                  description: "Seu estabelecimento ganha presença em um canal digital local.",
                },
                {
                  title: "Clientes encontram",
                  description: "Pessoas da cidade descobrem seus produtos ou serviços elegíveis.",
                },
                {
                  title: "Você recebe pedidos",
                  description: "Sua equipe acompanha e prepara as novas solicitações.",
                },
                {
                  title: "O pedido chega",
                  description: "A entrega segue a modalidade disponível para seu negócio e região.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <MediaBand
        image={appPharmacy.url}
        alt="Cliente encontra produtos de farmácia no aplicativo Bora Zé"
        eyebrow="Mais alcance na sua cidade"
        title="Crie um novo canal de venda sem deixar de ser um negócio local."
        description="A presença no aplicativo pode ampliar suas oportunidades de venda, facilitar a descoberta da sua loja e aproximar seu negócio de clientes que preferem pedir pelo celular."
      />
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Quem pode entrar"
            title="Negócios que fazem parte do dia a dia da cidade."
            description="A elegibilidade e a disponibilidade das categorias podem variar por região."
          />
          <div className="mt-12">
            <FeatureGrid
              columns={4}
              items={[
                {
                  title: "Restaurantes e lanchonetes",
                  description: "Cardápios e pedidos para clientes locais.",
                },
                { title: "Mercados", description: "Produtos da rotina em um canal digital." },
                { title: "Farmácias", description: "Itens elegíveis com conveniência local." },
                {
                  title: "Bebidas, gás e água",
                  description: "Distribuidores e fornecedores da cidade.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="bg-brand-black py-20 text-brand-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            light
            eyebrow="Mais oportunidades"
            title="Mais clientes podem encontrar seu negócio."
            description="Sem promessa de vendas: um canal adicional amplia as oportunidades para sua loja ser descoberta e receber novos pedidos."
          />
          <CheckList
            light
            items={[
              "Presença no aplicativo",
              "Novo canal de venda",
              "Alcance local",
              "Gestão de pedidos",
              "Possibilidade de entrega",
              "Suporte da plataforma",
            ]}
          />
        </div>
      </section>
      <ConversionSection
        title="Pronto para abrir uma nova porta para sua loja?"
        description="Conte sobre seu negócio, uma pergunta por vez."
        cta="Quero colocar meu negócio no Bora Zé"
      />
    </CampaignShell>
  );
}

const motoLead = {
  type: "mototaxi" as const,
  title: "Receba oportunidades pelo Bora Zé",
  description:
    "Comece com seus dados básicos. Documentos e critérios ficam para a conversa seguinte.",
};

export function MotoTaxiPage() {
  return (
    <CampaignShell ctaLabel="Receber mais chamadas" leadConfig={motoLead}>
      <CampaignHero
        eyebrow="Mais um canal para suas corridas"
        title={
          <>
            Receba mais chamadas. <span className="text-primary">Faça mais corridas.</span>
          </>
        }
        description="Entre para o Bora Zé e tenha mais um canal para receber solicitações de passageiros da sua cidade diretamente pelo celular."
        cta="Quero receber mais chamadas"
        image={motoImage.url}
        imageAlt="Mototaxista Bora Zé transporta passageira em uma cidade brasileira"
        proof={["Chamadas pelo celular", "Mais exposição local", "Cadastro sujeito à análise"]}
        imagePosition="object-center"
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="A próxima chamada"
            title="Mais passageiros procurando corrida. Mais oportunidades chegando até você."
            description="O Bora Zé é um aplicativo que conecta passageiros aos mototaxistas disponíveis da cidade. Assim, você ganha mais uma forma de aproveitar seu horário de trabalho."
          />
          <div className="mt-12">
            <ProcessSteps
              steps={[
                {
                  title: "Passageiro solicita",
                  description: "A pessoa pede uma corrida pelo aplicativo.",
                },
                {
                  title: "A chamada chega",
                  description: "Parceiros disponíveis recebem a oportunidade no celular.",
                },
                {
                  title: "Você aceita",
                  description: "Você avalia a solicitação disponível e decide aceitar.",
                },
                {
                  title: "Realiza a corrida",
                  description: "Você encontra o passageiro e faz o deslocamento.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <MediaBand
        image={appHome.url}
        alt="Aplicativo Bora Zé com a categoria de mototáxi"
        eyebrow="Menos tempo esperando"
        title="Use o celular para ampliar sua exposição a passageiros."
        description="Mais solicitações podem criar mais oportunidades de corrida e faturamento. A quantidade depende da demanda, da disponibilidade da operação e do seu próprio trabalho."
      />
      <section className="bg-brand-black py-20 text-brand-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            light
            eyebrow="Uma oportunidade prática"
            title="Mais um canal para conseguir corridas na sua cidade."
            description="Sem renda ou demanda garantida. O aplicativo amplia as formas pelas quais passageiros podem encontrar você."
          />
          <CheckList
            light
            items={[
              "Receba solicitações pelo celular",
              "Amplie sua exposição",
              "Aproveite melhor seu horário",
              "Conecte-se a passageiros locais",
            ]}
          />
        </div>
      </section>
      <ConversionSection
        title="Sua próxima chamada pode chegar pelo Bora Zé."
        description="Faça o cadastro inicial sem documentos e continue pelo WhatsApp oficial."
        cta="Quero receber mais chamadas"
      />
    </CampaignShell>
  );
}
