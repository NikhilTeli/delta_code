//Call Back**********
//  function one() {
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// js is single threaded*******
// setTimeout(() => {
//     console.log("apna college");
// },2000);

// console.log("hello...");

//callback hell********
// h1 = document.querySelector("h1");

// function changecolor(color,delay,nextColorChange){
//     setTimeout(() =>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }

// changecolor("red",1000,() =>{
//     changecolor("orange",1000,() =>{
//         changecolor("green",1000,() =>{
//             changecolor("blue",1000);
//         });
//     });
// });

//Promises*******
// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "apna college",
//   () => {
//     console.log("success: your data was saved");

//     savetoDb(
//       "hello world",
//       () => {
//         console.log("success2: data2 saved");
//       },
//       () => {
//         console.log("failure2: weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure: weak connection..data not saved");
//   }
// );



//example of promises
// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success; data was saved");
//     } else {
//       reject("failure: weak connection");
//     }
//   });
// }

// savetoDb("apna college");


// Promises :-then() and catch()******
// savetoDb("apna college")
// .then(() =>{
//   console.log("Promise was resolved");
// })
// .catch(() =>{
//   console.log("Promise was reject");
// })



// Promise chaining*******
// savetoDb("apna college")
// .then((result) =>{
//   console.log("data1 saved");
//   console.log(result);
//   return savetoDb("hello world");
// })
// .then((result) =>{
//   console.log("data2 saved");
//   console.log(result);
//   return savetoDb("Nikhil");
// })
// .then((result) =>{
//   console.log("data3 saved");
//   console.log(result);
// })
// .catch((error) =>{
//   console.log("Promise was reject");
// })



//All in one code
h1 = document.querySelector("h1");

function changecolor(color,delay,){
 return new Promise ((resolve,reject) =>{
    setTimeout(() =>{
      h1.style.color = color;
      resolve("color changed");
  },delay);
  });
}

changecolor("red",1000)
.then(() =>{
  console.log("red color was complete");
  return changecolor("orange",1000);
})
.then(() =>{
  console.log("orange color was complete");
  return changecolor("green",1000);
})
.then(() =>{
  console.log("green color was complete");
  return changecolor("blue",1000);
})
.then(() =>{
  console.log("blue color was complete");
 
})

// changecolor("red",1000,() =>{
//     changecolor("orange",1000,() =>{
//         changecolor("green",1000,() =>{
//             changecolor("blue",1000);
//         });
//     });
// });