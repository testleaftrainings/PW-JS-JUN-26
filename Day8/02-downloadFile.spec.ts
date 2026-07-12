/// <reference types="node" />


import { test } from "@playwright/test";
import path from "path"

test("Learn to download and capture the file",async ({page}) => {


    await page.goto("https://leafground.com/file.xhtml");

    const filePromise =  page.waitForEvent("download") 
    
// pending  line no.12=> resolved in line no. 16 as the control moves after the click action

    await page.locator('//span[text()="Download"]').click()

    const fDown = await filePromise;

    // await fDown.saveAs("Data/PWJun26.png") // we are namning the file 

    //Relative path => will work for your system

    // await fDown.saveAs(`Data/${fDown.suggestedFilename()}`) // actual name of the file // the name given by the devlopee of the application

   
   // Absolute path the => It works in all the environments, 

    await fDown.saveAs(path.join(__dirname,"../../Data/AbsolutePath.png"))
    
    await page.waitForTimeout(3000)
    
})

/* 

dirname => current folder
../ => control moves current folder Day8 to move a step up
../ => control moves from PW-JS-JUN-26 to move a step up
/Data => choose Data folder moves a step down 
/AbsolutePath.png => COntrol moves a step down 

 */