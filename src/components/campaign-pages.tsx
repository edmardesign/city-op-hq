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
import smartBusiness from "@/assets/executivo-negocio-inteligente-mobile.webp.asset.json";
import pharmacyImage from "@/assets/farmacia-boraze.webp.asset.json";
import deliveryImage from "@/assets/delivery-boraze.webp.asset.json";
import motoImage from "@/assets/mototaxi-boraze.webp.asset.json";
import gasImage from "@/assets/gas-agua-boraze.webp.asset.json";
import appPharmacy from "@/assets/app-farmacia-boraze-mobile.webp.asset.json";
import appHome from "@/assets/app-home-boraze-mobile.webp.asset.json";
import appDelivery from "@/assets/app-delivery-boraze-mobile.webp.asset.json";
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
import { COMMERCE_CATEGORIES } from "@/lib/commerce-categories";

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
  description: "Preencha uma etapa por vez para cadastrar seu negócio.",
};

export function CommercePage() {
  return (
    <CampaignShell ctaLabel="Quero colocar meu negócio no Bora Zé" leadConfig={commerceLead}>
      <CampaignHero
        eyebrow="O comércio da sua cidade, dentro de um só app."
        title={
          <>
            Quando seu cliente abrir o Bora Zé,{" "}
            <span className="text-primary">sua loja pode estar lá.</span>
          </>
        }
        description="O Bora Zé é o aplicativo local que conecta as pessoas aos negócios e serviços da própria cidade. Comida, mercado, farmácia, bebidas, gás e água, mototáxi e muito mais — tudo reunido em um só lugar. E o seu negócio pode fazer parte disso."
        cta="Quero colocar meu negócio no Bora Zé"
        image={appHome.url}
        imageAlt="Aplicativo local Bora Zé reúne negócios e serviços da cidade"
        proof={["Aplicativo local", "Novo canal digital", "Negócios da cidade"]}
        imagePosition="object-center"
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Não é só mais um app de delivery"
            title="É um aplicativo feito para conectar a cidade inteira."
            description="O cliente pode abrir o Bora Zé para pedir comida, comprar no mercado, procurar uma farmácia, pedir gás, água ou bebidas e chamar um mototáxi. Para o comércio participante, isso cria uma nova porta de entrada digital dentro da própria cidade."
          />
          <p className="mt-8 max-w-3xl text-2xl font-bold leading-tight md:text-4xl">
            Pense no Bora Zé como uma nova rua comercial. Só que dentro do celular de quem mora na
            sua cidade.
          </p>
        </div>
      </section>

      <MediaBand
        image={appDelivery.url}
        alt="Tela do Bora Zé para encontrar comércios e fazer pedidos"
        eyebrow="Um canal adicional"
        title="Sua loja mais perto de quem compra na sua cidade"
        description="Instagram, WhatsApp e ponto físico continuam existindo. O Bora Zé chega como mais um canal para o cliente encontrar e solicitar o que sua loja oferece. Ele entra no Bora Zé procurando aquilo de que precisa — e pode encontrar você."
      />

      <section className="bg-brand-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Do aplicativo até o cliente"
            title="Um caminho simples para novos pedidos e solicitações."
            description="Seu negócio ganha presença no aplicativo local e recebe as oportunidades disponíveis para sua categoria e região."
          />
          <div className="mt-12">
            <ProcessSteps
              steps={[
                {
                  title: "Seu negócio entra no Bora Zé",
                  description: "O estabelecimento passa a fazer parte do aplicativo local.",
                },
                {
                  title: "O cliente abre o aplicativo",
                  description: "Ele procura uma categoria, produto ou serviço da cidade.",
                },
                {
                  title: "Ele encontra seu negócio",
                  description: "Sua loja aparece como uma opção local no momento da busca.",
                },
                {
                  title: "O pedido chega até você",
                  description: "Sua equipe recebe e prepara a solicitação pelo fluxo disponível.",
                },
                {
                  title: "O cliente recebe",
                  description: "O atendimento é concluído conforme a operação da sua categoria.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Negócios locais"
            title="Em qual categoria seu negócio atua?"
            description="O Bora Zé reúne estabelecimentos que fazem parte da rotina da cidade."
          />
          <div className="mt-10 flex flex-wrap gap-2.5" aria-label="Categorias atendidas">
            {COMMERCE_CATEGORIES.map((category) => (
              <span
                key={category}
                className="rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold shadow-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20 text-brand-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            light
            eyebrow="Presença local no celular"
            title="Seu ponto continua o mesmo. As formas de chegar até ele aumentam."
            description="O Bora Zé complementa os canais que seu negócio já usa e aproxima sua oferta de pessoas que estão procurando dentro do aplicativo."
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
        title="Coloque seu negócio onde a cidade vai procurar."
        description="Cadastre seu estabelecimento em etapas rápidas para continuar o atendimento."
        cta="Quero colocar meu negócio no Bora Zé"
      />
    </CampaignShell>
  );
}

const motoLead = {
  type: "mototaxi" as const,
  title: "Trabalhe com o Bora Zé",
  description: "Faça seu cadastro inicial. Nenhum documento é necessário nesta etapa.",
};

export function MotoTaxiPage() {
  return (
    <CampaignShell ctaLabel="Quero trabalhar com o Bora Zé" leadConfig={motoLead}>
      <CampaignHero
        eyebrow="Para mototaxistas e entregadores"
        title={
          <>
            Receba mais chamadas. Faça mais entregas.
            <span className="mt-4 block text-2xl text-primary sm:text-3xl lg:text-4xl">
              Tenha mais oportunidades pelo Bora Zé.
            </span>
          </>
        }
        description="O Bora Zé conecta passageiros, comércios e entregadores da sua cidade em um só aplicativo. Você pode usar o celular para receber solicitações de corrida, oportunidades de entrega ou atuar nas duas frentes, conforme a operação disponível na sua cidade."
        cta="Quero trabalhar com o Bora Zé"
        image={motoImage.url}
        imageAlt="Profissional Bora Zé disponível para corridas e entregas"
        proof={["Chamadas pelo celular", "Corridas e entregas", "Operação local"]}
        imagePosition="object-center"
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Duas oportunidades"
            title="Duas formas de trabalhar com o Bora Zé"
            description="O passageiro pede um mototáxi pelo aplicativo. O cliente compra em um comércio parceiro, e os pedidos que precisam de entrega podem gerar oportunidades para profissionais disponíveis."
          />
          <div className="mt-12">
            <FeatureGrid
              items={[
                { title: "Mototáxi", description: "Receba chamadas de passageiros da sua cidade. Fique disponível no aplicativo e receba solicitações de corrida conforme a demanda e a operação local.", icon: <Bike /> },
                { title: "Entregador", description: "Faça entregas para os negócios parceiros. Receba oportunidades geradas por pedidos em restaurantes, mercados, farmácias, bebidas, gás e água e outras categorias.", icon: <PackageOpen /> },
                { title: "Quero atuar nas duas", description: "Escolha corridas e entregas no cadastro. A atuação nas duas modalidades depende das regras e da disponibilidade da operação local.", icon: <Smartphone /> },
              ]}
            />
          </div>
        </div>
      </section>
      <MediaBand
        image={appHome.url}
        alt="Aplicativo Bora Zé conectando passageiros, comércios e profissionais locais"
        eyebrow="Canal adicional"
        title="Mais movimento. Menos tempo esperando oportunidade aparecer."
        description="O Bora Zé cria mais um canal para corridas e entregas na sua rotina. A quantidade de solicitações varia conforme demanda, horários, cidade e disponibilidade da operação."
      />
      <section className="bg-brand-black py-20 text-brand-white md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            light
            eyebrow="Como funciona"
            title="Do cadastro à próxima solicitação"
            description="Você escolhe se quer atuar como Mototáxi, Entregador ou, quando permitido pela operação local, nas duas modalidades."
          />
          <div className="mt-12 text-foreground">
            <ProcessSteps steps={[
              { title: "Faça seu cadastro", description: "Informe seus dados básicos para começar." },
              { title: "Escolha como quer atuar", description: "Mototáxi, Entregador ou as duas modalidades." },
              { title: "Fique disponível", description: "Ative sua disponibilidade conforme a operação local." },
              { title: "Receba oportunidades", description: "As solicitações chegam diretamente no celular." },
              { title: "Aceite e realize", description: "Faça a corrida ou a entrega que você aceitou." },
              { title: "Continue disponível", description: "Fique pronto para novas solicitações." },
            ]} />
          </div>
        </div>
      </section>
      <ConversionSection
        title="Sua próxima corrida ou entrega pode começar no Bora Zé."
        description="Cadastre-se para conhecer as modalidades disponíveis na operação da sua cidade."
        cta="Quero trabalhar com o Bora Zé"
      />
    </CampaignShell>
  );
}
