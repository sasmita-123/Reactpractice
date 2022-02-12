var studentInfo = {
    name : "Namrata",//insert the property
    age : 32,
    place : "BBSR",
    phnno : 9898998898
//object having key:value form and store data
}
console.log(studentInfo.name);
//insert new property in object
studentInfo.email = "srija_007@gmail.com";
console.log(studentInfo.place);
studentInfo.name="sasmita"//update the property
console.log(studentInfo.name);
//delete
delete studentInfo.age;
console.log(studentInfo);