class A{
    name
    city
    constructor(name,city){
        this.name =name
        this.city=city
    }
    printDetails() {
        console.log(this.name, this.city)
    }
}
class B extends A {
    email
    phone
    constructor(email, phone){
        super("NIIT","HYD")
        this.email=email
        this.phone=phone
    }
    printEmailDetails(){
        console.log(this.email, this.phone)
    }
}
    var b1 = new B("NIT@gmail.com",0970987788);
    b1.printDetails();
    b1.printEmailDetails();