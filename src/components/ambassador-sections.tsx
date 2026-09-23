import { useState, type ReactNode } from "react";
import {
  BadgeCheck,
  Building2,
  Check,
  CircleDollarSign,
  Clock3,
  Globe2,
  House,
  MapPin,
  PackageOpen,
  Rocket,
  ShieldCheck,
  Smartphone,
  Store,
  Users,
  X,
} from "lucide-react";
import { SectionHeading, SimpleFaq } from "@/components/landing-system";
import { cn } from "@/lib/utils";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});
const number = new Intl.NumberFormat("pt-BR");

export function AmbassadorMetrics() {
  const metrics = [
    { value: "R$ 10.000+", label: "potencial mensal em um cenário de operação desenvolvida" },
    { value: "1 vaga", label: "prevista por município, sujeita à disponibilidade" },
    { value: "100% digital", label: "tecnologia pronta para a operação local" },
  ];
  return (
    <section className="border-y border-brand-white/10 bg-brand-black py-8 text-brand-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-brand-white/10 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8">
        {metrics.map((metric) => (
          <div key={metric.value} className="py-7 md:px-8 md:first:pl-0">
            <p className="text-3xl font-bold text-primary md:text-4xl">{metric.value}</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-brand-white/55">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PlatformEconomyStory() {
  const platforms = [
    ["Uber", "conecta passageiros e motoristas sem possuir os carros"],
    ["Airbnb", "aproxima hóspedes e anfitriões sem possuir os imóveis"],
    ["Spotify", "organiza o acesso à música sem possuir os artistas"],
    ["iFood", "conecta consumidores e restaurantes sem possuir os estabelecimentos"],
  ];
  return (
    <>
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="O modelo da nova economia"
            title="As empresas mais valiosas conectam quem oferece a quem procura."
            description="Uber, Airbnb, Spotify e iFood cresceram coordenando mercados por meio da tecnologia. O valor está na interface que organiza oferta, demanda e experiência."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map(([name, copy], index) => (
              <article key={name} className="rounded-xl border border-border bg-background p-6">
                <span className="text-xs font-bold text-primary">0{index + 1}</span>
                <h3 className="mt-8 text-2xl font-bold">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-xl font-bold leading-8 md:text-3xl">
            Quem controla a conexão ocupa uma posição central no mercado.
          </p>
        </div>
      </section>
      <section className="bg-brand-black py-20 text-brand-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-primary">A oportunidade que passou</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Imagine receber uma ligação em 2010.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-brand-white/65">
            <p>Alguém apresenta um novo aplicativo chamado Uber e convida você para desenvolver a operação na sua cidade. Você teria aceitado?</p>
            <p>E se o nome fosse iFood? Hoje sabemos o tamanho que essas plataformas alcançaram — mas, naquele momento, a decisão exigia visão.</p>
            <p className="font-bold text-brand-white">Aquelas oportunidades passaram. Agora existe uma nova possibilidade exatamente onde você vive.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export function NationalNetwork() {
  const cities = ["Cidades pequenas", "Cidades médias", "Mercados regionais", "Operação próxima"];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-xl bg-brand-black p-8 text-brand-white">
          <Globe2 className="absolute -bottom-16 -right-16 size-96 text-brand-white/5" aria-hidden="true" />
          <p className="text-xs font-bold uppercase text-primary">Rede nacional, presença local</p>
          <div className="relative mt-16 grid grid-cols-2 gap-3">
            {cities.map((city, index) => (
              <div key={city} className="rounded-lg border border-brand-white/10 bg-brand-white/5 p-4">
                <MapPin className={cn("size-5", index === 0 ? "text-primary" : "text-brand-white/35")} />
                <p className="mt-8 text-sm font-semibold">{city}</p>
              </div>
            ))}
          </div>
        </div>
        <SectionHeading
          eyebrow="O modelo"
          title="Uma rede nacional focada em cidades pequenas e médias."
          description="O Bora Zé cresce por meio de operadores que conhecem o território. Você desenvolve a presença local; a plataforma fornece a base tecnológica para conectar consumidores, estabelecimentos e prestadores de serviço."
        />
      </div>
    </section>
  );
}

export function AmbassadorAdvantages() {
  const items = [
    "Receita recorrente ligada ao movimento da plataforma",
    "Operação digital com presença local",
    "Possibilidade de administrar sem ponto comercial",
    "Sem necessidade de estoque próprio",
    "Aplicativos e sistema já desenvolvidos",
    "Crescimento sem o limite físico de uma loja",
  ];
  return (
    <section className="bg-brand-black py-20 text-brand-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading light eyebrow="Por que esse modelo chama atenção" title="O que muitos empreendedores procuram, reunido em uma operação." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-brand-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={item} className="bg-brand-black p-6">
              <span className="text-xs font-bold text-primary">0{index + 1}</span>
              <p className="mt-8 font-semibold leading-7">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AmbassadorProfiles() {
  const profiles = [
    { title: "Empreendedor local", copy: "Conhece a realidade da cidade e quer desenvolver um negócio escalável sem começar por uma estrutura física pesada." },
    { title: "Comerciante ou lojista", copy: "Já se relaciona com restaurantes, farmácias, mercados ou profissionais locais e pode acelerar a implantação." },
    { title: "Em transição de carreira", copy: "Busca uma operação digital, com estrutura pronta, potencial recorrente e participação ativa no crescimento." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Perfil do Embaixador" title="Esse modelo combina com você?" description="Tecnologia não é o principal requisito. Presença, relacionamento, liderança e capacidade de execução local fazem mais diferença." />
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {profiles.map((profile) => (
            <article key={profile.title} className="rounded-xl border border-border p-6">
              <Users className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-8 text-xl font-bold">{profile.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{profile.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExistingMarket() {
  const market = ["Mototaxistas", "Restaurantes", "Farmácias", "Mercados", "Lojas", "Entregas", "Corridas", "Clientes"];
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-xs font-bold uppercase">Sua cidade já possui</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">O mercado já existe. Você não precisa criar a demanda — precisa organizá-la.</h2>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-primary-foreground/20 md:grid-cols-4">
          {market.map((item) => <div key={item} className="bg-primary p-5 font-bold">{item}</div>)}
        </div>
      </div>
    </section>
  );
}

export function AmbassadorBenefits() {
  const benefits = [
    [Smartphone, "Plataforma pronta", "Aplicativo e sistema preparados para a implantação."],
    [Rocket, "Implantação orientada", "Direcionamento para colocar a operação em movimento."],
    [Users, "Treinamento completo", "Preparação comercial e operacional para atuar na cidade."],
    [BadgeCheck, "Marca e materiais", "Comunicação para apresentar o Bora Zé ao mercado local."],
    [CircleDollarSign, "Receitas recorrentes", "Participação nas receitas conforme o modelo contratado."],
    [Building2, "Suporte contínuo", "Acompanhamento conforme as condições da operação."],
  ];
  return (
    <section className="bg-brand-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="O que você recebe" title="Tudo preparado para você implantar e operar." description="Você desenvolve a cidade enquanto o Bora Zé sustenta a base tecnológica e orienta a implantação." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([Icon, title, copy], index) => {
            const BenefitIcon = Icon as typeof Smartphone;
            return <article key={String(title)} className="bg-background p-6"><BenefitIcon className="size-6 text-primary" /><p className="mt-7 text-xs font-bold text-muted-foreground">0{index + 1} / 06</p><h3 className="mt-2 text-lg font-bold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy as string}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}

export function AmbassadorSimulator({ showPremises = true }: { showPremises?: boolean } = {}) {
  const [businesses, setBusinesses] = useState(30);
  const [drivers, setDrivers] = useState(15);
  const deliveryGmv = businesses * 5 * 45 * 30;
  const deliveryCommission = deliveryGmv * 0.07;
  const monthlyRides = drivers * 5 * 30;
  const rideCommission = monthlyRides;
  const total = deliveryCommission + rideCommission;
  return (
    <section className="bg-brand-black py-20 text-brand-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading light eyebrow="Simulador" title="Simule o faturamento na sua cidade." description="Ajuste os controles para visualizar um cenário mensal combinando delivery e mototáxi, com base em uma cidade média de 40 mil habitantes." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8 rounded-xl border border-brand-white/10 bg-brand-white/5 p-6 md:p-8">
            <RangeControl id="ambassador-businesses" label="Estabelecimentos ativos" value={businesses} min={30} max={100} onChange={setBusinesses} suffix="estabelecimentos" />
            <RangeControl id="ambassador-drivers" label="Mototaxistas ativos" value={drivers} min={15} max={50} onChange={setDrivers} suffix="mototaxistas" />
            {showPremises && (
              <div className="rounded-lg border border-brand-white/10 p-4 text-xs leading-5 text-brand-white/45">
                Premissas: 5 pedidos por dia por estabelecimento, ticket médio de R$ 45, comissão de 7% no delivery, 5 corridas por dia por mototaxista e R$ 1 por corrida.
              </div>
            )}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Metric label="GMV Delivery / mês" value={currency.format(deliveryGmv)} />
            <Metric label="Sua comissão Delivery (7%)" value={currency.format(deliveryCommission)} />
            <Metric label="Corridas realizadas / mês" value={`${number.format(monthlyRides)} corridas`} />
            <Metric label="Sua comissão Mototáxi (R$ 1 por corrida)" value={currency.format(rideCommission)} />
            <div className="rounded-lg bg-primary p-6 text-primary-foreground sm:col-span-2">
              <p className="text-sm font-semibold">Faturamento potencial mensal</p>
              <p className="mt-2 text-4xl font-bold md:text-5xl">{currency.format(total)}</p>
            </div>
          </div>
        </div>
        <p className="mt-5 text-xs leading-5 text-brand-white/40">Simulação ilustrativa baseada nas premissas exibidas. Não representa promessa ou garantia de faturamento; resultados variam conforme mercado, adesão, volume, gestão e execução local.</p>
      </div>
    </section>
  );
}

function RangeControl({ id, label, value, min, max, suffix, onChange }: { id: string; label: string; value: number; min: number; max: number; suffix: string; onChange: (value: number) => void }) {
  return <div><div className="flex items-end justify-between gap-4"><label htmlFor={id} className="text-sm font-semibold">{label}</label><p className="text-right text-2xl font-bold text-primary">{value} <span className="text-xs font-normal text-brand-white/45">{suffix}</span></p></div><input id={id} type="range" min={min} max={max} step="5" value={value} onChange={(event) => onChange(Number(event.target.value))} className="mt-5 w-full accent-primary" /><div className="mt-2 flex justify-between text-xs text-brand-white/35"><span>{min}</span><span>{max}</span></div></div>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg border border-brand-white/10 bg-brand-white/5 p-5"><p className="text-xs leading-5 text-brand-white/45">{label}</p><p className="mt-2 text-2xl font-bold">{value}</p></div>;
}

export function RevenueStreams() {
  const streams = [
    { title: "Delivery", icon: <Store />, items: ["Comissão sobre pedidos processados", "Mensalidades de estabelecimentos parceiros", "Adesão de novos parceiros comerciais"] },
    { title: "Mototáxi", icon: <MapPin />, items: ["Comissão sobre corridas realizadas", "Participação em entregas expressas", "Adesão de novos mototaxistas"] },
  ];
  return (
    <section className="py-20 md:py-28"><div className="mx-auto max-w-7xl px-5 md:px-8"><SectionHeading eyebrow="Duas frentes" title="Duas fontes de receita. Uma única operação." description="Delivery e mototáxi funcionam lado a lado na mesma plataforma e ampliam as possibilidades da operação local." /><div className="mt-12 grid gap-4 md:grid-cols-2">{streams.map((stream) => <article key={stream.title} className="rounded-xl border border-border p-7"><div className="text-primary">{stream.icon}</div><h3 className="mt-8 text-3xl font-bold">{stream.title}</h3><ul className="mt-6 space-y-4">{stream.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}</ul></article>)}</div></div></section>
  );
}

export function BusinessComparison() {
  const rows: { label: string; traditional: ReactNode; boraze: ReactNode }[] = [
    { label: "Estrutura", traditional: "Ponto físico e instalações", boraze: "Operação digital, inclusive de casa" },
    { label: "Aluguel", traditional: "Custo fixo mensal", boraze: "Não exige ponto comercial" },
    { label: "Equipe", traditional: "Folha fixa desde o início", boraze: "Estrutura enxuta, conforme a operação" },
    { label: "Estoque", traditional: "Capital imobilizado e risco de perda", boraze: "Sem estoque próprio" },
    { label: "Tecnologia", traditional: "Precisa desenvolver ou contratar", boraze: "Super app pronto" },
    { label: "Mercado", traditional: "Normalmente uma categoria", boraze: "Delivery e mobilidade no mesmo ecossistema" },
    { label: "Suporte", traditional: "Construído por conta própria", boraze: "Treinamento e acompanhamento previstos" },
    { label: "Escala", traditional: "Limitada à estrutura física", boraze: "Base digital pode crescer com a cidade" },
  ];
  return (
    <section className="bg-brand-black py-20 text-brand-white md:py-28"><div className="mx-auto max-w-7xl px-5 md:px-8"><SectionHeading light eyebrow="Comparativo" title="Negócio tradicional ou operação Bora Zé?" description="Duas formas diferentes de empreender. Compare a estrutura necessária antes de decidir." /><div className="mt-12 overflow-x-auto rounded-xl border border-brand-white/10"><div className="min-w-[680px]"><div className="grid grid-cols-[0.65fr_1fr_1fr] bg-brand-white/5 p-4 text-xs font-bold uppercase"><span>Critério</span><span>Negócio tradicional</span><span className="text-primary">Bora Zé</span></div>{rows.map((row) => <div key={row.label} className="grid grid-cols-[0.65fr_1fr_1fr] gap-3 border-t border-brand-white/10 p-4 text-sm leading-5"><strong>{row.label}</strong><span className="flex gap-2 text-brand-white/45"><X className="mt-0.5 size-4 shrink-0" />{row.traditional}</span><span className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{row.boraze}</span></div>)}</div></div></div></section>
  );
}

export function CityAnalysis() {
  const points = ["Avaliação do potencial do município", "Conversa inicial sem compromisso", "Atendimento pelo WhatsApp oficial", "Apresentação das condições e responsabilidades"];
  return <section className="bg-brand-surface py-20 md:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2"><SectionHeading eyebrow="Próximo passo" title="Análise do potencial da sua cidade." description="Cada município tem uma realidade. Antes de qualquer decisão, a equipe avalia disponibilidade, mercado e aderência para apresentar um cenário responsável." /><div className="grid gap-3">{points.map((point) => <div key={point} className="flex items-center gap-4 rounded-xl border border-border bg-background p-5"><Check className="size-5 shrink-0 text-primary" /><span className="text-sm font-semibold">{point}</span></div>)}</div></div></section>;
}

export function DecisionSecurity() {
  return <section className="bg-primary py-16 text-primary-foreground md:py-20"><div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8"><div className="flex max-w-2xl items-start gap-5"><ShieldCheck className="size-12 shrink-0" aria-hidden="true" /><div><p className="text-xs font-bold uppercase">Decisão consciente</p><h2 className="mt-2 text-3xl font-bold md:text-4xl">Entenda todas as condições antes de decidir.</h2><p className="mt-3 text-sm leading-6 opacity-70">Disponibilidade territorial, investimento, responsabilidades, suporte e eventuais garantias são apresentados formalmente. O pré-cadastro não gera reserva nem contratação automática.</p></div></div></div></section>;
}

export function AboutProject() {
  const items = [
    { icon: <Globe2 />, title: "A oportunidade percebida", copy: "Muitas cidades pequenas e médias ainda não recebem a mesma atenção das grandes plataformas nacionais, apesar de possuírem consumo, comércio e mobilidade ativos." },
    { icon: <Smartphone />, title: "A solução construída", copy: "O Bora Zé reúne delivery, comércio e mobilidade em uma plataforma desenhada para aproximar a tecnologia da rotina local." },
    { icon: <House />, title: "Por que uma operação local", copy: "Quem vive na região conhece os bairros, os comerciantes, os prestadores e a dinâmica que uma operação nacional distante não enxerga." },
    { icon: <Clock3 />, title: "Fase atual", copy: "O projeto está em expansão e analisa novas cidades por ordem de qualificação. A documentação e as condições são apresentadas antes da decisão." },
  ];
  return <section className="py-20 md:py-28"><div className="mx-auto max-w-7xl px-5 md:px-8"><SectionHeading eyebrow="Sobre o projeto" title="Tecnologia nacional com desenvolvimento local." /><div className="mt-12 grid gap-3 md:grid-cols-2">{items.map((item) => <article key={item.title} className="rounded-xl border border-border p-6"><div className="text-primary">{item.icon}</div><h3 className="mt-7 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p></article>)}</div></div></section>;
}

export function AmbassadorFaq() {
  return <section className="bg-brand-surface py-20 md:py-28"><div className="mx-auto max-w-4xl px-5 md:px-8"><SectionHeading eyebrow="Dúvidas frequentes" title="O que você precisa saber antes de avançar." /><div className="mt-10"><SimpleFaq items={[
    { q: "Preciso ter experiência com tecnologia ou já ter tido um negócio?", a: "Não. A estrutura tecnológica é fornecida pelo Bora Zé. Perfil empreendedor, conhecimento local, liderança e disposição para executar são mais importantes." },
    { q: "Como funciona a disponibilidade territorial?", a: "Cada cidade passa por análise. A existência de uma vaga e as condições de atuação são confirmadas formalmente pela equipe antes de qualquer contratação." },
    { q: "Quanto posso faturar por mês?", a: "Depende da quantidade e do movimento de estabelecimentos e mototaxistas, além da gestão local. O simulador mostra cenários com premissas visíveis, não uma garantia." },
    { q: "Quanto custa para se tornar Embaixador?", a: "Existe investimento, e a faixa aproximada aparece na etapa final da qualificação. A composição e as condições são detalhadas pela equipe antes de qualquer decisão." },
    { q: "Existe garantia?", a: "Somente valem as garantias descritas expressamente na proposta e no contrato da operação. A equipe apresenta critérios, prazos e obrigações aplicáveis para sua análise." },
    { q: "Quanto tempo leva para começar?", a: "O prazo varia conforme contratação, implantação, cidade e capacidade de execução. A equipe apresenta um cronograma compatível com o cenário analisado." },
    { q: "Preciso contratar funcionários ou ter estrutura física?", a: "A operação é digital e não exige uma loja aberta ao público. A necessidade de apoio ou equipe depende do porte e do estágio da operação local." },
    { q: "E se minha cidade for pequena?", a: "Cidades pequenas e médias estão no foco do projeto, mas cada município é avaliado por disponibilidade, perfil de consumo e aderência ao modelo." },
    { q: "Que suporte o Bora Zé oferece?", a: "A estrutura pode incluir tecnologia, treinamento, materiais de divulgação e acompanhamento, conforme as condições apresentadas para a operação." },
    { q: "Como recebo minha participação nas receitas?", a: "As fontes de receita, percentuais, regras de apuração e repasse são detalhados na proposta comercial e formalizados em contrato." },
    { q: "Posso transferir a operação no futuro?", a: "Qualquer transferência depende das regras contratuais e da aprovação do Bora Zé. Essa condição deve ser confirmada diretamente com a equipe." },
  ]} /></div></div></section>;
}
