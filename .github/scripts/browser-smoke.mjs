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
  const page = await browser.newPage();
  for (const url of targets) {
    try {
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      const status = response?.status() ?? 0;
      const title = await page.title();
      console.log(`${name} | ${status} | ${url} | ${title}`);
      if (status < 200 || status >= 400) failed = true;
    } catch (error) {
      failed = true;
      console.error(`${name} FAILED ${url}: ${error instanceof Error ? error.message : error}`);
    }
  }
  await browser.close();
}

process.exit(failed ? 1 : 0);
