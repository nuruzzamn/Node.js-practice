// const s1 = require("./students");
const { getName, getAge, getLocation } = require("./students");

// console.log(s1.getName());
// console.log(s1.getAge());
// console.log(s1.getLocation());
// console.log(s1.result);

console.log(getName() + " age :" + getAge() + " location :" + getLocation());
