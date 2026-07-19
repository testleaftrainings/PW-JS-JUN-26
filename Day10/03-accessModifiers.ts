
export class EmployeeSignUp { // Parent class

    public static eName : string
    public static eid : string
    protected readonly ephno : number // through inherited class we can modify and read data
    private  eSalary : number // through getter and setter

    printDetails() {
        console.log(`The emp details ${EmployeeSignUp.eName} : ${EmployeeSignUp.eid} : ${this.ephno} : ${this.eSalary}`);
    }

    constructor() {
        console.log("This is a parent constructor");
        
        EmployeeSignUp.eName = "Hari"
        EmployeeSignUp.eid = "abc1234"
        this.ephno = 769798
        this.eSalary = 786867

    }

    get readData(){ // here the getter is to expose the provate property outside of the class 
        return this.eSalary        
    }

    set writeData(newSal : number){
        this.eSalary=newSal

    }

}

// const emp = new EmployeeSignUp()
// console.log(emp.readData)  // expose the private property old eSalary 

// emp.writeData = 1212121 // new salary
// console.log(emp.readData);

