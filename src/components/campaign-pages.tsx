import {
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
import { LaunchCountdownSection } from "@/components/launch-countdown";
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

const EXECUTIVE_CTA = "QUERO PARTICIPAR";

export function ExecutivePage() {
  return (
    <CampaignShell ctaLabel={EXECUTIVE_CTA} leadConfig={executiveLead} hideNavCta>
      <CampaignHero
        eyebrow="Lançamento • 20 de outubro"
        title={
          <>
            Sua cidade movimenta dinheiro. Ganhe com o <span className="text-primary">BoraZé!</span>
          </>
        }
        description="Apresente o Super App a restaurantes, mercados, farmácias e outros negócios. Com treinamento para captar clientes online, você pode atuar de onde estiver ou na sua região."
        image={smartBusiness.url}
        imageAlt="Executivo BoraZé apresentando o Super App no celular"
        proof={["Online ou presencial", "Sem estoque ou loja", "Com treinamento"]}
        imagePosition="object-top"
      />
      <section className="bg-brand-black py-9 text-brand-white">
        <PlatformMark />
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Oportunidade em cada categoria"
            title={
              <>
                Do hambúrguer ao gás de cozinha:{" "}
                <span className="text-muted-foreground">conecte os negócios ao Super App.</span>
              </>
            }
            description="Imagine ganhar com vendas de hambúrguer, cerveja, ração, gás, compras em mercados, pedidos em farmácias e corridas de mototáxi — sem ser dono desses negócios e sem precisar ter uma moto. Você conecta os estabelecimentos ao Super App BoraZé! e participa dos resultados conforme as regras do programa."
          />
          <div className="mt-12">
            <FeatureGrid
              items={[
                {
                  title: "Conecte os negócios",
                  description:
                    "Apresente o BoraZé! a restaurantes, mercados, farmácias e outros comércios.",
                  icon: <Smartphone />,
                },
                {
                  title: "Ajude na ativação",
                  description:
                    "Conduza o cadastro e acompanhe o estabelecimento até começar a operar.",
                  icon: <Store />,
                },
                {
                  title: "Participe dos resultados",
                  description:
                    "Receba por ativações elegíveis e comissões recorrentes, conforme as regras do programa.",
                  icon: <Building2 />,
                },
              ]}
            />
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-muted-foreground">
            Os ganhos variam conforme sua atuação, as regras do programa e a movimentação dos
            estabelecimentos cadastrados. Não há promessa de renda fixa.
          </p>
        </div>
      </section>

      <section className="bg-brand-black py-20 text-brand-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              light
              eyebrow="Um negócio pelo celular"
              title="Sem aluguel. Sem funcionários. Sem horário fixo."
              description="Você pode trabalhar de casa, na sua cidade ou pela internet. O BoraZé! oferece treinamento para captar negócios online e materiais para apresentar o Super App."
            />
            <div className="mt-9">
              <CheckList
                light
                items={[
                  "Sem comprar estoque",
                  "Sem aluguel ou equipe própria",
                  "Sem horário fixo",
                  "Trabalhe de casa ou presencialmente",
                  "Treinamento para captação online",
                  "Materiais para apresentar o BoraZé!",
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
            title="Você pode trabalhar de onde estiver."
            description="Use o treinamento para prospectar pela internet em outras cidades ou visite negócios da sua região. Você escolhe como atuar."
          />
          <div className="mt-12">
            <ProcessSteps
              steps={[
                {
                  title: "Atuação online",
                  description:
                    "De Itaperuna, no Rio de Janeiro, prospecte um restaurante em Santa Rosa, no Rio Grande do Sul.",
                },
                {
                  title: "Atuação presencial",
                  description:
                    "Visite negócios da sua cidade e região para apresentar o Super App.",
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
            title="Aprenda a captar clientes e cadastrar negócios."
            description="Na comunidade, você acompanha o lançamento e recebe informações sobre o treinamento de prospecção online e atuação presencial."
          />
          <div className="rounded-2xl border border-border bg-card p-7 shadow-xl shadow-brand-black/5">
            <h3 className="text-xl font-bold">Entre na comunidade do lançamento</h3>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase text-primary">Acesso gratuito</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Entre sem custo para acompanhar os conteúdos e receber o aviso de abertura em 20
                  de outubro.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-xs font-bold uppercase text-primary">
                  Treinamento Executivo BoraZé!
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  O treinamento completo será apresentado no lançamento e ensinará a prospectar,
                  apresentar o Super App e conduzir cadastros.
                </p>
              </div>
            </div>
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
    <CampaignShell ctaLabel="Analisar minha cidade" leadConfig={ambassadorLead} hideNavCta>
      <CampaignHero
        eyebrow="Oportunidade de operação local"
        title={
          <>
            Fature R$ 10.000+ por mês com nosso <span className="text-primary">SUPER APP</span>
          </>
        }
        description="Existe uma grande oportunidade passando na sua frente AGORA. Não abraçá-la vai fazer você se arrepender pelo resto da sua vida."
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
      <AmbassadorSimulator showPremises={false} />
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
    <CampaignShell ctaLabel={commerceCta} leadConfig={commerceLead} hideNavCta>
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
            title="CUSTO ZERO! Aumente o fluxo das vendas sem investir um mísero real."
            description="Com o Bora Zé, o risco é zero: você só paga quando vende. Não cobramos mensalidade nem taxa de cadastro. A cobrança acontece sobre os pedidos realizados, conforme a condição da sua categoria. Simples assim, preto no branco."
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

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="O que você precisa saber antes de cadastrar sua loja."
            description="As principais dúvidas de quem quer colocar o negócio no Bora Zé."
          />
          <div className="mt-10">
            <SimpleFaq
              items={[
                {
                  q: "Quanto custa para cadastrar meu negócio no Bora Zé?",
                  a: "O cadastro não tem taxa de adesão e não há mensalidade. A cobrança da plataforma acontece conforme os pedidos realizados e a condição comercial da sua categoria.",
                },
                {
                  q: "Preciso ter CNPJ para entrar?",
                  a: "Não. O Bora Zé não exige CNPJ como condição para iniciar o cadastro. A equipe orienta quais dados e documentos são necessários para concluir a ativação.",
                },
                {
                  q: "Quanto o Bora Zé cobra por venda?",
                  a: "A condição varia conforme a categoria do estabelecimento. Restaurantes e lojistas em geral têm regra de 7% sobre os pedidos; gás e água, 4%. Mercados possuem regra própria. Farmácias e bebidas devem ter a condição confirmada no cadastro antes da contratação.",
                },
                {
                  q: "Como funciona a entrega dos pedidos?",
                  a: "Sua loja pode trabalhar com entrega própria, com entregador Bora Zé ou com as duas modalidades, conforme a cobertura e a disponibilidade da operação na sua cidade.",
                },
                {
                  q: "Em quanto tempo minha loja pode aparecer no aplicativo?",
                  a: "Com a cidade em operação, cadastro completo, materiais conferidos e contrato assinado, a ativação pode ocorrer em até 48 horas.",
                },
                {
                  q: "Como recebo os pagamentos das vendas?",
                  a: "As formas de pagamento, taxas de cartão ou Pix e os prazos de repasse ficam descritos no contrato. A equipe apresenta essas condições antes da assinatura.",
                },
                {
                  q: "O Bora Zé ajuda a divulgar minha loja?",
                  a: "Sim. O Bora Zé divulga parceiros nas redes sociais e realiza ações promocionais. A participação depende das campanhas disponíveis e das regras vigentes em cada momento.",
                },
              ]}
            />
          </div>
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
