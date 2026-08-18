import { Link } from "@tanstack/react-router";
import logo from "@/assets/boraze-logo.png.asset.json";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo.url} alt="BoraZé!" className="h-7 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 font-display uppercase tracking-[0.1em] text-xs text-foreground/70 md:flex">
          <Link to="/" hash="oportunidade" className="hover:text-foreground">Oportunidade</Link>
          <Link to="/" hash="como-funciona" className="hover:text-foreground">Como funciona</Link>
          <Link to="/" hash="simulador" className="hover:text-foreground">Simulador</Link>
          <Link to="/" hash="faq" className="hover:text-foreground">FAQ</Link>
        </nav>
        <Link
          to="/"
          hash="oferta"
          className="border-2 border-[var(--neon)] bg-[var(--neon)] px-4 py-2 font-display text-[11px] uppercase tracking-[0.12em] text-black hover:brightness-110"
        >
          QUERO SER EXECUTIVO
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="BoraZé!" className="h-6 w-auto" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
            © {new Date().getFullYear()} BoraZé!
          </span>
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
          <Link to="/termos" className="hover:text-foreground">Termos</Link>
          <Link to="/privacidade" className="hover:text-foreground">Privacidade</Link>
          <Link to="/" hash="oferta" className="hover:text-foreground">Contato</Link>
        </div>
      </div>
    </footer>
  );
}
