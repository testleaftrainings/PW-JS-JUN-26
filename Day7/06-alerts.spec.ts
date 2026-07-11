/* Alert Types:

1. Simple => OK button
2. Confirm => OK and Cancel
3. Prompt => OK , Cancel and a Text box*/

import { test } from "@playwright/test";

test("Learn to interact with alerts", async ({ page }) => {

    await page.goto("https://leafground.com/alert.xhtml");

    page.on("dialog",async(allalert)=>{ // here allalert will be passing the alerts that pops up in the web page into the arrow function

        console.log(allalert.type())

        console.log(allalert.message());
        
        if (allalert.type()==="confirm") {
            await allalert.accept()
        }else{
            await allalert.dismiss()
        }

        }) // listerner => like the participants in thesession=> like the webex is on the pariticpants will be listening / activated

    await page.locator('//span[text()="Show"]').first().click(); // I am telling the participants that I am teaching alerts//here alert will be triggered which should be mandatorily be handled
    await page.waitForTimeout(3000); // demo purposse

    await page.locator('.card').filter({ hasText: " Alert (Confirm Dialog)" }).locator('//span[text()="Show"]').click();
    await page.waitForTimeout(3000);  // demo purpose

    await page.locator('.card').filter({ hasText: " Alert (Prompt Dialog)" }).locator('//span[text()="Show"]').click()
    await page.waitForTimeout(3000);  // demo purpose



})

/* Conclusion :

1. page.on => listernner to listen to the alerts that pops up on the page and push those allerts into the function to manipulate further

2.Alert Methods :

=> allalert.type() => type pf the alert that pops up
=> allalert.accept() => intercat with the alert to click OK button
=> allalert.dismiss() => interact with the alert to click Cancel button
=> allalert.messge() => intercat with the alert to retreive the message inside the alert button
*/