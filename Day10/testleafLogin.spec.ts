
import {LoginPage  } from "./login";
import { test } from "@playwright/test";

test("Login page functionality check using POM",async ({page}) => {

    const obj = new LoginPage(page) // created an object to invoke th special method called constructor and apss the arguments

    await obj.loadUrl("https://leaftaps.com/opentaps/control/main")
    await obj.enterCrdentials("democsr2","crmsfa");
    await obj.clickLogin();


})


