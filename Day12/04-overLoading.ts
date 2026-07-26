

class webElementActions{

//Method signature:
click(locator:string):void
click(locator:string,forceClick:boolean):void

//Singlr Implementation:

    click(locator:string,forceClick?:boolean){ // here forceClick parameter is optional s

        if(forceClick){ // true
            console.log("Force click implemented",locator);
            

        }else{
            console.log("Normal click",locator);           

        }

    }

}

const obj = new webElementActions()
 obj.click("#click")
//obj.click("#click",true)

//We require 2 types of click action 
/* 1. Normal click
2. Force CLick */

/* In typescript we will be using different method signatures instead of different method implemantation
 instaed we will have a single implementation using if else condition */