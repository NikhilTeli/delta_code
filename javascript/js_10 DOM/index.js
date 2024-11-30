let btn = document.querySelector("button");
console.log(btn);

btn.onclick = function () {
    alert("button was clicked");
};

let btns = document.querySelectorAll("button");
for(btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = () => {
        console.log("you entered a button");
    };
    console.dir(btn);
}

function sayHello() {
    alert("hello");
}


