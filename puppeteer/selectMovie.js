const puppeteer  =  require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.click('.components-SearchMovieForm-SearchMovieFilters-SearchMovieFiltersButton-searchMovieFiltersButton-module__button--LqJxd');
  await page.type('.components-SearchMovieForm-Field-searchField-module__input--zxvZ4', 'mad');
  await page.click('.components-SearchMovieForm-SearchButton-searchButton-module__button--2D7So');
  await page.waitFor(5000);
  await page.click('body > div.container > div > div > div.components-MoviesList-moviesList-module__movieList--1Xyi7 > a:nth-child(1)');
  await browser.close();
})();