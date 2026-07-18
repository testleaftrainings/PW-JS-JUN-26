

// let username : string = "hello@testleaf.com" // explicit inference

// let username : string | number

// username = "hello@testleaf.com" 
// username = 809890890


//Type aias
//User defined datatypes that can handle 3 dattypes

type productDatatype = number | string | boolean

let productNumber : productDatatype = 687676

let productName : productDatatype = "Phone"

let productAvailability : productDatatype = true


//We can also handle different values:

type supportedBrowser = "chrome"|"firefox"|"msedge"


function invokeBrowser(browserName:supportedBrowser){

if (browserName==="chrome") {
    console.log("Launch the chrome browser");
    
} else {
    console.log("Unknown browser Type");
    
}

}

invokeBrowser("chrome")


/* intersection type alias */

type admin = {
    adminName : string,
    privelges : string[]
}

type employee = {
    empName : string,
    date : string,
    empId :number 

}

type qa = admin & employee


const profileQA : qa = {

adminName:"Testleaf",
privelges:["admin"],
empName : "Ravi",
date : "18/07/26",
empId : 1232



}

console.log(profileQA.adminName);
