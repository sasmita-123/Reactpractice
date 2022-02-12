var student = {
name : "NIIT",
email : "NIT@gmail.com",
phone : 7970979868767,
address : {
    city : "Hyd",
    state : "Tel",
    pincode : 6576872
},
getMarks : function(){
    console.log("80 mark");
},
addNumbers : function(x , y, f){
f();
    var results = x + y;
f();
console.log (results);
f();
},
};
//console.log(student.address.state);
//console.log(student.address.pincode);
console.log(student);
student.address.area = "Amerpet";
console.log(student);
student.getMarks();
student.addNumbers(20, 30, function(){
    console.log("callback Function");
});