// async keyword********

// async function greet() {
//     throw"weak connection"
//     return "hello";
// }

// greet()
// .then((result) =>{
//     console.log("Promise was resolved");
//     console.log("result was ",result)
// })
// .catch((error) =>{
//     console.log("Promise was rejected eith error",error);
// })


//Await keyword*******
// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve;
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   getNum();
// }


// h1 = document.querySelector("h1");

// function changecolor(color,delay,){
//  return new Promise ((resolve,reject) =>{
//     setTimeout(() =>{
//       h1.style.color = color;
//       console.log(`color change to ${color}!`);
//       resolve("color changed");
//   },delay);
//   });
// }

// async function demo() {
//    await changecolor("red",1000);
//    await changecolor("orange",1000);
//    await changecolor("green",1000);
//     changecolor("blue",1000);
// }


// JSON****
// ex:-1
// let jsonRes = '{"fact":"British cat owners spend roughly 550 million pounds yearly on cat food.","length":71}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

// // ex:-2
// let student = {
//     name : "shradha" ,
//     marks:95,
// };

// console.log(JSON.stringify(student)); 



//first API request*********
// ex-1
let url1 = "https://catfact.ninja/fact"

fetch(url1)
.then((res)=>{
  console.log(res);
  
})
.catch((err) =>{
  console.log("ERROR -",err)
})

// ex-2**
// let url = "https://catfact.ninja/fact"

// fetch(url)

// .then((res)=>{
//   console.log(res);
//   return res.json();
// })
// .then((data)=>{
//   console.log("data1 = ",data.fact);
//   return fetch(url);
// })
// .then((res)=>{
//   return res.json();
// })
// .then((data2)=>{
//   console.log("data2 = ",data2.fact);
// })
// .catch((error)=>{
//   console.log("ERROR - ",error);
// })



// using fetch with async-await********
// let url = "https://catfact.ninja/fact";

// async function getFact() {
//   let res = await fetch(url);
//   let data = await res.json()
//   console.log(data);
// }