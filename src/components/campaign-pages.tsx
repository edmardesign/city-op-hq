import { useState } from "react";
import { Bike, Building2, Flame, HeartPulse, MapPin, PackageOpen, ShoppingBasket, Smartphone, Store, UtensilsCrossed } from "lucide-react";
import executiveHero from "@/assets/executivo-hero.jpg";
import ambassadorHero from "@/assets/embaixador-hero.jpg";
import commerceHero from "@/assets/comercio-hero.jpg";
import motoHero from "@/assets/mototaxi-hero.jpg";
import interfaceControl from "@/assets/interface-control.jpg";
import {
  CampaignHero,
  CampaignShell,
  CheckList,
  FeatureGrid,
  LeadForm,
  PlatformMark,
  ProcessSteps,
  SectionHeading,
  SimpleFaq,
} from "@/components/landing-system";

const verticals = [
  { title: "Delivery", description: "Restaurantes e lanchonetes conectados a clientes locais.", icon: <UtensilsCrossed /> },
  { title: "Mercado", description: "Compras do dia a dia disponíveis pelo aplicativo.", icon: <ShoppingBasket /> },
  { title: "Farmácia", description: "Mais conveniência para produtos elegíveis de saúde.", icon: <HeartPulse /> },
  { title: "Gás e água", description: "Pedidos locais para itens essenciais da casa.", icon: <Flame /> },
  { title: "Bebidas", description: "Distribuidoras próximas de quem deseja comprar.", icon: <PackageOpen /> },
  { title: "Moto-táxi", description: "Mobilidade conectando passageiros e parceiros.", icon: <Bike /> },
];

export function ExecutivePage() {
  const [businesses, setBusinesses] = useState(10);
  return (
    <CampaignShell ctaLabel="Quero ser Executivo">
      <CampaignHero
        eyebrow="Executivo Bora Zé"
        title={<>Ganhe com negócios locais <span className="text-primary">sem ser dono de um.</span></>}
        description="O Bora Zé conecta clientes, comércios, serviços e mobilidade em um único aplicativo. Como Executivo, você participa do desenvolvimento desse ecossistema na sua região."
        cta="Quero conhecer a oportunidade"
        image={executiveHero}
        imageAlt="Empreendedora observando o comércio de uma cidade brasileira com um celular"
        proof={["Plataforma pronta", "Operação flexível", "Sem estoque próprio"]}
      />

      <section className="bg-brand-black py-10 text-brand-white"><PlatformMark /></section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Economia de plataforma" title={<>Você não precisa ser dono dos negócios. <span className="text-muted-foreground">Participa do ecossistema que conecta todos eles.</span></>} description="Restaurantes, mercados, farmácias, distribuidoras e profissionais já movimentam sua cidade. O Bora Zé organiza essa oferta em uma única plataforma digital." />
          <div className="mt-12"><FeatureGrid items={verticals} columns={6} /></div>
        </div>
      </section>

      <section className="bg-brand-black py-20 text-brand-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading light eyebrow="O que muda" title="Uma estrutura digital, sem abrir seis negócios diferentes." />
            <div className="mt-9"><CheckList light items={["Sem restaurante próprio", "Sem mercado próprio", "Sem farmácia própria", "Sem distribuidora própria", "Sem frota própria", "Sem ponto comercial obrigatório"]} /></div>
          </div>
          <img src={interfaceControl} loading="lazy" width={768} height={768} alt="Aplicativo central conectando categorias de comércio, serviços e mobilidade" className="aspect-square w-full rounded-lg object-cover" />
        </div>
      </section>

      <section className="bg-brand-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Seu papel" title="Construa conexões que permanecem na sua carteira." description="O Executivo apresenta a plataforma a negócios elegíveis, apoia a entrada deles no ecossistema e acompanha o desenvolvimento da carteira. Resultados dependem de execução e do desempenho dos estabelecimentos." />
          <div className="mt-12"><ProcessSteps steps={[
            { title: "Conheça a plataforma", description: "Entenda as verticais, o processo comercial e os critérios do programa." },
            { title: "Encontre negócios", description: "Converse com estabelecimentos elegíveis da sua região." },
            { title: "Ajude na ativação", description: "Acompanhe a entrada do comércio no aplicativo Bora Zé." },
            { title: "Desenvolva a carteira", description: "Continue ampliando e apoiando sua rede de parceiros." },
          ]} /></div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Simulador de carteira" title="Visualize a escala da sua rede." description="Ajuste o número de estabelecimentos para visualizar como uma carteira pode crescer. Esta é uma referência de escala, não uma projeção de renda." />
          <div className="rounded-lg border border-border bg-card p-7">
            <label htmlFor="businesses" className="text-sm font-semibold">Estabelecimentos na carteira</label>
            <p className="mt-3 text-6xl font-bold">{businesses}</p>
            <input id="businesses" type="range" min="5" max="100" step="5" value={businesses} onChange={(event) => setBusinesses(Number(event.target.value))} className="mt-7 w-full accent-primary" />
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-brand-surface p-4"><p className="text-xs text-muted-foreground">Relacionamentos ativos</p><p className="mt-1 text-2xl font-bold">{businesses}</p></div>
              <div className="rounded-md bg-brand-black p-4 text-brand-white"><p className="text-xs text-brand-white/50">Verticais possíveis</p><p className="mt-1 text-2xl font-bold text-primary">6</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHeading eyebrow="Dúvidas comuns" title="Antes de conversar com o time." />
          <div className="mt-10"><SimpleFaq items={[
            { q: "O Bora Zé é um aplicativo?", a: "Sim. É uma plataforma que reúne categorias de comércio, serviços, delivery e mobilidade para conectar negócios e consumidores locais." },
            { q: "Preciso abrir uma loja?", a: "Não. O trabalho do Executivo é desenvolver sua carteira de estabelecimentos dentro do modelo do programa." },
            { q: "Existe garantia de renda?", a: "Não. Resultados variam conforme dedicação, execução, regras vigentes e desempenho dos estabelecimentos vinculados." },
          ]} /></div>
        </div>
      </section>
      <LeadForm config={{ type: "executivo", title: "Converse com o time Bora Zé.", description: "Preencha seus dados. A conversa continuará no WhatsApp oficial com sua cidade identificada." }} />
    </CampaignShell>
  );
}

export function AmbassadorPage() {
  return (
    <CampaignShell ctaLabel="Analisar minha cidade">
      <CampaignHero
        eyebrow="Embaixador Bora Zé"
        title={<>Sua cidade já movimenta dinheiro. <span className="text-primary">E se parte desse movimento passasse por uma operação sua?</span></>}
        description="O Bora Zé reúne comércio local, delivery, serviços e mobilidade em um único aplicativo. O Embaixador desenvolve a operação na sua cidade e participa do crescimento desse ecossistema."
        cta="Quero analisar minha cidade"
        image={ambassadorHero}
        imageAlt="Empreendedor local conversando com comerciante em uma cidade brasileira"
        proof={["Negócio digital", "Tecnologia pronta", "Avaliação por cidade"]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="A oportunidade local" title="O dinheiro já circula. A plataforma organiza as conexões." description="Pessoas compram, restaurantes e mercados vendem, farmácias atendem e mototaxistas fazem corridas. O Bora Zé conecta essa atividade local em um só aplicativo." />
          <div className="mt-12"><FeatureGrid items={verticals} columns={6} /></div>
        </div>
      </section>

      <section className="bg-brand-black py-20 text-brand-white md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading light eyebrow="Divisão clara" title={<>Você assume a operação local. <span className="text-primary">O Bora Zé entrega a tecnologia.</span></>} description="Uma oportunidade territorial para quem deseja desenvolver a plataforma na própria cidade, conforme disponibilidade, aprovação e condições comerciais." />
          <div className="mt-12"><FeatureGrid dark columns={4} items={[
            { title: "Aplicativo pronto", description: "Sem precisar desenvolver tecnologia própria.", icon: <Smartphone /> },
            { title: "Múltiplas verticais", description: "Comércio, delivery, serviços e mobilidade na mesma operação.", icon: <Store /> },
            { title: "Treinamento", description: "Orientação para implantação e desenvolvimento local.", icon: <Building2 /> },
            { title: "Suporte", description: "Acompanhamento da equipe dentro das condições do projeto.", icon: <MapPin /> },
          ]} /></div>
        </div>
      </section>

      <section className="bg-brand-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Como funciona" title="Da análise da cidade ao desenvolvimento da operação." />
          <div className="mt-12"><ProcessSteps steps={[
            { title: "Pré-cadastro", description: "Você informa seu perfil, cidade e disponibilidade inicial." },
            { title: "Análise da cidade", description: "A equipe verifica cenário, disponibilidade e aderência do projeto." },
            { title: "Apresentação comercial", description: "Condições, responsabilidades e investimento são apresentados com clareza." },
            { title: "Implantação", description: "Após aprovação e contratação, começa o desenvolvimento da operação local." },
          ]} /></div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Um aplicativo. Vários mercados." title="Mais formas de desenvolver o ecossistema da sua cidade." description="A presença de várias categorias reduz a dependência de uma única vertical e amplia as possibilidades da operação." />
          <div className="mt-12"><FeatureGrid items={verticals} columns={6} /></div>
        </div>
      </section>
      <LeadForm config={{ type: "embaixador", title: "Sua cidade pode ser a próxima operação Bora Zé.", description: "A qualificação é transparente e não representa aprovação automática, reserva territorial ou proposta contratual definitiva." }} />
    </CampaignShell>
  );
}

export function CommercePage() {
  return (
    <CampaignShell ctaLabel="Cadastrar meu negócio">
      <CampaignHero
        eyebrow="Bora Zé para comércio"
        title={<>Coloque seu negócio <span className="text-primary">no app Bora Zé.</span></>}
        description="Receba pedidos de clientes da sua cidade e leve sua loja para o digital com uma operação simples e feita para o comércio local."
        cta="Quero cadastrar meu negócio"
        image={commerceHero}
        imageAlt="Comerciante brasileira usando celular dentro do seu mercado"
        proof={["Presença no aplicativo", "Alcance local", "Gestão de pedidos"]}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Como funciona" title="Um novo canal para sua loja, em quatro passos." />
          <div className="mt-12"><ProcessSteps steps={[
            { title: "Sua loja entra no app", description: "O estabelecimento é cadastrado e configurado na plataforma." },
            { title: "Clientes encontram", description: "Pessoas da sua cidade visualizam seus produtos ou serviços elegíveis." },
            { title: "Você recebe pedidos", description: "Os pedidos chegam para sua operação acompanhar e preparar." },
            { title: "O pedido chega", description: "A entrega segue a modalidade disponível para seu negócio e região." },
          ]} /></div>
        </div>
      </section>
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Seu negócio no Bora Zé" title="Quem pode entrar?" description="A elegibilidade e a disponibilidade das categorias podem variar por cidade." />
          <div className="mt-12"><FeatureGrid columns={4} items={[
            { title: "Restaurantes e lanchonetes", description: "Cardápio e pedidos para clientes locais." },
            { title: "Mercados", description: "Produtos do dia a dia em um canal digital." },
            { title: "Farmácias", description: "Itens elegíveis com conveniência local." },
            { title: "Bebidas, gás e água", description: "Distribuidoras e fornecedores da cidade." },
          ]} /></div>
        </div>
      </section>
      <section className="bg-brand-black py-20 text-brand-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8"><SectionHeading light eyebrow="Benefícios" title="Mais presença no digital, mantendo seu negócio local." /><div className="mt-10"><CheckList light items={["Presença no aplicativo", "Novo canal de venda", "Alcance na cidade", "Gestão de pedidos", "Possibilidade de entrega", "Suporte da plataforma"]} /></div></div>
      </section>
      <LeadForm config={{ type: "comercio", title: "Cadastre seu interesse.", description: "Conte qual é o seu negócio. A equipe continuará o atendimento pelo WhatsApp oficial." }} />
    </CampaignShell>
  );
}

export function MotoTaxiPage() {
  return (
    <CampaignShell ctaLabel="Quero me cadastrar">
      <CampaignHero
        eyebrow="Mototaxista parceiro Bora Zé"
        title={<>Receba solicitações de corrida <span className="text-primary">pelo app Bora Zé.</span></>}
        description="Cadastre-se como mototaxista parceiro e conecte-se a passageiros da sua cidade através do aplicativo Bora Zé."
        cta="Quero me cadastrar"
        image={motoHero}
        imageAlt="Mototaxista brasileiro usando celular ao lado de sua motocicleta"
        proof={["Solicitações pelo celular", "Conexão local", "Cadastro sujeito à análise"]}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="O aplicativo conecta" title="Do pedido do passageiro até a corrida." description="O Bora Zé organiza a solicitação no aplicativo e a disponibiliza aos parceiros conforme funcionamento e disponibilidade na cidade." />
          <div className="mt-12"><ProcessSteps steps={[
            { title: "Passageiro solicita", description: "A pessoa informa pelo aplicativo que precisa de uma corrida." },
            { title: "A solicitação chega", description: "Mototaxistas disponíveis recebem a oportunidade no celular." },
            { title: "Você aceita", description: "O parceiro avalia e aceita a solicitação disponível." },
            { title: "Realiza a corrida", description: "Passageiro e mototaxista se conectam para o deslocamento." },
          ]} /></div>
        </div>
      </section>
      <section className="bg-brand-black py-20 text-brand-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading light eyebrow="Parceria local" title="Tecnologia para encontrar passageiros da sua cidade." description="Sem promessas de quantidade de corridas ou ganhos. A disponibilidade depende da operação ativa e da demanda local." />
          <CheckList light items={["Solicitações no aplicativo", "Cadastro de parceiro", "Conexão com passageiros", "Operação pelo celular"]} />
        </div>
      </section>
      <LeadForm config={{ type: "mototaxi", title: "Comece seu cadastro de parceiro.", description: "Informe seus dados iniciais. A equipe explicará documentos, critérios e disponibilidade na sua cidade pelo WhatsApp." }} />
    </CampaignShell>
  );
}