

import { test } from "@playwright/test";

test("Learn to handle webelelements within the iframe",async ({page}) => {


    await page.goto("https://leafground.com/frame.xhtml");

    const allframe = page.frames() // frames is an inbuilt method to retreive thw number frames present in the web page


    const frameCount = allframe.length

    console.log(`The number of frames is ${frameCount}`);


    await allframe[0].title()// first main page =>First frame => title of the main page 

    for (let index = 0; index < frameCount; index++) { 
       
        let title = await allframe[index].title()

        console.log(`The title of the iframe are ${title}`);
        
    }

       // 
    

    
})