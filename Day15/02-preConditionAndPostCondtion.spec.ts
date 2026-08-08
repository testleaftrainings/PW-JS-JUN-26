import { test } from "@playwright/test"
import credentials from "../../Data/login.json"


test.describe.serial("Test to be executed in serially", async () => {

    let records: any

    //beforeAll - Loading the JSON data

    test.beforeAll("Read data from JSON", async () => {

        console.log("beforeAll data connectivity");

        records = credentials
    })

    /* Login Functionality */

    test.beforeEach("BeforeEach Login FUnctionality", async ({ page }) => {
    
        await page.goto("https://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill(records[0].username);
        await page.locator("#password").fill(records[0].password)

        await page.waitForTimeout(3000) // demo
        await page.locator(".decorativeSubmit").click();        
        await page.locator('//a[contains(text(),"CRM")]').click();
        console.log("BeforeEach Login happens for each module");       

    })


    /* Normal Lead test module which we  */
    test("Lead Module-Create Lead",async ({page}) => {
        await page.locator('//a[contains(text(),"Create Lead")]').click();
        console.log("Lead Creation test");
        
    })


     /* Normal Account test module which we  */
    test("Account Module-Create Lead",async ({page}) => {
        await page.locator('//a[contains(text(),"Create Account")]').click();
        console.log("Account Creation test");
        
    })

    test.afterEach("Fetch the test status of each test ",async ({},testInfo) => {        
       console.log( testInfo.status)
       console.log("Executing this block after each test gets executed");    


    })

//Push are share the report of each test together in one test called test.afterAll()
    test.afterAll("Upload all the eports together in to a test mangement",async () => {
        
        console.log("This block is executed when all the invidual execution is completed");
        
    })






})