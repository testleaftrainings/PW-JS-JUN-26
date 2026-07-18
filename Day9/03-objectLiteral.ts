
//herall the data are seperately placed with different references:

let fName = "Ravindran";
let empNum = 1234
let email = "ravi@test.com"


//By using object all the data are handled as collection 

// let empInfo = {
//     fName: "Ravindran",
//     empNum: 1234,
//     email: "ravi@test.com"
// }


// //To access the different properties in side the object

// console.log(empInfo.fName); // dot notation 

//This is object literal in typeScript by making it statically typed:

let empInfo :{
fName : string,
empNum : number,
email : string
}={
    fName: "Ravindran",
    empNum: 1234,
    email: "ravi@test.com"
}


//To access the different properties in side the object

console.log(empInfo.fName); // dot notation 






