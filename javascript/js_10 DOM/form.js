let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // let user = document.querySelector("#user");
  // let pass = document.querySelector("#pass");

  // console.log(user.value);
  // console.log(pass.value);

  // alert(`hi ${user.value}, your password is set to ${pass.value}`);

  console.dir(form);
  let user = this.elements[0];
  let pass = this.elements[1];
  console.log(user.value);
  console.log(pass.value);

  alert(`hi ${user.value}, your password is set to ${pass.value}`);
});

//chnge events
let user = document.querySelector("#user");

user.addEventListener("change", function () {
  console.log("change event");
  console.log("final value", this.value);
});


user.addEventListener("input", function () {
  console.log("input event");
  console.log("final value", this.value);
});



let input = document.querySelector("#text");
let p = document.querySelector("p");

input.addEventListener("input",function() {
    console.log(input.value)
    p.innerText = input.value;
})