const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  const htmlPath = 'file://' + path.resolve(__dirname, 'og-image.html');
  await page.goto(htmlPath);
  await new Promise(r => setTimeout(r, 1000));
  const output = path.resolve(__dirname, '..', 'assets', 'og-image.png');
  await page.screenshot({ path: output });
  await browser.close();
  console.log('Saved og-image to', output);
})();
