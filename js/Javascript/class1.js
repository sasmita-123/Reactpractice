class Student{
    name ="INDIA";//property
    city ="HYD";
printDetails() {
        console.log(this.name,this.city)//if we want to access any property inside Class use "this"keyword s1.name
    }
    changeData(){
        this.name = "I LOVE INDIA";
        this.city = "BANGALORE";
    }
}
var s1 = new Student();
var s2 = new Student();    //special operator s1=reference or address of memory
s1.printDetails();
s1.changeData();
s1.printDetails();