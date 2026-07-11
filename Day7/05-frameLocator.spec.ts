

//TO interact with a web element within the iframe we willbe using frameLocator() inbuilt playwright method


//We use xpath / css to identify the webelement in a DOM
// Similarly 
// 
// Step1 : we will use CSS to identify the frame inside a page and 
// Step2 : then locate the web wlement inside that frame using the reference of the frame that we got in step1

import { test } from "@playwright/test";


test("Learn to interact with webelements inside iframe", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml");

    const frameRef = page.frameLocator('[src="default.xhtml"]'); // frame that is inside the main page

    await frameRef.locator("#Click").click();

    //  await page.locator("").click() => it will automatically switch to the main page by using page reference in playwright

    await page.waitForTimeout(3000)

    const label = await page.locator('//h5[contains(text(),"Click Me (Inside frame)")]').innerText()

    console.log(label);

})



//test.only will execute only that specific test 

test.only("Learn to interact with nested frames", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml");

    const frame_outerFrame = page.frameLocator('[src="page.xhtml"]');

    const frame_innerFrame = frame_outerFrame.frameLocator('[id="frame2"]');

    await frame_innerFrame.locator('#Click').click();

    console.log(await page.title());

    await page.waitForTimeout(3000)


})


