// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length;i++){
//   smallImages[i].src = "/images/spider_1.jpeg";
//   console.log(`value of image no.${i} is changed`);
// }


// let pa = document.getElementsByTagName("p");
// console.log(pa);


//query seleectors
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelectorAll("div a"));


//properties and methods
let para = document.querySelector("p");
console.dir(para.innerText);
console.dir(para.innerHTML);
console.dir(para.textContent);


//manipulating style
let links = document.querySelectorAll(".box a");

for (let i=0; i < links.length; i++){
  links[i].style.color = "orange";
}


//manipulating style
//Using classList
let img = document.querySelector("img");
console.dir(img.classList);

let heading = document.querySelector("h1");
console.dir(heading.classList.add("green"));
console.dir(heading.classList.remove("green"));
console.dir(heading.classList.contains("green"));

console.dir(heading.classList.add("underline"));
console.dir(heading.classList.toggle("green"));
console.dir(heading.classList);

console.dir(heading.classList.toggle("green"));
console.dir(heading.classList);



//Navigation
let h4 = document.querySelector("h4");
console.dir(h4);
console.dir(h4.parentElement);

let box = document.querySelector(".box");
console.dir(box.children);
console.dir(box.childElementCount);



//Adding element
let newP = document.createElement("p");
console.dir(newP.innerText = "Hi, i am a new para");


//Pracice questions
//example 1
let para1 = document.createElement("p");
para1.innerText = "hey i'm red!!";
document.querySelector("body").append(para1);

para1.classList.add("red"); 

//example 2
let head = document.createElement("h3");
head.innerText = "hey i'm blue h3!!";
document.querySelector("body").append(head);

head.classList.add("blue"); 


//example 3
let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");

h1.innerText = "i am in a div";
p.innerText = "me too!";
div.append(h1);
div.append(p);
div.classList.add("box");
document.querySelector("body").append(div);



let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerText = "click me!!";
document.querySelector("body").append(btn);
document.querySelector("body").append(input);

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

let btn=document.querySelector("#btn");
btn.classList.add("btnStyle");


