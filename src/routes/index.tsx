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
        { title: "GANHE COM FARMÁCIAS E RESTAURANTES SEM PRECISAR SER DONO DE NADA" },
        {
          name: "description",
          content:
            "Participe do mercado de delivery e comércio local construindo uma carteira de estabelecimentos sem os riscos de um negócio físico.",
        },
        { property: "og:title", content: "Ganhe com Negócios Locais sem ser Dono de Nada" },
        {
          property: "og:description",
          content:
            "Participe do mercado de delivery e comércio local construindo uma carteira de estabelecimentos sem os riscos de um negócio físico.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { property: "og:site_name", content: "BoraZé! Executivo" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Fature R$4.500/mês com Delivery e Comércio Local" },
        {
          name: "twitter:description",
          content:
            "Construa uma receita recorrente participando de um mercado que já movimenta milhões de reais todos os meses.",
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



function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div
        className="absolute right-[-10%] top-[10%] -z-10 h-[600px] w-[600px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "var(--violet)" }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <h1 className="mt-6 font-display uppercase leading-[0.9] tracking-[-0.01em] text-[10vw] md:text-[5.5rem] lg:text-[7.5rem] text-center">
          <span>COMO GANHAR COM </span>
          <span className="text-neon italic">NEGÓCIOS LOCAIS </span>
          <span>SEM PRECISAR SER DONO DE NADA</span>
        </h1>

        <div className="mt-10 flex flex-col items-center">
          <p className="max-w-3xl text-center text-lg text-foreground/75 md:text-2xl mb-12">
            Construa uma receita recorrente participando de um mercado que já movimenta milhões de reais todos os meses.
          </p>

          <VSL />

          <div className="mt-12">
            <a href="#oferta">
              <NeonButton className="px-12 py-6 text-lg">QUERO COMEÇAR AGORA</NeonButton>
            </a>
          </div>
        </div>

        {/* Ecosystem image */}
        <div className="relative mt-16 overflow-hidden border border-white/10 md:mt-24">
          <img
            src={heroEcosystem}
            alt="Ecossistema digital conectando o comércio local"
            className="h-auto w-full object-cover"
            width={1600}
            height={900}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function VSL() {
  return (
    <div className="w-full max-w-[400px] mx-auto overflow-hidden border-2 border-[var(--neon)]/40 shadow-[0_0_60px_oklch(0.88_0.31_142_/_0.18)]">
      <div className="aspect-[9/16] relative bg-black flex items-center justify-center group cursor-pointer">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="flex flex-col items-center gap-6 z-10">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-[var(--neon)] transition-transform group-hover:scale-110 shadow-[0_0_40px_oklch(0.88_0.31_142_/_0.6)]">
            <Play className="ml-1 h-10 w-10 fill-black text-black" />
          </div>
          <span className="font-display text-sm uppercase tracking-[0.2em] text-foreground/90">
            ASSISTA O VÍDEO
          </span>
        </div>
      </div>
    </div>
  );
}

function EconomyNarrative() {
  const cases = [
    { name: "UBER", desc: "Cresceu sem precisar possuir os carros." },
    { name: "AIRBNB", desc: "Rede de hospedagem sem construir hotéis." },
    { name: "IFOOD", desc: "Movimenta bilhões sem possuir restaurantes." },
    { name: "AMAZON", desc: "Vende milhões sem fabricar os produtos." },
  ];
  return (
    <section className="relative py-24 md:py-32 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6">
        <Tag>Nova Economia</Tag>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <div key={c.name} className="border border-white/10 p-8 bg-black/40">
              <div className="font-display text-2xl text-[var(--neon)] mb-2">{c.name}</div>
              <p className="text-sm text-foreground/60">{c.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <h3 className="font-display text-3xl md:text-5xl uppercase leading-tight">
            AGORA PENSE NA <span className="text-neon italic">SUA CIDADE.</span>
          </h3>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Almoço", "Medicamento", "Botijão de Gás", "Ração", "Pizza", "Mercado"].map(item => (
              <div key={item} className="text-xs font-mono uppercase tracking-widest text-foreground/40 border border-white/5 py-4">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-16 text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Essas vendas já estão acontecendo todos os dias. A oportunidade não está necessariamente em abrir cada um desses negócios.
          </p>
          <div className="mt-12 py-10 border-y border-white/10">
            <h4 className="font-display text-4xl md:text-6xl text-neon uppercase italic">
              ESTÁ EM PARTICIPAR DA CONEXÃO ENTRE QUEM VENDE E QUEM COMPRA.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioOpportunity() {
  const categories = [
    { title: "FARMÁCIA", desc: "Ganhar com vendas de medicamentos sem precisar abrir uma farmácia.", image: "💊" },
    { title: "GÁS", desc: "Ganhar com botijões vendidos sem precisar ter uma distribuidora de gás.", image: "🔥" },
    { title: "RESTAURANTES", desc: "Ganhar com pedidos de comida sem precisar ter cozinha, garçons ou estoque.", image: "🍔" },
    { title: "PET SHOP", desc: "Ganhar com produtos para pets sem precisar abrir uma loja.", image: "🐾" },
    { title: "MERCADO", desc: "Ganhar com compras de supermercado sem precisar possuir um mercado.", image: "🛒" },
    { title: "PIZZARIA", desc: "Ganhar com pizzas vendidas sem precisar produzir uma única pizza.", image: "🍕" },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <Tag>A Grande Oportunidade</Tag>
          <h2 className="mt-8 font-display uppercase leading-[0.9] text-5vw md:text-7xl lg:text-8xl">
            E SE VOCÊ PUDESSE GANHAR COM TUDO ISSO... <br/>
            <span className="text-neon italic">SEM PRECISAR SER DONO DE NADA DISSO?</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title} className="group relative overflow-hidden border border-white/10 bg-black/40 p-8 transition-all hover:border-[var(--neon)]/60">
              <div className="text-6xl mb-6 opacity-80 group-hover:scale-110 transition-transform">{cat.image}</div>
              <h3 className="font-display text-2xl mb-4 text-neon">{cat.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center space-y-12">
          <div className="inline-block border-2 border-[var(--neon)] p-8 md:p-12 bg-black">
             <h3 className="font-display text-3xl md:text-5xl uppercase text-white mb-6">VOCÊ NÃO PRECISA SER DONO DO NEGÓCIO.</h3>
             <p className="text-neon font-display text-2xl md:text-4xl italic uppercase">PRECISA PARTICIPAR DA REDE QUE MOVIMENTA ESSES NEGÓCIOS.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MechanismRevelation() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--violet)]/5">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Tag>A Revelação</Tag>
        <h2 className="mt-8 font-display text-4xl md:text-6xl uppercase leading-tight mb-12">
          FOI PARA ISSO QUE CRIAMOS UMA NOVA FORMA DE PARTICIPAR DESSE MERCADO.
        </h2>
        
        <div className="mt-16 space-y-8">
           <h3 className="font-display text-7xl md:text-9xl text-neon italic">EXECUTIVO BORA ZÉ</h3>
           <div className="max-w-2xl mx-auto space-y-6 text-xl md:text-2xl text-foreground/80 leading-relaxed">
             <p>
               O Executivo ajuda restaurantes, farmácias, mercados, pet shops, distribuidoras de gás e outros negócios locais a entrarem na plataforma e, com isso, constrói sua própria carteira de estabelecimentos.
             </p>
             <p className="text-neon font-display uppercase tracking-tight">
               Quanto maior e mais produtiva essa carteira se torna, maior pode ser sua participação nos resultados gerados por ela.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
}

function ContrastSection() {
  const contrasts = [
    {
      title: "PARA GANHAR COM UMA FARMÁCIA",
      items: ["Abrir uma farmácia", "Comprar estoque", "Contratar farmacêutico", "Alugar ponto", "Investir centenas de milhares"],
      isNegative: true
    },
    {
      title: "PARA GANHAR COM DISTRIBUIDORA DE GÁS",
      items: ["Comprar botijões", "Ter depósito", "Comprar veículos", "Estrutura logística"],
      isNegative: true
    },
    {
      title: "PARA GANHAR COM RESTAURANTES",
      items: ["Montar cozinha", "Contratar funcionários", "Comprar equipamentos", "Produzir comida"],
      isNegative: true
    }
  ];

  return (
    <section className="relative py-24 md:py-32 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          {contrasts.map((c) => (
            <div key={c.title} className="border border-white/10 p-8 bg-black/20">
              <h4 className="font-display text-lg mb-8 text-white/50">{c.title}</h4>
              <div className="text-[var(--neon)] font-display text-xl mb-6 italic">VOCÊ NÃO PRECISA:</div>
              <ul className="space-y-4">
                {c.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-foreground/60 line-through decoration-red-500/50">
                    <X className="h-4 w-4 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
      title: "CONSTRUA SUA CARTEIRA",
      text: "Conecte estabelecimentos à plataforma e construa sua rede regional.",
    },
    {
      n: "04",
      title: "RECEITA RECORRENTE",
      text: "Participe da movimentação financeira do comércio local através de uma carteira digital.",
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
              Uma rede nacional <span className="text-neon">focada em delivery e comércio local</span>.
            </h2>
          </div>
          <div className="space-y-5 text-base text-foreground/75 md:text-lg">
            <p>
              O Bora Zé está criando uma rede nacional de delivery e comércio local focada em
              cidades de todos os tamanhos.
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
    ["Investimento inicial", "R$ 50 mil a R$ 500 mil", "R$ 497 (Executivo)"],
    ["Aluguel de ponto", "R$ 2 mil a R$ 10 mil/mês", "Não precisa (opera de casa)"],
    ["Funcionários", "3 a 15 CLTs", "1 a 2 (opcional)"],
    ["Estoque", "Sim, capital travado", "Não tem, zero risco de perda"],
    ["Tempo até faturar", "3 a 6 meses após abertura", "Primeiras receitas em 30 a 60 dias"],
    ["Risco operacional", "Alto (imóvel, folha, fornecedor)", "Médio (execução comercial)"],
    ["Suporte e treinamento", "Por sua conta", "Incluído (treinamento + suporte contínuo)"],
    ["Escalabilidade", "Limitada ao ponto físico", "Sem teto físico (base digital cresce)"],
    ["Receita", "Depende de fluxo diário", "Recorrente (participação nas vendas)"],
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





function fmtBRL(n: number) {
  return "R$ " + Math.round(n).toLocaleString("pt-BR");
}

function Simulator() {
  const [estab, setEstab] = useState(10);
  const [ticket, setTicket] = useState(10000);

  // Lógica interna simplificada conforme pedido (sem mostrar percentuais em destaque)
  // R$97 ativação (oculto) + Recorrência 2.5% (oculto)
  const gmv = estab * ticket;
  const recurrence = gmv * 0.025;
  const annual = recurrence * 12;

  return (
    <section id="simulador" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Tag>Simulador</Tag>
        <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl text-center">
          QUANTO UMA CARTEIRA <span className="text-neon">PODE GERAR?</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-foreground/70 text-center mx-auto">
          Ajuste os controles e veja o potencial de ganhos que você pode construir na sua região.
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
                label="Vendas médias dos estabelecimentos"
                value={ticket}
                suffix=""
                min={2000}
                max={30000}
                step={1000}
                onChange={setTicket}
                isCurrency
              />
            </div>

            <div className="flex flex-col justify-center gap-6">
              <div className="border-2 border-[var(--neon)] bg-[var(--neon)]/5 p-8 text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--neon)]">Sua renda mensal estimada</div>
                <div className="mt-3 font-display text-5xl text-neon">{fmtBRL(recurrence)}/MÊS</div>
              </div>
              
              <div className="border-2 border-white/10 bg-black p-8 text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Projeção em 12 meses</div>
                <div className="mt-3 font-display text-4xl text-foreground">{fmtBRL(annual)}</div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-[10px] text-foreground/40 leading-relaxed text-center">
            Simulação ilustrativa. Resultados variam conforme desempenho, volume de vendas e regras do programa. Não representa garantia de renda.
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

function Market() {
  const items = ["Restaurantes", "Farmácias", "Mercados", "Lojas", "Pet Shops", "Distribuidoras", "Comércio Local", "Clientes"];
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

function PortfolioLogic() {
  return (
    <section className="relative py-24 md:py-32 bg-white/[0.01]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Tag>Matemática do negócio</Tag>
            <h2 className="mt-5 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
              SEUS PRIMEIROS 5 ESTABELECIMENTOS <span className="text-neon">JÁ MUDAM A CONTA.</span>
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-foreground/70">Adesão ao programa</span>
                <span className="font-display text-xl text-foreground">R$ 497</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-foreground/70">5 ativações (5 × R$97)</span>
                <span className="font-display text-xl text-[var(--neon)]">R$ 485</span>
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Com apenas 5 estabelecimentos efetivamente ativados, os bônus de ativação representam valor equivalente a aproximadamente 98% da adesão inicial.
              </p>
              <p className="font-display uppercase text-[var(--neon)] text-sm tracking-wide">
                E esses mesmos estabelecimentos ainda passam a compor sua carteira de participação recorrente.
              </p>
            </div>
          </div>

          <div className="border border-[var(--neon)]/30 bg-black/40 p-8 md:p-12">
            <h3 className="font-display uppercase text-2xl mb-8">VOCÊ NÃO PRECISA COMEÇAR TODO MÊS DO ZERO.</h3>
            <div className="space-y-4">
              {[
                { n: "Restaurante do João", v: "R$ 12.400", p: "2,5%" },
                { n: "Farmácia Central", v: "R$ 18.700", p: "2,5%" },
                { n: "Pizzaria Itália", v: "R$ 9.800", p: "2,5%" },
                { n: "Pet Mais", v: "R$ 7.300", p: "2,5%" },
                { n: "Mercado Econômico", v: "R$ 21.500", p: "2,5%" },
              ].map((c) => (
                <div key={c.n} className="flex items-center justify-between border border-white/5 bg-white/[0.02] p-4">
                  <div>
                    <div className="text-xs font-bold text-foreground/90">{c.n}</div>
                    <div className="text-[10px] text-foreground/40">{c.v} vendidos</div>
                  </div>
                  <div className="font-mono text-xs text-[var(--neon)]">{c.p}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-[10px] uppercase tracking-[0.2em] text-foreground/40">
              Sua carteira cresce a cada nova ativação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  const items = [
    "Treinamento online",
    "Acesso ao Programa Executivo Bora Zé",
    "Painel individual",
    "Materiais comerciais",
    "Scripts de prospecção",
    "Apresentações profissionais",
    "Comunidade de Executivos",
    "Suporte",
    "Materiais de implantação",
    "Kit físico (conforme composição)",
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Tag>O que você recebe</Tag>
        <h2 className="mt-5 max-w-3xl font-display uppercase leading-[0.9] text-4xl md:text-6xl">
          TUDO QUE VOCÊ PRECISA PARA <span className="text-neon">COMEÇAR</span>.
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
                {String(i + 1).padStart(2, "0")} / {items.length}
              </div>
              <div className="mt-6 font-display uppercase leading-tight text-sm tracking-wide">{s}</div>
              <Zap className="absolute right-4 top-4 h-4 w-4 text-[var(--neon)] opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Pricing() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, min: 0, seg: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-09-15T00:00:00-03:00"); // America/Bahia
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
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

  return (
    <section id="oferta" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Tag>Oferta de Pré-lançamento</Tag>
        <div className="mt-10 border-2 border-[var(--neon)] bg-black/40 p-10 max-w-3xl mx-auto shadow-[0_0_80px_oklch(0.88_0.31_142_/_0.28)]">
          <h2 className="font-display uppercase text-4xl md:text-6xl mb-8">PROGRAMA EXECUTIVO BORA ZÉ</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-10">
            <div className="space-y-4">
              <h3 className="font-display text-xl uppercase text-neon">O que você recebe:</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon" /> Treinamento completo</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon" /> Estrutura de tecnologia</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon" /> Ferramentas comerciais</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon" /> Suporte e Materiais</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon" /> Acesso à comunidade</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center border-l border-white/10 md:pl-8">
              <div className="text-foreground/40 text-sm line-through">R$ 997,00</div>
              <div className="font-display text-7xl text-neon">R$ 497</div>
              <div className="text-foreground/60 text-xs uppercase tracking-widest mt-2">à vista ou em até 12x</div>
            </div>
          </div>

          <div className="mb-10 py-6 border-y border-white/10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-4">CONDIÇÃO DE PRÉ-LANÇAMENTO DISPONÍVEL ATÉ:</div>
            <div className="flex justify-center gap-6 font-display">
              {[
                { v: timeLeft.days, l: "Dias" },
                { v: timeLeft.hours, l: "Horas" },
                { v: timeLeft.min, l: "Min" },
                { v: timeLeft.seg, l: "Seg" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-neon">{String(item.v).padStart(2, '0')}</span>
                  <span className="text-[10px] uppercase tracking-wider text-foreground/40">{item.l}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="https://pay.checkout-link.com/..." className="block">
            <NeonButton className="w-full py-6 text-xl">QUERO APROVEITAR A OFERTA</NeonButton>
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
              <Tag>Suporte e Estrutura</Tag>
              <h2 className="mt-4 font-display uppercase leading-[0.9] text-4xl md:text-6xl">
                Tudo que você precisa<br />
                <span className="text-neon">para escalar sua carteira.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base text-foreground/75 md:text-lg">
                O Programa Executivo oferece treinamento, painel de controle e suporte 
                técnico para que você foque no que importa: <span className="text-[var(--neon)]">crescer sua rede de estabelecimentos</span>.
              </p>
            </div>
          </div>
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
          Daqui a alguns anos sua região terá centenas de{" "}
          <span className="text-neon">estabelecimentos vendendo no Bora Zé.</span>
          <br />
          <span className="text-foreground/80">A pergunta é: quem vai ser o Executivo deles?</span>
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-xl text-foreground/75 md:text-2xl">
          A única pergunta é:
        </p>
        <p className="mx-auto mt-4 max-w-3xl font-display uppercase leading-tight text-3xl md:text-5xl">
          Você estará{" "}
          <span className="text-[var(--neon)]">recebendo sobre cada venda</span>?<br />
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
      q: "O que faz um Executivo Bora Zé?",
      a: "O Executivo é um parceiro comercial responsável por encontrar e cadastrar estabelecimentos locais (restaurantes, farmácias, mercados, etc.) na plataforma Bora Zé, construindo sua própria carteira de rendimentos.",
    },
    {
      q: "Quanto custa para entrar no programa?",
      a: "A adesão no período de pré-lançamento é de R$ 497,00 (ou parcelado no cartão). Este valor dá acesso a treinamento, ferramentas, comunidade e suporte.",
    },
    {
      q: "Como funcionam os R$ 97 por estabelecimento?",
      a: "Para cada novo estabelecimento qualificado e efetivamente ativado (primeiro pedido válido) que você trouxer para a plataforma, você recebe um bônus de ativação de R$ 97,00.",
    },
    {
      q: "Como funciona a comissão recorrente?",
      a: "Além do bônus de ativação, você participa das vendas elegíveis dos estabelecimentos da sua carteira: 2,5% no 1º ano, 1% no 2º ano e 0,5% do 3º ano em diante.",
    },
    {
      q: "Existe exclusividade territorial?",
      a: "O Executivo constrói sua própria carteira de estabelecimentos e não possui amarras geográficas limitantes, permitindo que você foque em seus próprios relacionamentos comerciais.",
    },
    {
      q: "Como funciona a regra de 6 estabelecimentos a cada 90 dias?",
      a: "Para manter o status de Executivo Ativo e continuar recebendo as comissões da carteira, o parceiro deve realizar pelo menos 6 novas ativações a cada janela de 90 dias.",
    },
    {
      q: "Posso me tornar Embaixador Bora Zé futuramente?",
      a: "Sim. Executivos de alta performance poderão se qualificar para oportunidades como Embaixador Bora Zé, assumindo operações territoriais conforme a disponibilidade e critérios do programa.",
    },
    {
      q: "O que acontece depois do dia 15 de setembro de 2026?",
      a: "O programa será oficialmente lançado. As condições de pré-lançamento (preço de adesão e bônus de ativação) podem ser atualizadas para a oferta oficial de mercado.",
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
            href="#oferta"
            className="inline-flex items-center justify-center bg-[var(--neon)] px-8 py-4 font-display uppercase tracking-[0.05em] text-sm md:text-base text-black transition-transform hover:scale-[1.03] shadow-[0_0_40px_-8px_var(--neon)]"
          >
            Ainda tem dúvidas? Fale com nosso time
          </a>
        </div>
      </div>
    </section>
  );
}




/* ============================================================== */
/* Components                                                     */
/* ============================================================== */




function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-[var(--neon)] selection:text-black">
      <SiteNav />
      <Hero />
      <Divider />
      <EconomyNarrative />
      <PortfolioOpportunity />
      <ContrastSection />
      <MechanismRevelation />
      <HowItWorks />
      <Divider />
      <Benefits />
      <Opportunity />
      <Market />
      <Simulator />
      <PortfolioLogic />
      <Comparison />
      <WhatYouGet />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Future />
      <SiteFooter />
    </div>
  );
}

