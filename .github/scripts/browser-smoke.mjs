import { chromium, firefox, webkit } from "playwright";

const targets = [
  "https://city-op-hq.lovable.app/",
  "https://city-op-hq.lovable.app/comercio",
  "https://city-op-hq.lovable.app/mototaxi",
  "https://city-op-hq.lovable.app/embaixador",
  "https://embaixador.boraze.app.br/",
];
const engines = { chromium, firefox, webkit };
let failed = false;

for (const [name, engine] of Object.entries(engines)) {
  const browser = await engine.launch({ headless: true });
  for (const url of targets) {
    const page = await browser.newPage();
    try {
      const response = await page.goto(url, { waitUntil: "commit", timeout: 30000 });
      await page.waitForLoadState("domcontentloaded", { timeout: 15000 }).catch(() => undefined);
      await page.waitForTimeout(500);
      const status = response?.status() ?? 0;
      const title = await page.title();
      const finalUrl = page.url();
      console.log(`${name} | ${status} | ${url} -> ${finalUrl} | ${title}`);
      if (status < 200 || status >= 400 || !title) failed = true;
    } catch (error) {
      failed = true;
      console.error(`${name} FAILED ${url}: ${error instanceof Error ? error.message : error}`);
    } finally {
      await page.close();
    }
  }
  await browser.close();
}

process.exit(failed ? 1 : 0);
