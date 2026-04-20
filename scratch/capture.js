const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1584, height: 396 });
  const htmlPath = 'file://' + path.resolve(__dirname, 'banner.html');
  await page.goto(htmlPath);
  await new Promise(r => setTimeout(r, 1000)); // give it a moment to render
  const output = path.resolve(__dirname, '..', 'linkedin_banner.png');
  await page.screenshot({ path: output });
  await browser.close();
  console.log('Saved to', output);
})();
