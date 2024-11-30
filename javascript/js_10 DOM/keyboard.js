
let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    console.log("code = ", event.code); //ArrowUp, ArrowDown, ArrowLeft,ArrowRight

    if(event.code == "ArrowUp"){
        console.log("character moves forword")
    }
    else if(event.code == "ArrowDown"){
        console.log("character moves backward")
    }
    else if(event.code == "ArrowLeft"){
        console.log("character moves Left")
    }
    else if(event.code == "ArrowRight"){
        console.log("character moves right")
    }
});

// inp.addEventListener("keyup", function() {
//     console.log("key was released");
// });