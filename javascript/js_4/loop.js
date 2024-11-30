// for loop
// for (let i=1;i<=5;i++){
//     console.log(i)
// }

// for (let i=2;i<=50;i=i+2){
//     console.log(i)
// }


// While loop
// console.log("while loop")
// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let j = 5;
// while(j>=1){
    // console.log(j);
    // j--;
// }

// Practice
// const fm = "ABCD";
// let guess = prompt("guess the movie name");
// while((guess != fm) && (guess != "quit")) {
//     guess = prompt("wrong guess.please try again");
// }

// if (guess == fm){
//     console.log("congrats!!");
// }


// Break keyword
// let i = 1;
// while(i <= 5){
//     if(i == 3)
//     {
//         break;
//     }
//     console.log(i);
//     i++;
// }


// const fm = "ABCD";
//  let guess = prompt("guess the movie name");
//  while(guess != fm)  {
//     if (guess == "quit")
//     {
//         console.log("you quit")
//         break;
//     }
//      guess = prompt("wrong guess.please try again");
//  }

//  if (guess == fm){
//      console.log("congrats!!");
//  }



// loops in array
// let fruits = ["mango","apple","banana","litchi","orange"];

// for(let i=0;i<fruits.length;i++){
//     console.log(i, fruits[i]);
// }



// let heroes = [
//     ["ironman","spiderman","thor"],
//     ["superman","wonder woman","flash"]
// ]
// for (let i=0; i<heroes.length; i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for (let j=0;j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// for of loop
let fruits = ["mango","apple","banana","litchi","orange"];
for(fruit of fruits){
    console.log(fruit);
}