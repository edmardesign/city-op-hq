import { createFileRoute } from "@tanstack/react-router";
import { AmbassadorSimulator } from "@/components/ambassador-sections";
import { landingHead } from "@/components/landing-system";

export const Route = createFileRoute("/simulador")({
  head: () =>
    landingHead({
      title: "Simulador Bora Zé — Embaixador",
      description:
        "Simule um cenário mensal combinando delivery e mototáxi para uma operação Bora Zé.",
      canonicalPath: "/simulador",
    }),
  component: SimulatorPage,
});

function SimulatorPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <AmbassadorSimulator />
    </main>
  );
}
