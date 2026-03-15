const puppeteer = require("puppeteer");

describe("Home page tests", () => {

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

test("Home page loads", async () => {

  await page.goto("http://localhost:3000/src/home-page/home-page.html");

  const header = await page.$("header h1");

  expect(header).not.toBeNull();

});

test("Sort select exists", async () => {

  await page.goto("http://localhost:3000/src/home-page/home-page.html");

  const select = await page.$("#sort-select");

  expect(select).not.toBeNull();

});

test("Cart button exists", async () => {

  await page.goto("http://localhost:3000/src/home-page/home-page.html");

  const cartButton = await page.$("#cart-button");

  expect(cartButton).not.toBeNull();

});

});