import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CircleDollarSign,
  Globe2,
  MapPin,
  Rocket,
  ShieldCheck,
  Smartphone,
  Store,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { openLeadDialog, SectionHeading, SimpleFaq } from "@/components/landing-system";
import { cn } from "@/lib/utils";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function AmbassadorMetrics() {
  const metrics = [
    { value: "R$ 10.000+", label: "potencial mensal de uma operação desenvolvida" },
    { value: "1 vaga", label: "prevista por cidade disponível" },
    { value: "100% digital", label: "tecnologia pronta para operar localmente" },
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

export function DigitalEconomyTimeline() {
  const milestones = [
    {
      year: "2009",
      title: "Uber",
      copy: "Transformou mobilidade em uma operação coordenada por tecnologia.",
    },
    {
      year: "2011",
      title: "iFood",
      copy: "Levou restaurantes e pedidos locais para uma plataforma digital.",
    },
    {
      year: "Agora",
      title: "Bora Zé",
      copy: "Reúne diferentes necessidades da cidade em um único super app local.",
    },
  ];
  return (
    <section className="bg-brand-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="O modelo que mudou mercados"
          title="As empresas mais valiosas não precisam ser donas de tudo."
          description="Elas conectam demanda, parceiros e tecnologia. O Bora Zé leva essa lógica para o consumo cotidiano das cidades pequenas e médias."
        />
        <div className="relative mt-14 grid gap-3 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />
          {milestones.map((item, index) => (
            <article
              key={item.title}
              className="relative rounded-xl border border-border bg-background p-6"
            >
              <span className="relative z-10 grid size-16 place-items-center rounded-full bg-brand-black text-sm font-bold text-primary">
                {item.year}
              </span>
              <p className="mt-8 text-xs font-bold uppercase text-muted-foreground">0{index + 1}</p>
              <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AmbassadorSimulator() {
  const [businesses, setBusinesses] = useState(40);
  const monthlyVolume = businesses * 2500;
  const illustrativeShare = monthlyVolume * 0.1;
  return (
    <section className="bg-brand-black py-20 text-brand-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          light
          eyebrow="Simulador de potencial"
          title="Veja o tamanho de uma operação local."
          description="Ajuste a quantidade de negócios ativos para visualizar um cenário ilustrativo de movimentação mensal da rede."
        />
        <div className="rounded-xl border border-brand-white/10 bg-brand-white/5 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <label htmlFor="ambassador-businesses" className="text-sm font-semibold">
                Negócios ativos
              </label>
              <p className="mt-2 text-5xl font-bold text-primary">{businesses}</p>
            </div>
            <Store className="size-9 text-brand-white/35" aria-hidden="true" />
          </div>
          <input
            id="ambassador-businesses"
            type="range"
            min="10"
            max="100"
            step="5"
            value={businesses}
            onChange={(event) => setBusinesses(Number(event.target.value))}
            className="mt-8 w-full accent-primary"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Metric label="Movimentação estimada da rede" value={currency.format(monthlyVolume)} />
            <Metric
              label="Potencial ilustrativo da operação"
              value={currency.format(illustrativeShare)}
              accent
            />
          </div>
          <p className="mt-5 text-xs leading-5 text-brand-white/40">
            Simulação baseada em premissas ilustrativas. Não representa promessa ou garantia de
            faturamento; resultados dependem da cidade, adesão, volume e execução.
          </p>
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg bg-brand-black p-4">
      <p className="text-xs leading-5 text-brand-white/45">{label}</p>
      <p className={cn("mt-2 text-2xl font-bold", accent && "text-primary")}>{value}</p>
    </div>
  );
}

export function NationalNetwork() {
  const cities = ["Cidades pequenas", "Cidades médias", "Mercados regionais", "Operação próxima"];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-xl bg-brand-black p-8 text-brand-white">
          <Globe2
            className="absolute -bottom-16 -right-16 size-96 text-brand-white/5"
            aria-hidden="true"
          />
          <p className="text-xs font-bold uppercase text-primary">Rede nacional, presença local</p>
          <div className="relative mt-16 grid grid-cols-2 gap-3">
            {cities.map((city, index) => (
              <div
                key={city}
                className="rounded-lg border border-brand-white/10 bg-brand-white/5 p-4"
              >
                <MapPin
                  className={cn("size-5", index === 0 ? "text-primary" : "text-brand-white/35")}
                />
                <p className="mt-8 text-sm font-semibold">{city}</p>
              </div>
            ))}
          </div>
        </div>
        <SectionHeading
          eyebrow="Onde as grandes plataformas não chegam"
          title="Uma rede nacional construída cidade por cidade."
          description="O foco está em mercados locais com demanda real e espaço para uma operação próxima de comerciantes, parceiros e consumidores."
        />
      </div>
    </section>
  );
}

export function AmbassadorBenefits() {
  const benefits = [
    {
      icon: <Smartphone />,
      title: "Super app pronto",
      copy: "Tecnologia para diferentes categorias da rotina local.",
    },
    {
      icon: <Rocket />,
      title: "Implantação orientada",
      copy: "Direcionamento para colocar a operação em movimento.",
    },
    {
      icon: <Users />,
      title: "Treinamento comercial",
      copy: "Preparação para desenvolver parceiros na cidade.",
    },
    {
      icon: <BadgeCheck />,
      title: "Marca e materiais",
      copy: "Estrutura de comunicação para apoiar a atuação local.",
    },
    {
      icon: <CircleDollarSign />,
      title: "Modelo escalável",
      copy: "Crescimento ligado ao desenvolvimento da rede local.",
    },
    {
      icon: <Building2 />,
      title: "Suporte contínuo",
      copy: "Acompanhamento dentro das condições do projeto.",
    },
  ];
  return (
    <section className="bg-brand-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="O que você recebe"
          title="Estrutura para começar sem criar tudo do zero."
          description="Você concentra sua energia na cidade enquanto o Bora Zé sustenta a base tecnológica e operacional do modelo."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="bg-background p-6">
              <div className="text-primary">{item.icon}</div>
              <h3 className="mt-8 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AmbassadorProfiles() {
  const profiles = [
    "Conhece bem sua cidade e suas relações comerciais",
    "Tem perfil de liderança e construção de parcerias",
    "Busca um negócio digital com presença local",
    "Está disposto a executar e desenvolver o mercado",
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Para quem é"
          title="O Embaixador é quem transforma conexão local em operação."
          description="Não basta querer uma plataforma. O perfil ideal combina visão de oportunidade, presença na cidade e disposição para construir uma rede."
        />
        <ul className="grid gap-3">
          {profiles.map((profile) => (
            <li
              key={profile}
              className="flex items-start gap-4 rounded-xl border border-border p-5"
            >
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-primary">
                <Check className="size-4" />
              </span>
              <span className="text-sm font-semibold leading-6">{profile}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function BusinessComparison() {
  const rows: { label: string; traditional: ReactNode; boraze: ReactNode }[] = [
    {
      label: "Estrutura",
      traditional: "Ponto físico e instalações",
      boraze: "Operação digital local",
    },
    {
      label: "Tecnologia",
      traditional: "Precisa desenvolver ou contratar",
      boraze: "Super app pronto",
    },
    { label: "Mercado", traditional: "Uma categoria principal", boraze: "Múltiplas verticais" },
    {
      label: "Expansão",
      traditional: "Mais estrutura e custos fixos",
      boraze: "Desenvolvimento da rede local",
    },
  ];
  return (
    <section className="bg-brand-black py-20 text-brand-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          light
          eyebrow="Compare os modelos"
          title="Empreender não precisa começar com uma estrutura pesada."
          description="O Bora Zé troca complexidade física por tecnologia, relacionamento e execução na cidade."
        />
        <div className="mt-12 overflow-hidden rounded-xl border border-brand-white/10">
          <div className="grid grid-cols-[0.7fr_1fr_1fr] bg-brand-white/5 p-4 text-xs font-bold uppercase">
            <span>Critério</span>
            <span>Negócio tradicional</span>
            <span className="text-primary">Bora Zé</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[0.7fr_1fr_1fr] gap-3 border-t border-brand-white/10 p-4 text-xs leading-5 sm:text-sm"
            >
              <strong>{row.label}</strong>
              <span className="flex gap-2 text-brand-white/45">
                <X className="mt-0.5 size-4 shrink-0" />
                {row.traditional}
              </span>
              <span className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {row.boraze}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DecisionSecurity() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex max-w-2xl items-start gap-5">
          <ShieldCheck className="size-12 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold uppercase">Decisão consciente</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Conheça as condições antes de decidir.
            </h2>
            <p className="mt-3 text-sm leading-6 opacity-70">
              A conversa apresenta disponibilidade, responsabilidades, suporte e condições
              aplicáveis à sua cidade. O pré-cadastro não gera contratação automática.
            </p>
          </div>
        </div>
        <Button
          onClick={openLeadDialog}
          size="lg"
          variant="secondary"
          className="h-14 shrink-0 rounded-xl px-7 font-bold"
        >
          Analisar minha cidade <ArrowRight />
        </Button>
      </div>
    </section>
  );
}

export function AmbassadorFaq() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="O que você precisa saber antes de avançar."
        />
        <div className="mt-10">
          <SimpleFaq
            items={[
              {
                q: "Preciso criar um aplicativo?",
                a: "Não. A tecnologia faz parte da estrutura oferecida pelo Bora Zé para a operação aprovada.",
              },
              {
                q: "Qualquer cidade pode receber uma operação?",
                a: "Não automaticamente. A disponibilidade e a aderência da cidade são analisadas antes da apresentação das condições.",
              },
              {
                q: "Preciso ter experiência com tecnologia?",
                a: "Não é obrigatório. Perfil comercial, conhecimento local, liderança e capacidade de execução são mais importantes.",
              },
              {
                q: "Existe investimento para começar?",
                a: "Sim. A faixa aproximada e as condições são apresentadas na etapa final da qualificação e detalhadas pela equipe antes de qualquer decisão.",
              },
              {
                q: "O faturamento é garantido?",
                a: "Não. Os valores exibidos são cenários ilustrativos. Resultados variam conforme mercado, adesão de parceiros, volume, gestão e execução local.",
              },
              {
                q: "Que suporte o Embaixador recebe?",
                a: "A estrutura pode incluir tecnologia, treinamento, materiais e acompanhamento, conforme as condições apresentadas para a operação.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
