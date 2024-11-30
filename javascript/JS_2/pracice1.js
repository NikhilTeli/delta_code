let color = "red";


// Traffic light
if (color === "red") {
    console.log("stop");
}
if (color === "yellow") {
    console.log("slow down");
}
if (color === "green ") {
    console.log("go");
}


// else if statements
// let age = 14;

// Practice 2
let size = "xl";

if (size === "xl") {
    console.log("price is 250");
}
else if (size === "l") {
    console.log("price is 200");
}
else if (size === "m") {
    console.log("price is 100");
}
else {
    console.log("price is 50");
}



// Practice 3
let str = "apple";

if ((str[0] === 'a') && (str.length >= 3)) {
    console.log("good string " + str);
} else {
    console.log("not a good string")
}


// switch statements
let day = 1;

switch (day) {
    case 1:
        console.log("sunday");
        break;

    case 2:
        console.log("monday");
        break;

    case 3:
        console.log("tuesday");
        break;

    case 4:
        console.log("wednesday");
        break;

    case 5:
        console.log("thursday");
        break;

    case 6:
        console.log("friday");
        break;

    case 7:
        console.log("saturday");
        break;

    default:
        console.log("number is invalid");
}


// alert 
alert("Some thing is wrong")
console.log("this is an simple log")
console.error("this is an error msg")
console.warn("this is an warning message")


// Prompt
let fname = prompt("enter your name...");
let lname = prompt("enter your last name...");

console.log(fname +" " +lname)