const puppeteer  =  require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.type('.components-SearchMovieForm-Field-searchField-module__input--zxvZ4', 'drama');
  await page.click('.components-SearchMovieForm-SearchButton-searchButton-module__button--2D7So');
  await browser.close();
})();