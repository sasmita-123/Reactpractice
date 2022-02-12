//call and apply same function as arguments pass
//fn.call(obj,89,"dude")
//fn.apply(obj. ["d", 09])
fnName.bind(obj1)()



var obj1 = {
    name:"INDIA"
}
function fnName(password, email){
        console.log(this.name, password, email);
    
}
//var fn = fnName.bind(obj1, "s1","s1@gmail.com");
//fn();  (or)
 
//var fnName = fnName.bind(obj1,"s1","s1@gmail.com");
 //fnName();

 //var fnName = fnName.bind(obj1);
 //fnName("s2", "s2@gmail.com")
fnName.bind(obj1)("s3", "s3@gmail.com");