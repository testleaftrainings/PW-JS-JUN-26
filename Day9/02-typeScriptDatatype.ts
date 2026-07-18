

// /* Datatypes in TS:

// 1. numbers
// 2. boolean
// 3. string
// 4. undefined
// 5. null

// ----------

// Specific to TS

// 6. any
// 7. unknown
// 8. tuple*/


// //any datatpe :

// // let a :any =123
// // a="123"
// // /* When we use any datatype it will behave like a dynamically typed langauge just like JavaScript  */


// // //unknown dattypes:

// // let b:unknown = "Hello Team" // mildly strict

// // //Here it is not known to typescript what kind of datatype b is holding 

// // if(typeof b==="string"){
// // console.log(b.toUpperCase())
// // }


// /* 

// any datatype  -> let b:any = "Hello Team" // loosely typed
// unknown datatypes -> let b:unknown = "Hello Team" // mildly strict
// string datatypes ->  let b:unknown = "Hello Team" // Strongly strict

// */


// // 
// // any
// // function logData(data:any){


// //     console.log(data.toUpperCase());
    

// // }

// // logData(123)

// // //The above statement with "any" datatype will throw runtime error because there is not checking of datatype



// function logData(data:unknown){ // cautioning the devloper that the valu

// if (typeof data==="string") {
    
//     console.log(data.toUpperCase());
// } else{

//     console.log(data+" it is a different datatype");    
// }
    
// }

// logData(123)

// //The above statement with "any" datatype will throw runtime error because there is not checking of datatype


// //tuple it is array in typeScript

//  let arrayVal = ["Hello",123,true] // this is like in JS
// [string,number,boolean]= 
// let arrayVal : ["Hello",123,true] // this is in TypeScript