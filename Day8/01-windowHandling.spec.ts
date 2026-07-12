

import { chromium, test } from "@playwright/test";

test("Learn Window Handling", async ({ page, context }) => { // browser--> context--> page

    //      const browser = await chromium.launch({channel:"chrome"})// browser
    // // // const browser = await webkit.launch()// browser
    // // // const browser = await firefox.launch()// browser
    //  const context = await browser.newContext() //( similar
    //  const page = context.newPage()


    await page.goto("https://www.flipkart.com/");

    const searchBox = page.getByPlaceholder("Search for Products, Brands and More", { exact: true }).first();

    await searchBox.fill("Phone");

    await searchBox.press("Enter");

    //Sequential window handling approach

    // const pagePromise = context.waitForEvent("page") // here the context is the bridge between page one and page two

    // await page.getByText("Kechaoda A27", { exact: true }).first().click(); // CLicking the product from the list of products

    //  const childPage = await pagePromise 

    //I am bringing both the listener and click action in one single line i.e, an array of promises to be resolved

    //Concurrent window handling approach

    const [childPage] = await Promise.all([context.waitForEvent("page"), page.getByText("Kechaoda A27", { exact: true }).first().click()]);

    //We have both the actions being peformed in a single line to avoid race condtion so that the chances of capturing the new page that gets poped up is minimal

    // console.log(clickReturn);

    //Array Destructuring: the process of capturing the return value of a childPage and click action as an array of values to further maniulate

    await childPage.waitForLoadState("domcontentloaded") // here the test will wait until the childPage is getting loaded completely so that we can capture the title and print it in the terminal

    // Here ones the promise is resolved the the childPage variable holds the reference of the childPage that gets opened ones you click the prodcuct

    console.log(await childPage.title());

    console.log(await page.title());

    // await page.bringToFront(); // parent page

    await page.locator('//span[text()="Electronics"]').click();

    //  await childPage.bringToFront();

    await childPage.close();

})



test.only("Leanr to handle multiple tabs", async ({ page, context }) => {


    await page.goto("https://leafground.com/window.xhtml");


    //   await page.locator('//span[text()="Open Multiple"]').click();


    await Promise.all([context.waitForEvent("page"), page.locator('//span[text()="Open Multiple"]').click()])

    await page.waitForTimeout(3000)


    //  const allPages = context.pages() // 3 pages are returned as an array of pages [parentPage,childPage1,childPage2]

    const [page1, page2, page3] = context.pages();


    await page.waitForLoadState("domcontentloaded")

    //Option 1 using index

    // console.log(await allPages[0].title()); // parent page with title Window

    // console.log(await allPages[1].title()); // ChildPage with title WebTable

    // console.log(await allPages[2].title());//Second CHildPage with title Dashboard

    //OPtion2 : Using Array Destructuring

    console.log(await page1.title()); // parent page with title Window

    console.log(await page2.title()); // ChildPage with title WebTable

    console.log(await page3.title());//Second CHildPage with title Dashboard




})





