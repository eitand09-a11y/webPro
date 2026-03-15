const puppeteer = require("puppeteer");

describe("Login page tests", () => {

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

test("Sign in page loads", async () => {

  await page.goto("http://localhost:3000/src/sing-in-up/sign-in-up.html");

  const title = await page.title();

  expect(title).toBe("Modern login page");

});

test("Sign up form exists", async () => {

  await page.goto("http://localhost:3000/src/sing-in-up/sign-in-up.html");

  const input = await page.$('input[name="userEmail"]');

  expect(input).not.toBeNull();

});

});