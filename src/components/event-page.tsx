import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import { SectionHeading, SimpleFaq } from "@/components/landing-system";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const ticketUrl = getWhatsAppUrl(
  "Olá! Quero garantir meu ingresso de R$ 47,00 para o evento Bora Zé sobre Agentes de IA.",
);

const learnItems = [
  {
    icon: <Workflow />,
    title: "Agentes trabalhando em conjunto",
    description:
      "Entenda como dividir uma operação entre agentes especializados para atendimento, organização, vendas e execução de tarefas.",
  },
  {
    icon: <Bot />,
    title: "Do zero, sem precisar programar",
    description:
      "Veja como estruturar agentes de IA com ferramentas acessíveis, fluxos claros e comandos que fazem sentido para o negócio.",
  },
  {
    icon: <MessageCircle />,
    title: "Atendimento e vendas com IA",
    description:
      "Aprenda a usar agentes para responder, qualificar oportunidades, organizar follow-ups e apoiar o atendimento comercial.",
  },
  {
    icon: <Sparkles />,
    title: "Conteúdo e marketing com mais velocidade",
    description:
      "Monte processos para ideias, textos, campanhas e rotinas de conteúdo sem depender de começar tudo do zero.",
  },
  {
    icon: <BrainCircuit />,
    title: "Seu assistente executivo de IA",
    description:
      "Estruture um agente para apoiar agenda, prioridades, informações, tarefas e decisões do dia a dia.",
  },
  {
    icon: <ShieldCheck />,
    title: "Automação com controle humano",
    description:
      "Use IA para ganhar produtividade mantendo revisão, aprovação e controle sobre as ações importantes.",
  },
];

const program = [
  {
    number: "01",
    title: "Fundamentos da operação com agentes",
    text: "O que são agentes de IA, como eles se diferenciam de um chatbot comum e onde podem gerar ganho operacional real.",
  },
  {
    number: "02",
    title: "Construindo o primeiro fluxo",
    text: "Como transformar uma tarefa repetitiva em um processo executável por IA, do comando inicial à entrega.",
  },
  {
    number: "03",
    title: "Vendas, atendimento e prospecção",
    text: "Como desenhar agentes para organizar leads, responder clientes, fazer follow-up e apoiar o processo comercial.",
  },
  {
    number: "04",
    title: "Marketing e conteúdo",
    text: "Como criar uma pequena linha de produção para ideias, copies, roteiros e materiais de comunicação.",
  },
  {
    number: "05",
    title: "Assistente executivo",
    text: "Como estruturar um agente pessoal para organizar demandas, informações, prioridades e rotina de gestão.",
  },
  {
    number: "06",
    title: "Plano de implementação",
    text: "Como sair do evento sabendo o que automatizar primeiro e como evoluir sem transformar tecnologia em complicação.",
  },
];

const faq = [
  {
    q: "Preciso saber programar?",
    a: "Não. O conteúdo foi pensado para empresários, profissionais e empreendedores que querem usar IA na prática sem precisar se tornar desenvolvedores.",
  },
  {
    q: "O evento é para quem está começando?",
    a: "Sim. A programação parte dos fundamentos e avança para aplicações práticas em vendas, atendimento, marketing e organização.",
  },
  {
    q: "Serve para qualquer tipo de negócio?",
    a: "Os princípios apresentados podem ser aplicados a diferentes segmentos. O foco é identificar processos repetitivos e estruturar agentes para apoiar a execução.",
  },
  {
    q: "Vou sair com algo aplicável?",
    a: "A proposta é que você entenda como desenhar seus primeiros fluxos e saia com um plano claro para começar a implementar agentes na sua operação.",
  },
  {
    q: "Quanto custa o ingresso?",
    a: "O ingresso desta edição custa R$ 47,00.",
  },
  {
    q: "Como faço minha inscrição?",
    a: "Clique em qualquer botão de ingresso da página. Você será direcionado ao atendimento oficial Bora Zé para concluir a inscrição.",
  },
];

function TicketButton({ className = "" }: { className?: string }) {
  return (
    <Button asChild size="lg" className={"h-14 rounded-xl px-7 font-bold " + className}>
      <a href={ticketUrl} target="_blank" rel="noreferrer">
        GARANTIR MEU INGRESSO — R$ 47
        <ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}

export function EventPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav hideCta />

      <main>
        <section className="relative isolate overflow-hidden bg-brand-black pb-20 pt-32 text-brand-white md:pb-28 md:pt-40">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary md:text-sm">
              EVENTO BORA ZÉ • INTELIGÊNCIA ARTIFICIAL NA PRÁTICA
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Monte sua primeira operação com{" "}
              <span className="text-primary">Agentes de IA</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-brand-white/70 md:text-xl md:leading-8">
              Aprenda como colocar agentes inteligentes para apoiar vendas, atendimento, marketing
              e tarefas operacionais — mesmo sem saber programar.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <TicketButton className="w-full sm:w-auto" />
              <p className="text-xs text-brand-white/45">
                Ingresso individual • R$ 47,00
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="O que você vai aprender"
              title="Pare de apenas conversar com a IA. Aprenda a colocá-la para executar."
              description="O evento foi desenhado para transformar Inteligência Artificial em processos práticos que apoiam a rotina de quem vende, atende, administra e faz um negócio acontecer."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {learnItems.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="text-primary">{item.icon}</div>
                  <h3 className="mt-7 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              light
              eyebrow="Programação"
              title="Da ideia à primeira operação com agentes."
              description="Uma sequência objetiva para você entender a lógica, enxergar aplicações e definir o que implementar primeiro."
            />
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-brand-white/10 md:grid-cols-2">
              {program.map((item) => (
                <article key={item.number} className="bg-brand-black p-7 md:p-9">
                  <span className="text-xs font-bold text-primary">{item.number}</span>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-white/60">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Para quem é"
              title="Para quem quer produzir mais sem multiplicar a complexidade."
              description="Não é necessário ser técnico. O ponto de partida é entender o seu negócio e reconhecer tarefas que consomem tempo todos os dias."
            />
            <div className="grid gap-3">
              {[
                "Empresários e empreendedores que querem ganhar eficiência operacional.",
                "Profissionais de vendas que querem melhorar qualificação e follow-up.",
                "Gestores sobrecarregados com tarefas repetitivas e processos manuais.",
                "Agências, consultores e freelancers que querem entregar mais com uma estrutura enxuta.",
                "Profissionais de marketing e conteúdo que precisam aumentar velocidade de produção.",
                "Pessoas que querem entender agentes de IA antes que eles se tornem padrão no mercado.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ingresso" className="bg-brand-surface py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-2xl shadow-brand-black/5">
              <div className="bg-brand-black px-6 py-10 text-center text-brand-white md:px-12 md:py-14">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  INGRESSO DO EVENTO
                </p>
                <h2 className="mt-4 text-4xl font-bold md:text-6xl">
                  Comece agora por apenas
                </h2>
                <div className="mt-7 flex items-end justify-center gap-2">
                  <span className="pb-2 text-lg text-brand-white/60">R$</span>
                  <span className="text-7xl font-bold text-primary md:text-8xl">47</span>
                  <span className="pb-3 text-xl text-brand-white/60">,00</span>
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "Conteúdo prático sobre agentes de IA",
                    "Aplicações para vendas e atendimento",
                    "Processos para marketing e conteúdo",
                    "Estrutura de assistente executivo",
                    "Estratégias de automação com controle humano",
                    "Plano para começar a implementar",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <Zap className="size-4 shrink-0 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
                <TicketButton className="mt-9 w-full" />
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Atendimento oficial Bora Zé para conclusão da inscrição.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title="Antes de garantir seu ingresso."
            />
            <div className="mt-10">
              <SimpleFaq items={faq} />
            </div>
          </div>
        </section>

        <section className="bg-brand-black py-20 text-brand-white md:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              SUA OPERAÇÃO PODE COMEÇAR A MUDAR AGORA
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Entenda agentes de IA antes que todo mundo esteja usando.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-white/65">
              Garanta sua participação e descubra como transformar tarefas repetitivas em processos
              mais inteligentes, rápidos e organizados.
            </p>
            <div className="mt-9">
              <TicketButton className="w-full sm:w-auto" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
