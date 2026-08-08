

import { expect, test } from "@playwright/test";

test.describe.serial("Test Annotation",async () => {
    
//   //  test.skip("Test annotation with skip when the test environment is not ready ", async ({ page }) => {
//         test("Test annotation with skip when the test environment is not ready ", async ({ page }) => {

//         await page.goto("https://leaftaps.com/opentaps/control/main")
//         await page.locator("#username").fill("democsr2");
//         await page.locator("#password").fill("crmsfa")

//         await page.waitForTimeout(3000) // demo
//         await page.locator(".decorativeSubmit").click();        
//         await page.locator('//a[contains(text(),"CRM")]').click();
//         console.log("BeforeEach Login happens for each module");       

//     })

//      test.fixme("Test annotation with fixme ", async ({ page }) => {    
//         await page.goto("https://leaftaps.com/opentaps/control/main")
//         await page.locator("#username").fill("democsr2");
//         await page.locator("#password").fill("crmsfa")

//         await page.waitForTimeout(3000) // demo
//         await page.locator(".decorativeSubmit").click();        
//         await page.locator('//a[contains(text(),"CRM")]').click();
//         console.log("BeforeEach Login happens for each module");       

//     })

     test.fail("[TC 1000] Test annotation with fail ", async ({ page }) => {
    
        await page.goto("https://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("democsr2");
        await page.locator("#password").fill("crmsfa")        
        await page.waitForTimeout(3000) // demo

       // await expect(page.locator(".decorativeSubmit")).toBeDisabled() // negative testing
        //actual state of the button is enabled but the expected is disabled

        await page.locator(".decorativeSubmit").click();        
        await page.locator('//a[contains(text(),"CRM")]').click();
        console.log("BeforeEach Login happens for each module");       

    })
    })

    /* 
    Grep cpmmand to run a specific test case :
    
    npx playwright test 03-testAnnotation.spec.ts -g "TC 1000"
    npx playwright test 03-testAnnotation.spec.ts --grep "TC 1000"

    */