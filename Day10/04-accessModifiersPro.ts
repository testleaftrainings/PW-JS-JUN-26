import { EmployeeSignUp } from "./03-accessModifiers";

class HR extends EmployeeSignUp { // Child class

   dep: string

   constructor() {
       super() //This is used or bring the constructor functionality within the child class
      this.dep = "QA"
      console.log("This is a child constructor");
      
   }

   empUpdate() {
      console.log(this.ephno); // protected property that is read in child class
      //this.ephno=121212
      console.log(this.ephno);// protected property that is modified in child class

   }

}

const hrobj = new HR()
hrobj.empUpdate()
hrobj.printDetails()