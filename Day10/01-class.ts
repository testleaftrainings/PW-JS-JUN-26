

// //Login scenario :
// //function1
// function loadurl(url:string){

// console.log("Loading the url",url);

// }

// loadurl("https://leaftaps.com/opentaps/control/main")

// //function2
// function login(un:string,pwd:string){

//     console.log("The username is", un);
//     console.log("The password is", pwd); 


// }

// login("democsr2","crmsfa")

// //function13
// function click(){

//     console.log("Click login");

// }

// click()

/* When the all these functions belong to one user  */


// const user1 = {

// // 
// // This is one method using key value pair
// //  loadurl : function loadurl(url:string){

// // console.log("Loading the url",url);

// // },

// // This is second method using by removing function keyword
//  loadurl(url:string){

// console.log("Loading the url",url);

// },

//  login(un:string,pwd:string){

//     console.log("The username is", un);
//     console.log("The password is", pwd); 

// },

//  click(){

//     console.log("Click login");

// }
// }


// user1.loadurl("https://leaftaps.com/opentaps/control/main");

// user1.login("democsr2","crmsfa");

// user1.click()


// ///Now if you have n number of objects (users) use1,use2,usr3....

// //user2 object

// const user2 = {

// // 
// // This is one method using key value pair
// //  loadurl : function loadurl(url:string){

// // console.log("Loading the url",url);

// // },

// // This is second method using by removing function keyword
//  loadurl(url:string){

// console.log("Loading the url",url);

// },

//  login(un:string,pwd:string){

//     console.log("The username is", un);
//     console.log("The password is", pwd); 

// },

//  click(){

//     console.log("Click login");

// }
// }


// user2.loadurl("https://leaftaps.com/opentaps/control/main");

// user2.login("demosalesmanager","crmsfa");

// user2.click()


// //user2 object

// const user3 = {

// // 
// // This is one method using key value pair
// //  loadurl : function loadurl(url:string){

// // console.log("Loading the url",url);

// // },

// // This is second method using by removing function keyword
//  loadurl(url:string){

// console.log("Loading the url",url);

// },

//  login(un:string,pwd:string){

//     console.log("The username is", un);
//     console.log("The password is", pwd); 

// },

//  click(){

//     console.log("Click login");

// }
// }


// user3.loadurl("https://leaftaps.com/opentaps/control/main");

// user3.login("democsr","crmsfa");

// user3.click()



// /* Since there is a duplication of pattern while using the same block of code we are to create a TEMPLATE and this template is called a "class" */


class User {

    //methods that can perform a particular task
    loadurl(url: string) {
        console.log("Loading the url", url);
    }

    login(un: string, pwd: string) {
        console.log("The username is", un);
        console.log("The password is", pwd);
    }

    click() {
        console.log("Click login");
    }

}


const usr1 = new User()

usr1.loadurl("https://leaftaps.com/opentaps/control/main")
usr1.login("democsr", "crmsfa")
usr1.click()


const usr2 = new User()

usr2.loadurl("https://leaftaps.com/opentaps/control/main")
usr2.login("democsr2", "crmsfa")
usr2.click()


//in class we will be moving all the functions inside the object as methods inside the class for code optimization


// /* function :

// is an independant resuable block of code


// methiod :

// is dependant on the class that you are creating*/