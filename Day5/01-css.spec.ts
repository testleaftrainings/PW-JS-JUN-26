

//Learn to interact with webelement using CSS (Cascading Style Sheets)


/* 

We have shortform for id and class attribute only:

Username Textbox :  [id="username"] ==> shortform of using id attribute #username
Password Textbox : [id="password"]  ==> shortform of using id attribute #password
Submit Button : [class="decorativeSubmit"] ==> shortform of using id attribute .decorativeSubmit
nth() => to match elements that range between first and last method
*/


import {test} from "@playwright/test"

test("Learn to interact using CSS ", async ({page}) => {
    
//page fixture will take care of opening of the browser and closing of the browser

await page.goto("https://leaftaps.com/opentaps/control/login");


//await page.locator('[id="username"]').fill("democsr");  // Option1

// await page.locator('#username').fill("democsr"); // Option2

//await page.locator('[class="inputLogin"]').nth(0).fill("democsr"); // Option3

await page.locator('[class="inputLogin"]').first().fill("democsr"); // Option4


//await page.locator(`[id="password"]`).fill("crmsfa"); // Option1

//await page.locator(`#password`).fill("crmsfa"); // Option2

// await page.locator(`[class="inputLogin"]`).nth(1).fill("crmsfa");  // Option3

await page.locator(`[class="inputLogin"]`).last().fill("crmsfa");  // Option3


// await page.locator('[class="decorativeSubmit"]').click();

await page.locator('.decorativeSubmit').click(); // Option2

await page.waitForTimeout(3000) // for demo purpose

})


/* 
tags their heirachy in leaftap DOM
------------------------------------

form => grandparent

p => parent

label and input=> grandchild

label and input => siblings 

--------------------------------------------

parent to child => direct relationship : form>p

grandparent to grandchild => not directly connect : form input

--- Siblings----

siblings that are immedialtely present to your present tag =>  label+input 

siblings that are not immediately present tag =>  meta~link, meta~script 

--------------------------------------------



*/