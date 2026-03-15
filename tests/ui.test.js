const puppeteer = require("puppeteer");

describe("Home page test", () => {

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

    await page.goto("http://localhost:3000");

    const title = await page.title();

    expect(title).toBeDefined();

  });

});