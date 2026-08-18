import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Zap,
  Play,
  TrendingUp,
  Network,
  Lightbulb,
  Puzzle,
  Rocket,
  Compass,
  ShoppingBag,
  Bike,
  Store,
  Handshake,
  Briefcase,
  X,
  MessageCircle,
  FileText,
  Clock,
  Search,
  Heart,
  Utensils,
  BarChart3,
  Users,
} from "lucide-react";
import logo from "@/assets/boraze-logo.png.asset.json";
import heroEcosystem from "@/assets/hero-ecosystem.jpg";
import interfaceControl from "@/assets/interface-control.jpg";
import platformEconomy from "@/assets/platform-economy.jpg";
import { SiteNav, SiteFooter } from "@/components/site-chrome";


export const Route = createFileRoute("/")({
  head: () => {
    const ogImage =
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/93c9140b-1b0e-44a6-ae5a-233907f35df7/id-preview-cd908636--87ca4064-b558-45df-ae6a-8e063e276ef9.lovable.app-1781757696910.png";
    const canonical = "https://mtztextfature10.lovable.app/";
    return {
      meta: [
        { title: "Executivo BoraZé! — Transforme o comércio local em renda recorrente" },
        {
          name: "description",
          content:
            "Cadastre restaurantes, farmácias e mercados no Bora Zé. Ganhe pela ativação e continue participando das vendas dos estabelecimentos da sua carteira.",
        },
        { property: "og:title", content: "Programa Executivo BoraZé!" },
        {
          property: "og:description",
          content:
            "Transforme o comércio local em uma carteira de renda recorrente. Ganhe R$97 por ativação + até 2,5% das vendas.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { property: "og:site_name", content: "BoraZé! Executivo" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Programa Executivo BoraZé!" },
        {
          name: "twitter:description",
          content:
            "Transforme o comércio local em uma carteira de renda recorrente. Ganhe R$97 por ativação + até 2,5% das vendas.",
        },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: LandingPage,
});

/* ============================================================== */
/* Primitives                                                     */
/* ============================================================== */

function NeonButton({
  children,
  className = "",
  variant = "solid",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 px-6 py-4 font-display tracking-[0.08em] uppercase text-sm transition-all";
  const solid =
    "bg-[var(--neon)] text-black hover:brightness-110 active:scale-[0.98]";
  const outline =
    "border-2 border-[var(--neon)] text-[var(--neon)] hover:bg-[var(--neon)] hover:text-black";
  return (
    <button
      {...rest}
      className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
      style={
        variant === "solid"
          ? { boxShadow: "0 0 28px oklch(0.88 0.31 142 / 0.45)" }
          : undefined
      }
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--neon)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] pulse-neon" />
      {children}
    </span>
  );
}

function Divider() {
  return (
    <div className="mx-auto my-16 flex max-w-6xl items-center gap-4 px-6 md:my-24">
      <div className="h-px flex-1 bg-white/10" />
      <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/30">
        ◆ ◆ ◆
      </span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

/* ============================================================== */
/* Sections                                                       */
/* ============================================================== */

// Nav lives in @/components/site-chrome as <SiteNav />


function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, min: 0, seg: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const targetDate = new Date("2026-09-15T00:00:00-03:00"); // America/Bahia

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setIsVisible(false);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        min: Math.floor((diff / 1000 / 60) % 60),
        seg: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative z-[60] bg-[var(--neon)] py-2 text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 md:flex-row md:gap-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">Oferta de Pré-lançamento</span>
          <span className="hidden h-3 w-px bg-black/20 md:block" />
          <span className="text-[11px] font-medium">R$ 497,00 por tempo limitado</span>
        </div>
        
        <div className="flex gap-4 font-display">
          {[
            { v: timeLeft.days, l: "Dias" },
            { v: timeLeft.hours, l: "Horas" },
            { v: timeLeft.min, l: "Min" },
            { v: timeLeft.seg, l: "Seg" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center min-w-[40px]">
              <span className="text-lg font-bold leading-none">{String(item.v).padStart(2, '0')}</span>
              <span className="text-[8px] uppercase tracking-tighter">{item.l}</span>
            </div>
          ))}
        </div>

        <a 
          href="#cadastro" 
          className="bg-black px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--neon)] transition-transform hover:scale-105"
        >
          Quero entrar no pré-lançamento
        </a>
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <div className="border-b border-white/5 bg-black/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60">
        <span>
          <span className="text-[var(--neon)]">R$ 97</span> por ativação
        </span>
        <span className="hidden h-3 w-px bg-white/15 md:block" />
        <span>
          <span className="text-[var(--neon)]">2,5%</span> sobre vendas (1º ano)
        </span>
        <span className="hidden h-3 w-px bg-white/15 md:block" />
        <span>
          <span className="text-[var(--neon)]">R$ 497</span> adesão pré-lançamento
        </span>
      </div>
    </div>
  );
}

function Hero() {
  const cards = [
    { kpi: "R$ 97", label: "por estabelecimento ativado", icon: Zap },
    { kpi: "2,5%", label: "sobre vendas no primeiro ano", icon: TrendingUp },
    { kpi: "R$ 497", label: "adesão no pré-lançamento", icon: ShieldCheck },
  ];
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div
        className="absolute right-[-10%] top-[10%] -z-10 h-[600px] w-[600px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "var(--violet)" }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <Tag>Programa Executivo BoraZé!</Tag>

        <h1 className="mt-6 font-display uppercase leading-[0.9] tracking-[-0.01em] text-[10vw] md:text-[5.5rem] lg:text-[6.5rem]">
          <span>Transforme o </span>
          <span className="text-neon italic">Comércio Local </span>
          <span>em uma carteira de </span>
          <span className="text-foreground/95">Renda Recorrente.</span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <p className="max-w-xl text-lg text-foreground/75 md:text-xl">
            Cadastre restaurantes, farmácias, mercados e outros negócios no Bora Zé. 
            Ganhe pela <span className="text-foreground">ativação</span> e participe das 
            <span className="text-[var(--neon)]"> vendas dos estabelecimentos</span> da sua carteira.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a href="#cadastro">
              <NeonButton>QUERO SER EXECUTIVO BORA ZÉ</NeonButton>
            </a>
            <a href="#oportunidade">
              <NeonButton variant="outline">VER COMO FUNCIONA</NeonButton>
            </a>
          </div>
        </div>

        {/* Premium highlight cards */}
        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3">
          {cards.map(({ kpi, label, icon: Icon }) => (
            <div
              key={label}
              className="group relative overflow-hidden border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-all hover:border-[var(--neon)]/60 md:p-8"
              style={{ boxShadow: "0 0 40px oklch(0.45 0.27 305 / 0.08)" }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--neon)]/5 blur-2xl transition-opacity group-hover:bg-[var(--neon)]/15" />
              <Icon className="h-6 w-6 text-[var(--neon)]" />
              <div className="mt-6 font-display text-4xl uppercase tracking-tight md:text-5xl">
                <span className="text-neon">{kpi}</span>
              </div>
              <div className="mt-2 font-display text-xs uppercase tracking-[0.18em] text-foreground/70 md:text-sm">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem image */}
        <div className="relative mt-16 overflow-hidden border border-white/10 md:mt-24">
          <img
            src={heroEcosystem}
            alt="Ecossistema BoraZé! conectando mototaxistas, farmácias, restaurantes e mercados de uma cidade brasileira"
            className="h-auto w-full object-cover"
            width={1600}
            height={900}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 md:bottom-8 md:left-8 md:right-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/80 md:text-xs">
              ◆ Ecossistema BoraZé! em operação
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--neon)] md:text-xs">
              Mototaxistas · Farmácias · Restaurantes · Mercados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BigIdea() {
  const items = [
    { label: "Restaurante", icon: Store },
    { label: "Farmácia", icon: Briefcase },
    { label: "Mercado", icon: ShoppingBag },
    { label: "Pet shop", icon: Heart },
    { label: "Gás", icon: Zap },
    { label: "Pizzaria", icon: Utensils },
  ];
  return (
    <section className="relative py-24 md:py-32 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Tag>A Grande Ideia</Tag>
          <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
            VOCÊ NÃO PRECISA SER DONO DO RESTAURANTE <br />
            <span className="text-neon">PARA GANHAR QUANDO ELE VENDE.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <div key={item.label} className="group border border-white/10 bg-black/40 p-6 text-center transition-all hover:border-[var(--neon)]/60">
              <item.icon className="mx-auto h-8 w-8 text-[var(--neon)]" />
              <div className="mt-4 font-display text-xs uppercase tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-3xl space-y-6 text-center text-lg text-foreground/75 md:text-xl">
          <p>Esses estabelecimentos já vendem todos os dias.</p>
          <p>O Executivo Bora Zé não precisa abrir nenhum deles.</p>
          <p className="font-display uppercase text-[var(--neon)] tracking-tight">Seu papel é conectá-los à plataforma.</p>
          <p>Quando um estabelecimento da sua carteira vende pelo Bora Zé, você pode participar dessa movimentação de acordo com as regras do programa.</p>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Tag>Oportunidade</Tag>
        <div className="mt-10 space-y-5 text-xl text-foreground/80 md:text-2xl">
          <p>As grandes redes digitais precisaram de pessoas para construir oferta, demanda e distribuição.</p>
          <p className="text-[var(--neon)] font-medium">O Executivo Bora Zé participa exatamente dessa fase de expansão da plataforma.</p>
        </div>

        <div className="mt-12 border-l-2 border-[var(--neon)] pl-6">
          <p className="text-lg text-foreground/70 md:text-xl">
            A nova economia criou uma nova maneira de participar de mercados sem precisar possuir os ativos que movimentam.
          </p>
        </div>

        <h2 className="mt-20 font-display uppercase leading-[0.9] text-5xl md:text-7xl">
          Construa sua rede
          <br />
          <span className="text-foreground/40">e participe do crescimento</span>
          <br />
          <span className="text-neon">na sua região.</span>
        </h2>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "TORNE-SE EXECUTIVO",
      text: "Entre para o programa, faça seu treinamento e tenha acesso às ferramentas comerciais.",
    },
    {
      n: "02",
      title: "ENCONTRE NEGÓCIOS LOCAIS",
      text: "Apresente o Bora Zé para restaurantes, farmácias, mercados, pet shops, gás e outros estabelecimentos.",
    },
    {
      n: "03",
      title: "ATIVE",
      text: "Quando o estabelecimento cumprir os critérios e realizar seu primeiro pedido válido: Você recebe R$97.",
    },
    {
      n: "04",
      title: "CONSTRUA SUA CARTEIRA",
      text: "Enquanto esses estabelecimentos continuarem realizando vendas elegíveis pelo Bora Zé, você participa delas conforme as regras do programa.",
    },
  ];
  return (
    <section id="como-funciona" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Tag>Passo a passo</Tag>
        <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
          Como funciona o <span className="text-neon">Programa Executivo</span>.
        </h2>
        
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4 border border-white/10">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 transition-colors hover:bg-white/[0.02]">
              <div className="font-display text-4xl text-[var(--neon)]/30">{s.n}</div>
              <h3 className="mt-6 font-display text-xl uppercase tracking-wider">{s.title}</h3>
              <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Opportunity() {
  return (
    <section id="oportunidade" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Tag>O modelo</Tag>
            <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
              Uma rede nacional <span className="text-neon">focada em cidades pequenas e médias</span>.
            </h2>
          </div>
          <div className="space-y-5 text-base text-foreground/75 md:text-lg">
            <p>
              O Bora Zé está criando uma rede nacional de mobilidade urbana focada em
              cidades que os grandes apps ignoram.
            </p>
            <p>
              O Executivo ajuda a construir essa rede, conectando o comércio local a uma 
              tecnologia robusta e eficiente.
            </p>
            <p className="border-l-2 border-[var(--violet)] pl-4 text-foreground">
              Você constrói sua carteira. Nós cuidamos da tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    "Receita recorrente",
    "Negócio digital",
    "Pode ser operado de qualquer lugar",
    "Não precisa de loja física",
    "Não precisa de aluguel",
    "Não precisa de estoque",
    "Não precisa contratar dezenas de funcionários",
    "Não precisa desenvolver aplicativo",
    "Não precisa investir centenas de milhares de reais",
    "Pode crescer enquanto você dorme",
  ];
  return (
    <section id="beneficios" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Tag>Por que tantas pessoas buscam esse modelo</Tag>
        <h2 className="mt-5 max-w-3xl font-display uppercase leading-[0.9] text-4xl md:text-6xl">
          Tudo que um empreendedor procura, <span className="text-neon">em um só lugar</span>.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {items.map((s, i) => (
            <div
              key={s}
              className="flex items-center gap-4 bg-background p-6 transition-colors hover:bg-white/[0.02]"
            >
              <span className="font-mono text-xs text-foreground/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Check className="h-5 w-5 shrink-0 text-[var(--neon)]" />
              <span className="font-display uppercase tracking-[0.04em] text-sm md:text-base">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows: [string, string, string][] = [
    ["Investimento inicial", "R$ 50 mil a R$ 500 mil", "12x R$ 416 (módulo mototáxi)"],
    ["Aluguel de ponto", "R$ 2 mil a R$ 10 mil/mês", "Não precisa (opera de casa)"],
    ["Funcionários", "3 a 15 CLTs", "1 a 2 (opcional)"],
    ["Estoque", "Sim, capital travado", "Não tem, zero risco de perda"],
    ["Tempo até faturar", "3 a 6 meses após abertura", "Primeiras receitas em 30 a 60 dias"],
    ["Risco operacional", "Alto (imóvel, folha, fornecedor)", "Médio (execução comercial)"],
    ["Suporte e treinamento", "Por sua conta", "Incluído (treinamento + suporte contínuo)"],
    ["Escalabilidade", "Limitada ao ponto físico", "Sem teto físico (base digital cresce)"],
    ["Receita", "Depende de fluxo diário", "Recorrente (a cada pedido/corrida)"],
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Tag>Comparativo</Tag>
        <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
          Negócio tradicional vs. <span className="text-neon">BoraZé!</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-foreground/70">
          Duas formas muito diferentes de empreender. Compare lado a lado antes de decidir.
        </p>

        <div className="mt-12 overflow-hidden border border-white/10">
          <div className="grid grid-cols-[1.2fr_1.4fr_1.4fr] bg-white/5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 md:text-[11px]">
            <div className="px-4 py-4 md:px-6">Critério</div>
            <div className="px-4 py-4 md:px-6">Negócio tradicional</div>
            <div className="px-4 py-4 text-[var(--neon)] md:px-6">BoraZé!</div>
          </div>
          {rows.map(([crit, trad, bz], i) => (
            <div
              key={crit}
              className={`grid grid-cols-[1.2fr_1.4fr_1.4fr] border-t border-white/5 ${
                i % 2 === 1 ? "bg-white/[0.02]" : ""
              }`}
            >
              <div className="px-4 py-5 font-display text-xs uppercase tracking-[0.06em] text-foreground/80 md:px-6 md:text-sm">
                {crit}
              </div>
              <div className="flex items-start gap-2 px-4 py-5 text-sm text-foreground/55 md:px-6 md:text-base">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500/80" />
                <span>{trad}</span>
              </div>
              <div className="flex items-start gap-2 bg-[var(--neon)]/[0.04] px-4 py-5 text-sm text-foreground md:px-6 md:text-base">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon)]" />
                <span>{bz}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Profiles() {
  const cards = [
    {
      icon: Rocket,
      title: "Empreendedor local",
      text: "Você já teve negócio próprio ou está buscando um. Sabe que operação local exige presença e relacionamento. Quer construir algo escalável sem investir centenas de milhares de reais em ponto físico.",
    },
    {
      icon: Handshake,
      title: "Comerciante ou lojista",
      text: "Você já tem contato com restaurantes, farmácias, mercados ou mototaxistas da sua cidade. Aproveita essa rede para trazer o app pra sua região com muito mais velocidade que qualquer estranho.",
    },
    {
      icon: Briefcase,
      title: "Em transição de carreira",
      text: "Cansou do CLT, do comissionamento apertado ou de negócio com custo alto e retorno lento. Quer algo digital, com estrutura pronta, receita recorrente e liberdade geográfica.",
    },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Tag>Perfil do Embaixador</Tag>
        <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
          Esse modelo é <span className="text-neon">para você?</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-foreground/70">
          Os Embaixadores BoraZé! não vêm de tecnologia. Vêm de perfis muito específicos que combinam com o modelo.
          Se você se enquadra em algum destes, o próximo passo é conversar com o time.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden border border-white/10 p-8 transition-all hover:border-[var(--neon)]/60"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-[var(--neon)]/40 bg-[var(--neon)]/5">
                <Icon className="h-6 w-6 text-[var(--neon)]" />
              </div>
              <h3 className="mt-6 font-display text-xl uppercase leading-tight tracking-[0.04em]">
                {title}
              </h3>
              <p className="mt-4 text-sm text-foreground/70 md:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function fmtBRL(n: number) {
  return "R$ " + Math.round(n).toLocaleString("pt-BR");
}

function Simulator() {
  const [estab, setEstab] = useState(10);
  const [ticket, setTicket] = useState(10000);
  const [year, setYear] = useState(1); // 1, 2, or 3

  const gmv = estab * ticket;
  const rates = { 1: 0.025, 2: 0.01, 3: 0.005 };
  const recurrence = gmv * rates[year as 1 | 2 | 3];
  const activationBonus = estab * 97;

  return (
    <section id="simulador" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Tag>Simulador</Tag>
        <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
          Simulador da <span className="text-neon">sua carteira</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-foreground/70">
          O objetivo é mostrar quanto uma carteira hipotética poderia gerar. 
          Ajuste os controles e veja o potencial da sua rede.
        </p>

        <div className="mt-12 border-2 border-[var(--neon)]/30 bg-black/50 p-6 md:p-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <SliderRow
                label="Quantidade de estabelecimentos"
                value={estab}
                suffix=""
                min={5}
                max={100}
                step={5}
                onChange={setEstab}
              />
              <SliderRow
                label="Venda média mensal por estabelecimento"
                value={ticket}
                suffix=""
                min={2000}
                max={30000}
                step={1000}
                onChange={setTicket}
                isCurrency
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Selecione o período</div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((y) => (
                  <button
                    key={y}
                    onClick={() => setYear(y)}
                    className={`border-2 py-3 font-display text-xs uppercase transition-all ${
                      year === y ? "border-[var(--neon)] bg-[var(--neon)] text-black" : "border-white/10 text-foreground/60 hover:border-white/20"
                    }`}
                  >
                    {y === 3 ? "3º Ano+" : `${y}º Ano`}
                    <div className="text-[9px] opacity-60">{y === 1 ? "2,5%" : y === 2 ? "1%" : "0,5%"}</div>
                  </button>
                ))}
              </div>

              <div className="mt-4 border border-white/10 bg-white/[0.02] p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Vendas mensais da carteira</div>
                <div className="mt-2 font-display text-2xl text-foreground">{fmtBRL(gmv)}</div>
                <div className="mt-1 text-[10px] text-foreground/40">{estab} estab. × {fmtBRL(ticket)}</div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border-2 border-white/10 bg-black p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Ganho de Ativação</div>
              <div className="mt-3 font-display text-3xl text-foreground">{fmtBRL(activationBonus)}</div>
              <div className="mt-2 text-[10px] text-foreground/40">Pagamento único por ativação (100% elegível)</div>
            </div>
            
            <div className="border-2 border-[var(--neon)] bg-[var(--neon)]/5 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--neon)]">Recorrência mensal estimada</div>
              <div className="mt-3 font-display text-4xl text-neon">{fmtBRL(recurrence)}</div>
              <div className="mt-2 text-[10px] text-neon/60">Baseado no percentual do {year === 3 ? "3º ano em diante" : `${year}º ano`}</div>
            </div>
          </div>

          <p className="mt-8 text-[10px] text-foreground/40 leading-relaxed">
            Simulação meramente ilustrativa. Não representa promessa ou garantia de ganhos. 
            A remuneração depende das vendas efetivamente realizadas pelos estabelecimentos através da plataforma, 
            permanência no programa e cumprimento das regras vigentes.
          </p>
        </div>
      </div>
    </section>
  );
}

function SliderRow({
  label,
  value,
  suffix,
  min,
  max,
  step,
  onChange,
  isCurrency = false,
}: {
  label: string;
  value: number;
  suffix: string;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  isCurrency?: boolean;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
        {label}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-4xl uppercase leading-none text-neon md:text-5xl">
          {isCurrency ? fmtBRL(value) : value}
        </span>
        <span className="text-xs uppercase tracking-[0.12em] text-foreground/60">{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-5 w-full accent-[var(--neon)]"
      />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-foreground/40">
        <span>{isCurrency ? fmtBRL(min) : min}</span>
        <span>{isCurrency ? fmtBRL(max) : max}</span>
      </div>
    </div>
  );
}
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
        {label}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-4xl uppercase leading-none text-neon md:text-5xl">
          {value}
        </span>
        <span className="text-xs uppercase tracking-[0.12em] text-foreground/60">{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-5 w-full accent-[var(--neon)]"
      />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-foreground/40">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

function Market() {
  const items = ["Mototaxistas", "Restaurantes", "Farmácias", "Mercados", "Lojas", "Entregas", "Corridas", "Clientes"];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <Tag>Sua cidade já possui</Tag>
            <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
              O mercado <span className="text-neon">já existe</span>.
            </h2>
            <p className="mt-6 text-lg text-foreground/70">
              Você não precisa criar demanda.<br />
              Precisa apenas <span className="text-foreground">organizar a demanda que já existe</span>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3 md:grid-cols-4">
            {items.map((i) => (
              <div
                key={i}
                className="bg-background px-4 py-8 text-center font-display uppercase tracking-[0.06em] text-sm transition-colors hover:bg-[var(--neon)]/5 hover:text-[var(--neon)]"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  const items = [
    "Direito de operação exclusiva da cidade",
    "Plataforma pronta",
    "Aplicativo funcionando",
    "Treinamento completo",
    "Materiais de divulgação",
    "Suporte de implantação",
    "Participação nas receitas recorrentes",
    "Exclusividade territorial",
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Tag>O que você recebe</Tag>
        <h2 className="mt-5 max-w-3xl font-display uppercase leading-[0.9] text-4xl md:text-6xl">
          Tudo pronto para você <span className="text-neon">operar amanhã</span>.
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <div
              key={s}
              className="group relative overflow-hidden border border-white/10 p-6 transition-all hover:border-[var(--neon)]/60"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(180deg, oklch(0.45 0.27 305 / 0.08), transparent)"
                    : undefined,
              }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
                {String(i + 1).padStart(2, "0")} / 08
              </div>
              <div className="mt-6 font-display uppercase leading-tight text-lg">{s}</div>
              <Zap className="absolute right-4 top-4 h-4 w-4 text-[var(--neon)] opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DualRevenue() {
  const columns = [
    {
      icon: ShoppingBag,
      title: "Delivery",
      subtitle: "Restaurantes, farmácias, mercados, lojas locais",
      items: [
        "Comissão sobre cada pedido processado",
        "Mensalidade dos estabelecimentos parceiros",
        "Taxa de adesão de novos parceiros comerciais",
      ],
    },
    {
      icon: Bike,
      title: "Mototáxi",
      subtitle: "Corridas urbanas e entregas expressas",
      items: [
        "Comissão sobre cada corrida realizada",
        "Comissão sobre entregas expressas (moto delivery)",
        "Taxa de adesão de novos mototaxistas",
      ],
    },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Tag>Duas frentes</Tag>
          <h2 className="mt-5 font-display uppercase leading-[0.9] text-5xl md:text-7xl">
            Duas frentes de receita,<br />
            <span className="text-neon">uma operação.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70 md:text-xl">
            O BoraZé! junta delivery e mototáxi na mesma plataforma. Dois modelos de
            receita rodando em paralelo na sua cidade.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {columns.map(({ icon: Icon, title, subtitle, items }) => (
            <div
              key={title}
              className="group relative overflow-hidden border border-white/10 bg-black/40 p-8 backdrop-blur-xl transition-all hover:border-[var(--neon)]/60 md:p-10"
              style={{ boxShadow: "0 0 60px oklch(0.45 0.27 305 / 0.08)" }}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--neon)]/5 blur-3xl transition-opacity group-hover:bg-[var(--neon)]/15" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center border border-[var(--neon)]/40 bg-[var(--neon)]/10">
                  <Icon className="h-7 w-7 text-[var(--neon)]" />
                </div>
                <h3 className="mt-6 font-display uppercase text-4xl md:text-5xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-foreground/60 md:text-base">{subtitle}</p>
                <ul className="mt-8 space-y-4">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--neon)]" />
                      <span className="text-base text-foreground/85 md:text-lg">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mx-auto mt-12 max-w-4xl border-2 border-[var(--neon)]/60 bg-black/40 px-8 py-8 text-center"
          style={{ boxShadow: "0 0 60px oklch(0.88 0.31 142 / 0.15)" }}
        >
          <p className="font-display uppercase leading-tight text-2xl md:text-4xl">
            Duas fontes de receita rodando na{" "}
            <span className="text-neon">mesma operação</span>, na mesma cidade,
            com o mesmo app.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="investimento" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex justify-center">
          <a href="#cadastro">
            <NeonButton>Quero minha cidade exclusiva</NeonButton>
          </a>
        </div>
      </div>
    </section>
  );
}


function Guarantee() {
  return (
    <section id="garantia" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="relative overflow-hidden border border-[var(--violet)]/40 p-10 md:p-16"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.13 0.08 300), oklch(0.06 0.02 295))",
          }}
        >
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--violet)]/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-[var(--neon)]/10 blur-3xl" />

          <div className="relative grid items-center gap-12 md:grid-cols-[auto_1fr]">
            <div
              className="grid h-36 w-36 place-items-center rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, oklch(0.88 0.31 142), oklch(0.45 0.27 305), oklch(0.88 0.31 142))",
              }}
            >
              <div className="grid h-32 w-32 place-items-center rounded-full bg-background">
                <ShieldCheck className="h-14 w-14 text-[var(--neon)]" />
              </div>
            </div>
            <div>
              <Tag>Garantia Blindada</Tag>
              <h2 className="mt-4 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
                Assumimos o risco<br />
                <span className="text-neon">junto com você.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base text-foreground/75 md:text-lg">
                Se você cumprir o plano de implantação, participar dos treinamentos,
                executar as ações recomendadas e não recuperar o valor investido dentro
                do prazo contratual,{" "}
                <span className="text-[var(--neon)]">
                  recompramos sua licença e devolvemos 100% do valor investido
                </span>
                . Simples assim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Scarcity() {
  const bullets = [
    { icon: Search, text: "Análise personalizada da sua cidade em até 48h" },
    { icon: Check, text: "Sem compromisso — é só uma conversa" },
    { icon: MessageCircle, text: "Atendimento por WhatsApp em horário comercial" },
    { icon: FileText, text: "Você recebe a documentação institucional completa" },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Tag>Próximo passo</Tag>
        <h2 className="mx-auto mt-5 max-w-4xl font-display uppercase leading-[0.88] text-4xl md:text-7xl">
          Análise <span className="text-neon">gratuita</span> do potencial da sua cidade
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-foreground/70">
          Cada cidade tem perfil próprio. Nossa equipe analisa o potencial do seu município —
          número de estabelecimentos possíveis, densidade urbana, demanda estimada — e apresenta o
          cenário realista antes de qualquer decisão sua.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
          {bullets.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-3 border border-white/10 bg-black/40 px-5 py-4"
            >
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--neon)]" />
              <span className="text-sm text-foreground/80 md:text-base">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Future() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-display uppercase leading-[0.9] text-4xl md:text-6xl">
          Daqui a alguns anos sua cidade terá uma{" "}
          <span className="text-neon">plataforma de delivery e mototáxi consolidada.</span>
          <br />
          <span className="text-foreground/80">A pergunta é: quem vai ser dono dela?</span>
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-xl text-foreground/75 md:text-2xl">
          A única pergunta é:
        </p>
        <p className="mx-auto mt-4 max-w-3xl font-display uppercase leading-tight text-3xl md:text-5xl">
          Você estará{" "}
          <span className="text-[var(--neon)]">recebendo os resultados</span>?<br />
          <span className="text-foreground/40">
            Ou assistindo outra pessoa receber?
          </span>
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Preciso ter experiência com tecnologia ou já ter tido um negócio?",
      a: "Não. A BoraZé! entrega toda a estrutura pronta: aplicativo, sistema, treinamento e suporte. Você só precisa de vontade de empreender e disposição para liderar sua cidade.",
    },
    {
      q: "Como funciona a exclusividade territorial?",
      a: "Cada cidade tem apenas um Embaixador oficial BoraZé!, garantido em contrato. Quando uma cidade é ocupada, ela sai da lista para sempre — ninguém mais pode operar a marca ali.",
    },
    {
      q: "Quanto posso faturar por mês?",
      a: "O potencial ultrapassa R$ 10.000/mês em cidades bem trabalhadas, considerando assinaturas de mototaxistas, empresas parceiras e receitas recorrentes da plataforma. O resultado depende da sua execução — mas o modelo é comprovado.",
    },
    {
      q: "Quanto custa para se tornar Embaixador?",
      a: "O investimento começa pelo Módulo Moto Táxi: 12x R$ 416 no cartão. Isso inclui licença territorial exclusiva, aplicativo, treinamento, suporte e a Garantia Blindada.",
    },
    {
      q: "O que é a Garantia Blindada?",
      a: "Se você seguir o plano de implantação e não recuperar o valor investido dentro do prazo contratual, a BoraZé! recompra sua licença e devolve 100% do seu investimento. O risco é nosso.",
    },
    {
      q: "Quanto tempo leva para começar a faturar?",
      a: "Após o treinamento e a captação inicial de mototaxistas e empresas parceiras, a receita recorrente começa a entrar já nos primeiros meses. O ritmo depende do quanto o Embaixador se dedica.",
    },
    {
      q: "Preciso contratar funcionários ou ter estrutura física?",
      a: "Não. O modelo é asset-light, igual Uber e iFood: você não precisa de escritório, frota ou equipe. Toda a operação acontece via aplicativo e sistema BoraZé!.",
    },
    {
      q: "E se minha cidade for pequena? Vale a pena?",
      a: "Sim. Cidades menores costumam ter menos concorrência e relacionamento mais próximo, o que acelera a adesão. O modelo funciona em municípios de todos os portes.",
    },
    {
      q: "Que tipo de suporte a BoraZé! oferece?",
      a: "Você recebe treinamento completo de implantação, materiais de marketing, playbooks de captação, suporte técnico e acompanhamento contínuo do time central para garantir sua operação.",
    },
    {
      q: "Como recebo minha parte da receita?",
      a: "Você participa de 50% da receita recorrente gerada na sua cidade. Os repasses são feitos mensalmente, de forma transparente, com relatórios completos das operações.",
    },
    {
      q: "Posso vender ou transferir minha licença no futuro?",
      a: "Sim. A licença é um ativo seu. Você pode transferir para terceiros mediante aprovação da BoraZé!, seguindo as regras contratuais — assim como uma franquia tradicional.",
    },
    {
      q: "Como faço para garantir minha cidade agora?",
      a: "Basta preencher o formulário de cadastro no final desta página. Nosso time entra em contato para confirmar a disponibilidade da sua cidade e conduzir os próximos passos.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Tag>FAQ</Tag>
        <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
          Perguntas <span className="text-neon">frequentes</span>.
        </h2>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display uppercase tracking-[0.02em] text-base md:text-lg">
                    {it.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[var(--neon)]" : "text-foreground/50"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-6 text-sm text-foreground/70 md:text-base">{it.a}</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#cadastro"
            className="inline-flex items-center justify-center rounded-full bg-[var(--neon)] px-8 py-4 font-display uppercase tracking-[0.05em] text-sm md:text-base text-black transition-transform hover:scale-[1.03] shadow-[0_0_40px_-8px_var(--neon)]"
          >
            Ainda tem dúvidas? Fale com nosso time
          </a>
        </div>
      </div>
    </section>
  );
}

const BR_STATES = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

function QualificationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    capital: "",
    entrepreneur: "",
    timeline: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (k === "phone") {
      const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
      let masked = digits;
      if (digits.length > 0) masked = `(${digits.slice(0, 2)}`;
      if (digits.length >= 3) masked += `) ${digits.slice(2, 3)}`;
      if (digits.length >= 4) masked += ` ${digits.slice(3, 7)}`;
      if (digits.length >= 8) masked += `-${digits.slice(7, 11)}`;
      setForm((f) => ({ ...f, phone: masked }));
      return;
    }
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };

  const inputCls =
    "w-full border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm placeholder:text-foreground/50 focus:border-[var(--neon)] focus:outline-none";


  if (sent) {
    return (
      <div className="border-2 border-[var(--neon)] bg-background p-6 md:p-10" style={{ boxShadow: "0 0 40px oklch(0.88 0.31 142 / 0.2)" }}>
        <div className="py-6 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--neon)]/20">
            <Check className="h-7 w-7 text-[var(--neon)]" />
          </div>
          <h3 className="mt-5 font-display uppercase text-2xl">Entre na comunidade do WhatsApp</h3>
          <p className="mt-3 text-sm text-foreground/70 md:text-base">
            O próximo passo é entrar no grupo oficial: é lá que enviamos as informações do programa e você fala direto com o nosso time.
          </p>
          <a
            href="https://chat.whatsapp.com/LD9HDlBfxZLDLEMcaXzT80"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 border-2 border-[var(--neon)] bg-[var(--neon)] px-7 py-4 font-display uppercase tracking-wide text-black transition hover:bg-transparent hover:text-[var(--neon)]"
            style={{ boxShadow: "0 0 30px oklch(0.88 0.31 142 / 0.35)" }}
          >
            <MessageCircle className="h-5 w-5" />
            Entrar na comunidade
          </a>
        </div>
      </div>
    );
  }


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="border-2 border-[var(--neon)] p-6 md:p-10"
      style={{
        background: "linear-gradient(180deg, oklch(0.26 0.008 285), oklch(0.20 0.008 285))",
        boxShadow: "0 0 80px oklch(0.88 0.31 142 / 0.28), 0 24px 60px oklch(0 0 0 / 0.6)",
      }}
    >

      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--neon)]">
        Qualificação de Embaixador
      </div>
      <h3 className="mt-3 font-display uppercase text-3xl md:text-4xl">
        Quero ser <span className="text-neon">Embaixador</span>
      </h3>

      <div className="mt-6 grid gap-3">
        <input required type="text" value={form.name} onChange={set("name")} placeholder="Nome completo" className={inputCls} />
        <input
          required
          type="tel"
          value={form.phone}
          onChange={set("phone")}
          placeholder="WhatsApp com DDD — (##) # ####-####"
          className={inputCls}
        />
        <input required type="email" value={form.email} onChange={set("email")} placeholder="E-mail" className={inputCls} />
        <div className="grid gap-3 sm:grid-cols-2">
          <select required value={form.state} onChange={set("state")} className={inputCls}>
            <option value="">Estado</option>
            {BR_STATES.map((uf) => (
              <option key={uf} value={uf}>{uf}</option>
            ))}
          </select>
          <input required type="text" value={form.city} onChange={set("city")} placeholder="Cidade de interesse" className={inputCls} />
        </div>
        <select required value={form.capital} onChange={set("capital")} className={inputCls}>
          <option value="">Capital disponível para investir</option>
          <option>Até R$ 5 mil</option>
          <option>Entre R$ 5 mil e R$ 10 mil</option>
          <option>Entre R$ 10 mil e R$ 20 mil</option>
          <option>Acima de R$ 20 mil</option>
        </select>
        <select required value={form.entrepreneur} onChange={set("entrepreneur")} className={inputCls}>
          <option value="">Você já empreende hoje?</option>
          <option>Sim, tenho negócio próprio</option>
          <option>Não, seria minha primeira experiência</option>
          <option>Estou em transição de carreira</option>
        </select>
        <select required value={form.timeline} onChange={set("timeline")} className={inputCls}>
          <option value="">Quando pretende começar?</option>
          <option>Agora, quero começar em 30 dias</option>
          <option>Nos próximos 60 a 90 dias</option>
          <option>Apenas explorando por enquanto</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[var(--neon)] py-4 font-display uppercase tracking-[0.08em] text-sm text-black transition-all hover:brightness-110"
        style={{ boxShadow: "0 0 30px oklch(0.88 0.31 142 / 0.4)" }}
      >
        Quero garantir minha cidade agora
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
        Análise gratuita em até 48h
      </p>
    </form>
  );
}

function FinalCTA() {
  return (
    <section id="cadastro" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <Tag>Última chamada</Tag>
            <h2 className="mt-5 font-display uppercase leading-[0.85] text-5xl md:text-8xl">
              Garanta sua<br />
              <span className="text-neon">cidade agora</span>.
            </h2>
            <p className="mt-8 max-w-md text-lg text-foreground/70">
              Seja o primeiro a assumir o território antes que outra pessoa faça isso por
              você.
            </p>
          </div>
          <QualificationForm />
        </div>
      </div>
    </section>
  );
}

function WhoIsBoraze() {
  const cards = [
    {
      icon: Lightbulb,
      title: "A percepção que originou o projeto",
      text: "Mais de 5.500 cidades brasileiras são ignoradas pelos grandes aplicativos de entrega e mobilidade. Enquanto iFood, Uber e 99 concentram esforços nas capitais e grandes centros, milhões de brasileiros em cidades pequenas e médias ficam sem acesso à tecnologia que já é padrão em outros mercados.",
    },
    {
      icon: Puzzle,
      title: "A solução que construímos",
      text: "Uma plataforma de entregas e mototáxi feita para essas cidades — leve, adaptável e operada por quem conhece o território. Restaurantes, farmácias, mercados e mototaxistas locais ganham uma ferramenta profissional. Consumidores ganham conveniência. E o Embaixador da cidade constrói um negócio recorrente.",
    },
    {
      icon: MapPin,
      title: "Por que licenciamento territorial",
      text: "Em vez de operar diretamente em milhares de cidades, escolhemos crescer via Embaixadores locais. Cada cidade tem uma pessoa da região responsável pela implantação e cuidado da operação. É o mesmo modelo que fez iFood, Uber e centenas de plataformas do mundo escalarem: quem controla a interface controla o mercado.",
    },
    {
      icon: Compass,
      title: "Fase atual do projeto (transparência)",
      text: "O BoraZé! está em fase de expansão nacional. Estamos abrindo licenciamento em cidades por ordem de qualificação. Nos primeiros contatos você conversa diretamente com o time fundador e recebe toda a documentação institucional para análise antes de qualquer decisão.",
    },
  ];
  return (
    <section id="quem-e-boraze" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Tag>Sobre o projeto</Tag>
        <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
          Quem é o <span className="text-neon">BoraZé!</span>
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden border border-white/10 bg-black/40 p-8 backdrop-blur-sm transition-all hover:border-[var(--neon)]/60"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--neon)]/5 blur-3xl transition-opacity group-hover:bg-[var(--neon)]/15" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center border border-[var(--neon)]/40 bg-[var(--neon)]/10">
                  <Icon className="h-5 w-5 text-[var(--neon)]" />
                </div>
                <h3 className="mt-6 font-display uppercase tracking-[0.02em] text-xl md:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-foreground/70 md:text-base">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================================================== */
/* Page                                                           */
/* ============================================================== */

function Authority() {
  const brands = ["UBER", "iFOOD", "99", "AIRBNB", "SPOTIFY"];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Tag>Economia de plataforma</Tag>
        <h2 className="mt-5 max-w-4xl font-display uppercase leading-[0.9] text-4xl md:text-6xl">
          A nova economia criou uma nova maneira de <span className="text-neon">participar de mercados</span>.
        </h2>
        <p className="mt-6 max-w-2xl text-base text-foreground/70 md:text-lg">
          Uber conecta motoristas e passageiros. Airbnb conecta imóveis e hóspedes. iFood conecta estabelecimentos e consumidores.
          O Bora Zé conecta consumidores ao comércio e aos serviços locais. O Executivo ajuda a construir essa rede.
        </p>

        {/* Logos in grayscale */}
        <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3 md:grid-cols-5">
          {brands.map((b, i) => (
            <div
              key={b}
              className="flex h-24 items-center justify-center bg-background font-display text-xl uppercase tracking-[0.15em] text-foreground/40 transition-all hover:text-foreground md:text-2xl"
              style={{
                animation: `fade-in 0.6s ease-out ${i * 0.08}s both`,
              }}
            >
              {b}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center font-display text-xl uppercase leading-snug tracking-tight text-foreground/80 md:text-3xl">
          Cada uma delas <span className="text-neon">domina seu mercado</span> sem possuir os
          ativos que movimentam.
        </p>

        {/* Asset cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { name: "Uber", text: "não possui os carros" },
            { name: "Airbnb", text: "não possui os imóveis" },
            { name: "Spotify", text: "não possui os artistas" },
            { name: "iFood", text: "não possui os restaurantes" },
            { name: "99", text: "não possui os veículos" },
          ].map((c, i) => (
            <div
              key={c.name}
              className="group relative overflow-hidden border border-white/10 bg-black/40 p-6 backdrop-blur-sm transition-all hover:border-[var(--neon)]/60"
              style={{ animation: `fade-in 0.5s ease-out ${0.4 + i * 0.08}s both` }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-4 font-display text-2xl uppercase tracking-tight">
                {c.name}
              </div>
              <div className="mt-2 text-sm text-foreground/65">{c.text}</div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-[var(--neon)]/60 to-transparent" />
            </div>
          ))}
        </div>

        {/* Highlight block */}
        <div
          className="relative mt-14 overflow-hidden border-2 border-[var(--neon)] p-8 md:p-12"
          style={{ boxShadow: "0 0 40px oklch(0.88 0.31 142 / 0.2)" }}
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--neon)]/10 blur-3xl" />
          <p className="relative font-display uppercase leading-[1.05] text-2xl tracking-tight md:text-4xl">
            Quem controla a plataforma <span className="text-neon">controla a conexão</span> entre
            quem oferece e quem procura.
          </p>
        </div>
      </div>
    </section>
  );
}

function InterfaceControl() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Tag>A nova economia</Tag>
            <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
              Quem controla a interface <span className="text-neon">controla o mercado</span>.
            </h2>
            <div className="mt-8 space-y-3">
              {["Mototaxistas", "Farmácias", "Restaurantes", "Mercados", "Clientes"].map((x) => (
                <div key={x} className="flex items-center gap-3 font-display text-sm uppercase tracking-[0.08em] text-foreground/80">
                  <Network className="h-4 w-4 text-[var(--neon)]" />
                  {x}
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden border border-white/10">
            <img
              src={interfaceControl}
              alt="Aplicativo conectando mototaxistas, farmácias, restaurantes, mercados e clientes"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformEconomy() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative overflow-hidden border border-white/10 lg:order-first">
            <img
              src={platformEconomy}
              alt="Economia de plataformas conectando oferta e demanda globalmente"
              loading="lazy"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-background/30 via-transparent to-transparent" />
          </div>
          <div>
            <Tag>Economia de plataforma</Tag>
            <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
              As maiores empresas da nova economia <span className="text-neon">não possuem os ativos</span>.
            </h2>
            <p className="mt-8 max-w-md text-lg text-foreground/75">
              Quem controla a <span className="text-foreground">conexão entre oferta e demanda</span> controla
              o mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Tag>Vídeo · 3 min</Tag>
          <h2 className="mx-auto mt-5 max-w-3xl font-display uppercase leading-[0.9] text-4xl md:text-6xl">
            Assista e entenda <span className="text-neon">como funciona o BoraZé!</span>.
          </h2>
        </div>

        <button
          type="button"
          className="group relative mt-14 block aspect-video w-full overflow-hidden border-2 border-[var(--neon)]/40 transition-all hover:border-[var(--neon)]"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.13 0.08 300), oklch(0.06 0.02 295))",
            boxShadow: "0 0 60px oklch(0.88 0.31 142 / 0.18)",
          }}
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--violet)]/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[var(--neon)]/10 blur-3xl" />

          <div className="relative grid h-full place-items-center">
            <div className="flex flex-col items-center gap-6">
              <div
                className="grid h-24 w-24 place-items-center rounded-full bg-[var(--neon)] transition-transform group-hover:scale-110 md:h-28 md:w-28"
                style={{ boxShadow: "0 0 60px oklch(0.88 0.31 142 / 0.6)" }}
              >
                <Play className="ml-1 h-10 w-10 fill-black text-black md:h-12 md:w-12" />
              </div>
              <span className="font-display text-base uppercase tracking-[0.2em] text-foreground/90 md:text-lg">
                Assista e entenda como funciona o BoraZé!
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
                Em breve
              </span>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CountdownBanner />
      <SiteNav />
      <StatsBar />
      <Hero />
      <Authority />
      <Divider />
      <BigIdea />
      <Story />
      <Opportunity />
      <HowItWorks />
      <Benefits />
      <InterfaceControl />
      <PlatformEconomy />
      <Profiles />
      <Market />
      <WhatYouGet />
      <Simulator />
      <DualRevenue />
      <Comparison />
      <Scarcity />
      <Pricing />
      <Guarantee />
      <WhoIsBoraze />
      <FAQ />
      <Future />
      <VideoSection />
      <FinalCTA />
      <SiteFooter />
    </div>
  );
}

