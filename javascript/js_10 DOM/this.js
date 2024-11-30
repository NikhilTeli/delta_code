// this in event listener
let bt = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changecolor(){
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

bt.addEventListener("click",changecolor);

p.addEventListener("click", changecolor);

h1.addEventListener("click",changecolor);

h3.addEventListener("click",changecolor);