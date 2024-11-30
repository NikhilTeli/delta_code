//example 1
function hello() {
    console.log("Hellooooooo")
}

hello();

//example 2
function info(){
    console.log("Nikhil Malleshappa Teli");
    console.log('PVPIT college budhgaon.')
}

info();

//example 3
function print1To5() {
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}

print1To5();

//example 4
// function isadult(){
//     let age = prompt("enter the age");
//     if (age>=18) {
//         console.log("you are able to vote");
//     }
//     else  {
//         console.log("you are not able to vote");
//     }
// }

// isadult();


//example 5
function dice(){
    let roll = Math.floor(Math.random() *6) +1;
    console.log(roll);
}

dice();


// function with argument
// example 1
function printinfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

printinfo("Nikhil",20);
printinfo("Pavan",21);


// example 2
function sum(a,b){
    console.log(a+b);
}

sum(10,23);
sum(3,13);


// example 3
function avg(a,b,c){
    console.log((a+b+c)/3)
}

avg(1,1,4);
avg(2,4,6);


// example 4
console.log("multiplication table");
function printTable(n){
    for(let i=n;i<=n*10;i+=n)
    {
        console.log(i);
    }
}

printTable(5);


// return function in js
// example 1
console.log("using return in function")
function add(a,b){
    return a+b;
}

console.log(add(22,34));

// example 2
function vote(age){
    if (age>=18){
        return "adult";
    }else{
        return "not adult"
    }
}

console.log(vote(3));


// practice question 5
function getSum(n){
    let sum = 0;

    for(let i=1;i<=n;i++){
        sum =sum+i;
    }
    return sum;
}

console.log(getSum(10));


// practice question 6
let str = ["hi","hello","bye","!"]

function concat(str){
    let result="";

    for(let i=0;i<str.length;i++){
        result = result+str[i];
    }
    return result;
}

console.log(concat(str));