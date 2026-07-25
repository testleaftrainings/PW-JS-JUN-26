
import { test } from "@playwright/test";
import dotenv from "dotenv"

//We are to configure the script to a prticular environment that can be qa or prod

let filename = process.env.envTerminalInput // this process will help you get the filename from the termina;

dotenv.config({ path: `Data/${filename}.env` }) // here we have set the environment that has to be picked for the execution of the script

console.log(process.env.Username); // To fetch all the local environment data

console.log(process.env.LF_Username); // This is qa environment data


test("Learn to ENV files", async ({ page }) => {

    await page.goto(process.env.BaseUrl as string);

    await page.locator("#username").fill(process.env.LF_Username as string);

    await page.locator("#password").fill(process.env.LF_Password as string);

    await page.waitForTimeout(3000)
    await page.locator(".decorativeSubmit").click();

})


