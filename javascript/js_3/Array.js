let students = ["aman", "Nikhil","rajat"];
console.log(students)
students[1];
students[0][0];

let info = ["nikhil",16,7.5];   //mixed array
console.log(info)


let emt = [];         //empty array
console.log(emt)


let fruits = ["mango","apple","litchi"];
fruits[0] = "banana";
console.log(fruits)
fruits[10] = "pineapple";
console.log(fruits.length);


// Array methods
cars = ["audi","bmw","mercedes","maruti"];
cars.push("xuv");
console.log(cars)

cars.pop();
console.log(cars)

cars.unshift("thar");
console.log(cars)

cars.shift();
console.log(cars)

console.log(cars.indexOf("bmw"))


// Practice
let start = ["january","july","march","august"];
console.log(start);

start.shift();
console.log(start);

start.shift();
console.log(start);

start.unshift("june");
console.log(start);

start.unshift("july");
console.log(start);


console.log(start.indexOf("july"));

console.log(start.includes("march"));

let primary = ["red","yellow","blue"];
let secondary = ["orange","green","violet"];
console.log(primary.concat(secondary));        //merging two array

console.log(primary.reverse());

let months = ["january","july","march","august","december","april"];
console.log(months.slice(2));
console.log(months.slice(2,3));
console.log(months.slice(-2));

console.log(months.splice(3));
console.log(months.splice(0,1));
console.log(months.splice(0,1,"black","grey"));

let brands = ["audi","bmw","mercedes","maruti"];
console.log(brands.splice(1,0,"thar"));



// Practice
let month = ["january","july","march","august"];
console.log(month.splice(0,2,"july","june"));
console.log(month)

let lang = ["c","c++","html","javascript","python","java","c#","sql"];
console.log(lang.reverse());
console.log(lang.indexOf("javascript"));



// Nested Array
let num = [[2,4],[3,6],[4,8]];
console.log(num)
console.log(num[0])
console.log(num[1][1])
console.log(num[2][1])


// Practice
let pract = [['X',null ,'O'],[ null,"X",null],["O",null,"X"]];
console.log(pract)

// console.log(pract[0],[1] = "*")

