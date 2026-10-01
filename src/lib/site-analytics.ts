/**
 * Medição de visitas própria do BoraZé (BZ OS / ULTRON).
 * Envia um beacon por página aberta com origem da campanha (UTMs) e uma sessão anônima.
 * Não usa cookies e não envia dados pessoais. Falhas são ignoradas: nunca afeta o site.
 */
const ENDPOINT = "https://bz-os-production.up.railway.app/collect/pv";
const SITE = "boraze";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const STORAGE_KEY = "bz:attribution";

type Attribution = Partial<Record<(typeof UTM_KEYS)[number], string>> & {
  session: string;
  fbclid?: boolean;
  referrer?: string;
};

function readAttribution(): Attribution {
  let saved: Attribution | null = null;
  try {
    saved = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) ?? "null");
  } catch {
    saved = null;
  }
  const params = new URLSearchParams(window.location.search);
  const fromUrl = Object.fromEntries(
    UTM_KEYS.map((key) => [key, params.get(key)?.slice(0, 120)]).filter((entry) => entry[1]),
  );
  // UTMs da entrada valem para a visita inteira; uma nova campanha na URL substitui as anteriores.
  const next: Attribution = {
    ...(saved ?? {}),
    ...(Object.keys(fromUrl).length ? fromUrl : {}),
    session: saved?.session ?? crypto.randomUUID().replace(/-/g, ""),
    fbclid: saved?.fbclid || params.has("fbclid"),
    referrer: saved?.referrer ?? (document.referrer || undefined),
  };
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // modo privado: segue sem persistir
  }
  return next;
}

export function trackPageView(path: string) {
  try {
    const attribution = readAttribution();
    const body = JSON.stringify({
      site: SITE,
      path,
      ...attribution,
      mobile: window.matchMedia?.("(max-width: 768px)").matches ?? undefined,
    });
    const blob = new Blob([body], { type: "text/plain" });
    if (!navigator.sendBeacon?.(ENDPOINT, blob)) {
      void fetch(ENDPOINT, { method: "POST", body, keepalive: true, mode: "no-cors" }).catch(() => undefined);
    }
  } catch {
    // medição nunca pode quebrar a página
  }
}
