//for each array method
let arr = [
  {
    name: "Nikhil",
    marks: 95,
  },
  {
    name: "chirag",
    marks: 94,
  },
  {
    name: "sankalp",
    marks: 93,
  },
];

arr.forEach((student) => {
  console.log(student);
});

//map
// example 1
// let num = [1,2,3,4];

// let double = num.map((el) => {
//     return el*2;
// });
// console.log(double);

// example 2
let student = [
  {
    name: "Nikhil",
    marks: 95,
  },
  {
    name: "chirag",
    marks: 94,
  },
  {
    name: "sankalp",
    marks: 93,
  },
];

let gpa = student.map((el) => {
  return el.marks / 10;
});
console.log(gpa);

// filter
// let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter((num) => {
//     return (num%2 == 0)
// } );
// console.log(even);

//reduce method
// example 1
let nums = [1,2,3,4,];
let finalVal = nums.reduce((res, el) => {
    console.log(res);
   return res + el;
});
console.log(finalVal);

// example 2
// let nums = [2,3,4,5,3,4,7,8,1,2];

// let result = nums.reduce( (max, el) => {
//     if(el > max) {
//         return el ;
//     }else{
//         return max;
//     }
// });

// console.log(max);

//spread (with an array literal)
console.log("array literal example 1");
let arrL = [1, 2, 3, 4, 5];
let newarr = [...arrL];

console.log(newarr);

console.log("array literal example 2");
let chars = [..."NikhilTeli"];
console.log(chars);

//spread (with an object literal)
const data = {
  email: "ironman@gmail.com",
  password: "abcd",
};

const datacopy = { ...data, id: 123 };
console.log(datacopy);

let arry = [1, 2, 3, 4, 5];
let obj1 = { ...arr };
let obj2 = { ..."hello" };


//rest
function sum() {
    return arguments.reduce((sum,el) => sum+el);
} 


//destructuring
let names = ["tony","bruce","peter","steve","abc","xyz"];
let [winner, runneruo,...others] = names;
console.log(winner);
console.log(runneruo);
console.log(...others);


//destructuring for object
const studentinfo = {
    name: "Nikhil",
    age: 20,
    class:TypeError,
    subject:["abc","xyz","opl","asd"] ,
    username:"Nikhil@123",
    password:"abcd",
};

let {username,password} = studentinfo;
console.log(username);
console.log(password);
