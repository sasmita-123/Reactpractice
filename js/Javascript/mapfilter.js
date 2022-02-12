// const arr = [1, 2, 3, 4];
// const doubled = arr.map((item) => item * 2);
// console.log(doubled); // [2, 4, 6, 8]
// function double(x) {
//   return x * 2;
// }
// const result = arr.map(double);
// console.log(result);

// function triple(x) {
//   return x * 3;
// }
// let output = arr.map(triple);
// console.log(output);

// const binaryresults = arr.map((x) => x.toString(2));
// console.log(binaryresults);

//Map an Array
// const employee = [
//   { firstName: "Sasmita", lastName: "Swain", Dept: "FrontEnd UI" },
//   { firstName: "Pawani", lastName: "Sila", Dept: "FullStack" },
//   { firstName: "Sangeeta", lastName: "Patro", Dept: "FrontEnd UI" },
//   { firstName: "Amrita", lastName: "Dash", Dept: "BackEnd UI" },
// ];

// const output = employee.map((x) => x.firstName + " " + x.lastName);
// console.log(output);

//FILTER
// const number = [1, 2, 5, 4, 3, 7, 8, 10, 12, 34, 33];
// function isEven(x) {
//   return x % 2 === 0;
// }
// const result = number.filter(isEven);
// console.log(result);
// //Arrow Function
// const result1 = number.filter((x) => x % 2 === 0);
// console.log(result1);

//Slice Method
const students = ["Bandna", "Omita", "Lina", "Aman", "Manoj"];
const studentresult = students.slice(1, 4);
console.log(studentresult);
//Splice Method
let studentcls = ["Bandna", "Omita", "Lina", "Aman", "Manoj"];
studentcls.splice(2, 2, "Lina", "Guru");
console.log(studentcls);

//Concat Method
var a = ["Sasmita", "Samita", "Namita"];
var b = a.concat("Pawani", "Sangeeta", "Amrita");
console.log(b);
//Find and FindIndex Method
var ages = [10, 23, 19, 20];
var z = ages.find(chkAdult);
console.log(z);
function chkAdult(age) {
  return age >= 18;
}
