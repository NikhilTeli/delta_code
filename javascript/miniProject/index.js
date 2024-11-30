// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelector("li");

// div.addEventListener("click", function() {
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis) {
//     li.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }



// for todo list

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);

    // console.log(inp.value);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
       let listItem = event.target.parentElement;
       listItem.remove();
        // console.log(listItem);
        console.log("deleted");
    }
});
