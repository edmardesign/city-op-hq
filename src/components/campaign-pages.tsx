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
  title: "Comunidade Executivo BoraZé!",
  description: "Três perguntas rápidas para entrar na comunidade gratuita do lançamento.",
};

const EXECUTIVE_CTA = "QUERO ENTRAR NA COMUNIDADE";

export function ExecutivePage() {
  return (
    <CampaignShell ctaLabel={EXECUTIVE_CTA} leadConfig={executiveLead} hideNavCta>
      <CampaignHero
        eyebrow="Lançamento • 20 de outubro"
        title={
          <>
            Ganhe dinheiro conectando negócios ao{" "}
            <span className="text-primary">BoraZé!</span>
          </>
        }
        description="Trabalhe de onde estiver, cadastrando comércios no Super App. Aprenda a conquistar clientes pela internet ou atue presencialmente na sua cidade."
        image={smartBusiness.url}
        imageAlt="Executivo BoraZé apresentando o Super App no celular"
        proof={["Atuação online ou presencial", "Sem estoque", "Com treinamento"]}
        imagePosition="object-top"
      />
      <section className="bg-brand-black py-9 text-brand-white">
        <PlatformMark />
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="O que você faz"
            title={
              <>
                Ajude negócios a vender mais.{" "}
                <span className="text-muted-foreground">Ganhe por fazer essa conexão.</span>
              </>
            }
            description="Como Executivo BoraZé!, você apresenta o Super App a comércios da sua região ou de qualquer cidade atendida, conduz o cadastro e acompanha a ativação. Os ganhos acontecem por ativações elegíveis e por comissões recorrentes, conforme as regras do programa — os valores e percentuais são apresentados no lançamento."
          />
          <div className="mt-12">
            <FeatureGrid
              items={[
                {
                  title: "Apresente o Super App",
                  description:
                    "Mostre ao comerciante como o BoraZé! reúne pedidos, compras e serviços da cidade.",
                  icon: <Smartphone />,
                },
                {
                  title: "Conduza o cadastro",
                  description:
                    "Ajude o negócio a entrar no aplicativo com as informações corretas, do início ao fim.",
                  icon: <Store />,
                },
                {
                  title: "Acompanhe a ativação",
                  description:
                    "Fique perto do estabelecimento até ele estar ativo e recebendo solicitações.",
                  icon: <Building2 />,
                },
              ]}
            />
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-muted-foreground">
            Não existe promessa de ganho fixo. O resultado depende da sua atuação, das regras
            vigentes do programa e do desempenho dos negócios que você cadastrar.
          </p>
        </div>
      </section>

      <section className="bg-brand-black py-20 text-brand-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              light
              eyebrow="Como você trabalha"
              title="Sem estoque. Sem ponto comercial. Com treinamento para começar."
              description="Você não compra mercadoria, não abre loja e não desenvolve tecnologia. Sua atuação é comercial: encontrar negócios, apresentar o Super App e conduzir o cadastro."
            />
            <div className="mt-9">
              <CheckList
                light
                items={[
                  "Sem comprar estoque",
                  "Sem alugar ponto comercial",
                  "Sem contratar equipe",
                  "Sem desenvolver aplicativo",
                  "Com treinamento do programa",
                  "Com material para apresentar a proposta",
                ]}
              />
            </div>
          </div>
          <img
            src={appHome.url}
            loading="lazy"
            width={768}
            height={1024}
            alt="Super App BoraZé reunindo comércio e mobilidade local"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-brand-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="De onde você quiser"
            title="Sua cidade não precisa ser o limite."
            description="Você pode estar em Itaperuna, no interior do Rio de Janeiro, e cadastrar um restaurante de Santa Rosa, no interior do Rio Grande do Sul, conduzindo tudo pela internet. Se preferir o contato olho no olho, também é possível atuar presencialmente na sua cidade e na sua região. O cadastro vale apenas para regiões e categorias atendidas pelo Super App."
          />
          <div className="mt-12">
            <ProcessSteps
              steps={[
                {
                  title: "Escolha seu jeito",
                  description: "Atuação online, presencial ou as duas, conforme sua rotina.",
                },
                {
                  title: "Encontre negócios",
                  description: "Use o treinamento para localizar comércios interessados.",
                },
                {
                  title: "Apresente a proposta",
                  description: "Explique como o Super App coloca a loja na frente dos clientes.",
                },
                {
                  title: "Cadastre e acompanhe",
                  description: "Conduza o cadastro e acompanhe a ativação do estabelecimento.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Comunidade e treinamento"
            title="Você aprende junto com outros Executivos."
            description="O programa oferece uma comunidade de Executivos BoraZé! com treinamento para encontrar negócios pela internet, apresentar a proposta e conduzir o cadastro do começo ao fim."
          />
          <div className="rounded-2xl border border-border bg-card p-7 shadow-xl shadow-brand-black/5">
            <h3 className="text-xl font-bold">Duas coisas diferentes</h3>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase text-primary">
                  Comunidade gratuita do lançamento
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  É aberta e sem custo. Serve para você conhecer o programa, acompanhar os
                  conteúdos e receber o aviso de abertura no dia 20 de outubro. Entrar nela não é
                  uma compra e não garante vaga.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-xs font-bold uppercase text-primary">
                  Treinamento do programa adquirido
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  É o conteúdo completo de quem entra no Executivo BoraZé! depois do lançamento:
                  método de prospecção online, abordagem presencial, apresentação da proposta e
                  condução do cadastro, com acompanhamento da comunidade de Executivos.
                </p>
              </div>
            </div>
            <p className="mt-6 text-xs leading-5 text-muted-foreground">
              Sem simulações de ganhos: as condições comerciais e os valores são apresentados na
              abertura oficial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHeading eyebrow="Dúvidas comuns" title="Antes de entrar na comunidade." />
          <div className="mt-10">
            <SimpleFaq
              items={[
                {
                  q: "Preciso ter experiência em vendas?",
                  a: "Não é exigida experiência anterior. O programa oferece treinamento para apresentar o Super App e conduzir o cadastro dos negócios.",
                },
                {
                  q: "Consigo trabalhar de casa?",
                  a: "Sim. É possível conduzir a prospecção e o cadastro pela internet, de onde você estiver.",
                },
                {
                  q: "Preciso fazer visitas presenciais?",
                  a: "Não é obrigatório. Visitar comércios da sua cidade ou região é uma opção, não uma exigência.",
                },
                {
                  q: "Entrar na comunidade gratuita é o mesmo que comprar o programa?",
                  a: "Não. A comunidade é gratuita e serve para conhecer o programa e receber o aviso de abertura. A entrada no programa acontece somente após o lançamento.",
                },
                {
                  q: "Quanto eu vou ganhar?",
                  a: "Os ganhos são variáveis e dependem da sua atuação, das regras vigentes do programa e do desempenho dos negócios cadastrados. Não há promessa de resultado.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <LaunchCountdownSection cta={EXECUTIVE_CTA} />
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
  title: "Cadastre seu negócio no Bora Zé",
  description: "Preencha uma etapa por vez para cadastrar seu negócio.",
};

const commerceCta = "QUERO CADASTRAR MEU NEGÓCIO GRÁTIS";

export function CommercePage() {
  return (
    <CampaignShell ctaLabel={commerceCta} leadConfig={commerceLead}>
      <CampaignHero
        eyebrow="Seu negócio no BoraZé!"
        title={
          <>
            Mais clientes. Mais pedidos. <span className="text-primary">Mais vendas.</span>
          </>
        }
        description="Coloque sua loja no Super App da sua cidade e receba pedidos de novos clientes. Cadastre-se grátis e comece a vender."
        cta={commerceCta}
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
        cta={commerceCta}
      />
    </CampaignShell>
  );
}

const motoLead = {
  type: "mototaxi" as const,
  title: "Cadastre-se no BoraZé!",
  description: "Faça seu cadastro inicial. Nenhum documento é necessário nesta etapa.",
};

export function MotoTaxiPage() {
  return (
    <CampaignShell ctaLabel="Quero me cadastrar" leadConfig={motoLead}>
      <CampaignHero
        eyebrow="Para mototaxistas e entregadores"
        title={
          <>
            Mais chamadas. Mais entregas.
            <span className="mt-4 block text-2xl text-primary sm:text-3xl lg:text-4xl">
              Mais dinheiro no bolso.
            </span>
          </>
        }
        description="Conecte-se a passageiros e comércios da sua cidade com o BoraZé!, o Super App que conecta você a mais clientes."
        cta="Quero me cadastrar"
        image={motoImage.url}
        imageAlt="Profissional BoraZé! disponível para corridas e entregas"
        proof={["Mototáxi", "Entregas", "Ou os dois"]}
        imagePosition="object-center"
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Sua moto pode render mais"
            title="Sua moto. Duas formas de ganhar."
          />
          <div className="mt-12">
            <FeatureGrid
              items={[
                {
                  title: "Leve passageiros",
                  description:
                    "Receba chamadas de quem precisa de mototáxi na sua cidade.",
                  icon: <Bike />,
                },
                {
                  title: "Faça entregas",
                  description:
                    "Entregue pedidos de restaurantes, mercados, farmácias e outros comércios parceiros.",
                  icon: <PackageOpen />,
                },
                {
                  title: "Quer fazer os dois?",
                  description:
                    "Selecione as duas opções no cadastro e amplie suas possibilidades.",
                  icon: <Smartphone />,
                },
              ]}
            />
          </div>
        </div>
      </section>
      <MediaBand
        image={appHome.url}
        alt="Super App BoraZé! conectando passageiros, comércios e profissionais locais"
        eyebrow="Conecte-se a novos clientes"
        title="Não dependa só de quem já conhece você."
        description="Tem gente precisando de uma corrida. Tem comércio precisando de entrega. O BoraZé! conecta você a essa demanda."
      />
      <section className="bg-brand-black py-20 text-brand-white md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            light
            eyebrow="Como funciona"
            title="Começar é simples."
          />
          <div className="mt-12 text-foreground [&>div]:md:grid-cols-3">
            <ProcessSteps
              steps={[
                {
                  title: "Cadastre-se",
                  description: "Informe seus dados, sua cidade e como quer trabalhar.",
                },
                {
                  title: "Confira a disponibilidade",
                  description: "Saiba como funciona a entrada de profissionais na sua cidade.",
                },
                {
                  title: "Receba solicitações",
                  description: "Com o cadastro liberado, fique disponível para receber chamadas e pedidos de entrega.",
                },
              ]}
            />
          </div>
          <p className="mt-6 text-sm text-brand-white/70">
            As modalidades e solicitações dependem da operação e da demanda na sua cidade.
          </p>
        </div>
      </section>
      <ConversionSection
        title="Bora fazer sua moto render mais?"
        description="Cadastre-se para trabalhar com corridas, entregas ou as duas modalidades na sua cidade."
        cta="Quero me cadastrar"
      />
    </CampaignShell>
  );
}
