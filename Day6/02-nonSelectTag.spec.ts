

import { test  } from "@playwright/test";

test("Learn to interact with dropdown with non-select ",async ({page}) => {
    

    await page.goto("https://leafground.com/select.xhtml");

    await page.locator('//label[text()="Select Country"]').click();

    await page.locator('//li[text()="India"]').click();

    await page.waitForTimeout(3000) //for demo


})