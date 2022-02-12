// class Emp{
//     empId;
//     empName;
//     empCity;

//     constructor(){
//         this.empId = "101"
//         this.empName = "Naren"
//         this.empCity = "HYD"

//     }
//     printEmpDetails(){
//         console.log(this.empId, this.empName, this.empCity);
//     }
// }
// var emp1 = new Emp();
// emp1.printEmpDetails();



class Emp{
    empId;
    empName;
    empCity;

    constructor(id,name,city){
        this.empId = id;
        this.empName = name;
        this.empCity = city;

    }
    printEmpDetails(){
        console.log(this.empId,this.empName,this.empCity);
    }
}
var emp1 = new Emp(101,"NIIT","CTC");
emp1.printEmpDetails();
var emp2 = new Emp(102,"SQL","BBSR");
emp1.printEmpDetails();

