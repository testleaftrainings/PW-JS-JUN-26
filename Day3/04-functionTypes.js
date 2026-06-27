

//function types:

//1. Named Fucntion : // Hositing happens

 function add(a,b){ 

// let a = 10; // hard coding
// let b = 20;
let c = a+b
console.log("Addition of a and b",c); // your printing c within the function 
return c // when we use return keyword c=== add()
}

console.log(add(10,20)) // printing the result outside the function



/* return keyword :

means the result c is assigned to the function name add() // c=== add() */
/* 

We dont declare a variable when we have the variable as parameter of a function 
// passing value as an argument at the time of calling a function */


//2, function expression / anonymous function


export let x = function (a,b){ 

let c = a+b
console.log("Addition of a and b",c); // your printing c within the function 
return c // when we use return keyword c=== add()
}

console.log(x(10,20)) 

//3, arrow function 

let y =  (a,b)=>{ 

let c = a+b
console.log("Addition of a and b",c); // your printing c within the function 
return c // when we use return keyword c=== add()
}

console.log(y(10,20)) 


//4, simple one line arrow function

const arrowFun = (a,b)=> a+b 
console.log(arrowFun(10,20));



