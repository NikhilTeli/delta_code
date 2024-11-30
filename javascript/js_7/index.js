//This keyword
const student = {
    name: "Nikhil",
    age: 20,
    eng: 95,
    math: 95,
    phy: 95,
    getAvg() {
        let avg = ((this.eng + this.math + this.phy) / 3);
        console.log(`${this.name} got avg marks = ${avg}`);
    } 
}


//Try and catch block
console.log("heelo");
console.log("heelo");

try {
    console.log(a);
} catch(e) {
    console.log("caught an error.. a is not defined");
    console.log(e);
}

console.log("heelo2");
console.log("heelo2");
console.log("heelo");


//Arrow function
const sum = (a,b) => {
    console.log(a+b);
};

const cube = (n) => {
    return n*n*n;
};
    //Or
const cubee = (n) =>(n*n*n);



const pow = (a,b) => {
    return a ** b;
};

const hello = () => {
    console.log("Hello world");
};

const mul = (a,b) => (a*b);



//set timeout
console.log("example of set timeout")
console.log("hi there");

setTimeout( ()=> {
    console.log("apna colege");
},4000);

console.log("welcome to");



//set interval
let id = setInterval( () => {
    console.log("apna college");
},200);


clearInterval(id);