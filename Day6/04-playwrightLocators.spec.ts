

import { test } from "@playwright/test";


test("Learn Playwright Locators getByRole()",async ({page}) => {


    await page.goto("https://login.salesforce.com/?locale=in");

  //  await page.locator("").fill("") // xpath or css locators

    await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com") // playwright locators
   
    await page.getByRole("textbox",{name:"Password"}).fill("Ravi@testleaf#123");

    await page.getByRole("button",{name:"Log In"}).click();

    await page.waitForTimeout(3000)
})