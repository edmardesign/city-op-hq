import { createFileRoute } from "@tanstack/react-router";
import { AmbassadorSimulator } from "@/components/ambassador-sections";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/simulador")({
  head: () =>
    landingHead({
      title: "Simulador de Operação de Delivery e Mototáxi | BoraZé!",
      description:
        "Simule cenários ilustrativos de movimentação mensal combinando comércios, pedidos de delivery e corridas de mototáxi.",
      canonicalPath: "/simulador",
    }),
  component: SimulatorPage,
});

function SimulatorPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <h1 className="sr-only">Simulador de faturamento BoraZé! para operação local</h1>
      <AmbassadorSimulator />
    </main>
  );
}
