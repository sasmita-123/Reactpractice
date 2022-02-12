const arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach((item) => {
  console.log(item);
});

//Spread Operator
const obj = {
  name: "Wings of Fire",
  author: "Dr. APJ Abdul Kalam",
};
const combined = {
  ...obj,
  age: 80,
};
console.log(combined);

//Destructuring of Array
var marks = { x: 21, y: -34, z: 47 };

const { x, y, z } = marks; // x = 21, y = -34, z = 47

console.log(x);
console.log(y);
console.log(z);
