import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { openLeadDialog } from "@/components/landing-system";

/** Absolute launch instant: start of October 20, 2026 in Brasília time. */
export const LAUNCH_TARGET = new Date("2026-10-20T00:00:00-03:00");

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getRemaining(target: Date, now: number): Remaining | null {
  const diff = target.getTime() - now;
  // Never show negative values: after the date the countdown is replaced.
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

const pad = (value: number) => value.toString().padStart(2, "0");

export function LaunchCountdownSection({ cta }: { cta: string }) {
  // Start empty so server and client markup match, then tick on the client.
  const [remaining, setRemaining] = useState<Remaining | null | undefined>(undefined);

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(LAUNCH_TARGET, Date.now()));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const blocks =
    remaining === undefined || remaining === null
      ? null
      : [
          { label: "Dias", value: pad(remaining.days) },
          { label: "Horas", value: pad(remaining.hours) },
          { label: "Minutos", value: pad(remaining.minutes) },
          { label: "Segundos", value: pad(remaining.seconds) },
        ];

  return (
    <section id="conversao" className="bg-brand-black py-20 text-brand-white md:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <p className="text-xs font-bold uppercase text-primary md:text-sm">
          Lançamento em 20 de outubro
        </p>

        {blocks ? (
          <>
            <div
              className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
              role="timer"
              aria-live="off"
            >
              {blocks.map((block) => (
                <div
                  key={block.label}
                  className="rounded-2xl border border-brand-white/10 bg-brand-white/5 px-3 py-6 sm:py-8"
                >
                  <p className="text-5xl font-bold leading-none tabular-nums text-primary sm:text-6xl lg:text-7xl">
                    {block.value}
                  </p>
                  <p className="mt-3 text-[0.7rem] font-bold uppercase tracking-wide text-brand-white/50 sm:text-xs">
                    {block.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="sr-only">
              Faltam {blocks[0]!.value} dias para o lançamento de 20 de outubro de 2026.
            </p>
          </>
        ) : remaining === null ? (
          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Acompanhe o lançamento na comunidade
          </h2>
        ) : (
          <div className="mt-8 h-[168px] sm:h-[196px]" aria-hidden="true" />
        )}

        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-brand-white/70 md:text-lg">
          Entre na comunidade gratuita para conhecer o programa e receber o aviso de abertura.
        </p>
        <Button
          onClick={openLeadDialog}
          size="lg"
          className="mt-8 h-14 w-full rounded-xl px-8 text-sm font-bold sm:w-auto"
        >
          {cta}
          <ArrowRight aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
