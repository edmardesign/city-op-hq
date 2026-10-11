import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/robots.txt" && (request.method === "GET" || request.method === "HEAD")) {
        const sitemapHost =
          url.hostname === "embaixador.boraze.app.br"
            ? "https://embaixador.boraze.app.br"
            : "https://boraze.app.br";
        return new Response(`User-agent: *\nAllow: /\nDisallow: /leads\n\nSitemap: ${sitemapHost}/sitemap.xml\n`, {
          status: 200,
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      }
      if (url.pathname === "/sitemap.xml" && (request.method === "GET" || request.method === "HEAD")) {
        const urls =
          url.hostname === "embaixador.boraze.app.br"
            ? ["https://embaixador.boraze.app.br/executivo"]
            : [
                "https://boraze.app.br/",
                "https://boraze.app.br/comercio",
                "https://boraze.app.br/mototaxi",
                "https://boraze.app.br/embaixador",
              ];
        const body =
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join("\n") +
          "\n</urlset>\n";
        return new Response(body, {
          status: 200,
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      }
      if (url.pathname === "/healthz") {
        return new Response(JSON.stringify({ ok: true, service: "boraze" }), {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store",
            "x-content-type-options": "nosniff",
          },
        });
      }
      if (url.hostname === "embaixador.boraze.app.br" && url.pathname === "/" && (request.method === "GET" || request.method === "HEAD")) {
        return new Response(null, { status: 302, headers: { location: `/executivo${url.search}` } });
      }
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
