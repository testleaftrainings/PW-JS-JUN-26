

import { test } from "@playwright/test"
import credentials from "../../Data/login.json"

//credentials is userdefined variable to hold data from .json filr

test.describe.serial("Test to be executed in serially",async () => {
    
// [{...},{...}] => credentials[0] // will be first set of data in the array
// [{...},{...}] => credentials[1] // will be second set of data in the array

for (let index = 0; index < credentials.length; index++) {  
    
test(`Learn to read JSON file ${credentials[index].Tcaseid}`, async ({ page }) => {
    //    console.log("democsr");

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill(credentials[index].username);

    await page.locator("#password").fill(credentials[index].password)

    await page.waitForTimeout(3000) // demo
    await page.locator(".decorativeSubmit").click()

    //  console.log(credentials.username);


})
    
}

})



//Internally while using for loop :

/* 
//FIRST ITERATION

test("Learn to read JSON file TC001 ", async ({ page }) => {
    //    console.log("democsr");

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill(credentials[0].username);

    await page.locator("#password").fill(credentials[0].password)

    await page.waitForTimeout(3000) // demo
    await page.locator(".decorativeSubmit").click()

    //  console.log(credentials.username);


})

//SECOND ITERATION

test("Learn to read JSON file TC002", async ({ page }) => {
    //    console.log("democsr");

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill(credentials[1].username);

    await page.locator("#password").fill(credentials[1].password)

    await page.waitForTimeout(3000) // demo
    await page.locator(".decorativeSubmit").click()

    //  console.log(credentials.username);


})



*/





/* test.describe.serial("Serial execution",async(){

test1

test2

test3


})

test.describe.serial the execution will be like test1 (first priority)
test2(second)
test3(third)

test.describe by default it is parallel the execution will be like parallel  

test1 ,test2, test3(first priority) 


*/