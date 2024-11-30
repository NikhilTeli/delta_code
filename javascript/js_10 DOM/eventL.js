let btn = document.querySelector("button");


let btns = document.querySelectorAll("button");
for(btn of btns) {
    
   
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
    btn.addEventListener("click", () => {
        console.log("you double clicked me")
    });
}

function sayHello() {
    alert("hello");
}

function sayName() {
    alert("apna college");
}


//  event listener for element 
let p = document.querySelector("p");

p.addEventListener("click", function() {
    console.log("parah was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function() {
    console.log("mouse inside div");
});


