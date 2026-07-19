

/* Actionables : ==> methods
1. Loading url
2. Enter Credential
3. Click Login */

import { Page } from "@playwright/test";

export class LoginPage{

page : Page // it is a property of the class 

constructor(Lpage:Page){ // here Page is the type of the local variable Lpage

    this.page = Lpage // Gets Initilized first
}

async loadUrl(url:string){
    console.log("This load url method");
    await this.page.goto(url); 
}

async enterCrdentials(usr:string,pwd:string){
    await this.page.locator("#username").fill(usr);
    await this.page.locator("#password").fill(pwd);
}


async clickLogin(){
    await this.page.locator(".decorativeSubmit").click()
    await this.page.waitForTimeout(3000)
}
}

