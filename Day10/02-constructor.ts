
//Scenario1 : Methods with varibales as properties as "Local variable"

// class empDetails {

// //  let username = "democsr" // Inside a function / in global declaration
// //  let password = "crmsfa"

// username = "democsr" // properties // Inside class variablea are properties 
// password = "crmsfa"

//     login() {
//         console.log("The username is",this.username );
//         console.log("The password is",this.password );
//     }

// }


// const emp = new empDetails() // creating an object for the class using new keyword
// // emp.login("democsr","crmsfa")

// emp.login()

//this keyword is an object that exposes all the properties and methods inside a class


//Inside a class we will have properties to handle data and methods handle actions


// //Scenario2 :Special method called "constructor"

// class empDetails2 {

// //  let username = "democsr" // Inside a function / in global declaration
// //  let password = "crmsfa"

// username = "democsr" // properties // Inside class variablea are properties 
// password = "crmsfa"

//     login() { 
//         console.log("The username is",this.username );
//         console.log("The password is",this.password );
//     }


//     constructor(){
//         console.log("This is a default constructor");        
//     }

// }


// const emp2 = new empDetails2() // creating an object for the class using new keyword
// // emp.login("democsr","crmsfa")

// emp2.login(); // here normal method requires object to call the method


/* 
Constructor meaning:

1. The constuctor is a special method that gets invoked / called without any object refernece as well 
2. it will be first method that gets invoked */

// new empDetails2() // here constructor got invoked by creating an object using new keyword



//Scenario3 :Parameterized constructor

class empDetails2 {

    //  let username = "democsr" // Inside a function / in global declaration
    //  let password = "crmsfa"

    // username = "democsr" // properties // Inside class variablea are properties 
    // password = "crmsfa"

    username : string // GLobal declaration so that it can be assigned inside a constructor and used anywhere within the class
    password : string

    login() {
        console.log("The username is", this.username); // use the data inside the method that is assigned inside a consructor
        console.log("The password is", this.password);
    }


    constructor(usr:string,pwd:string) { // constructor method gets invoked first priority so is the value being assigned to the variables
        console.log("This is a default constructor");
        // this.username = "democsr" // properties // Inside class variablea are properties 
        // this.password = "crmsfa"

        this.username = usr // properties // Inside class variablea are properties 
        this.password = pwd
    }

}


const emp2 = new empDetails2("democr2","crmsfa123") // creating an object for the class using new keyword
// emp.login("democsr","crmsfa")

emp2.login(); // here normal method requires object to call the method