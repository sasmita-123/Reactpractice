/*Any function which is passed as a argument 
such functions are callaed callback function and 
callback function will not have any name*/ 
function fn(f){
    var a = "NIT";
    f();
    console.log(a);
    f();
    f();
}
fn(function(){
    var b = "Hyderabad";
    console.log(b);

});
//difference
//Declaration of Arrow function
var fn=()=>{
   console.log("hello world")
}
/*function fn(f1, f2){
f1()
.....

f2()
.....
}
fn(function(){

})
*/


/*Any function which takes another fuction 
as an argument called Higher Order Function*/
//Asynchron
//promise