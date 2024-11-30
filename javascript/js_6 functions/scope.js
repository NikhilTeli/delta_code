// function scope
// example 1
let sum = 54;  //global scope

function calSum(a,b){
    let sum = a+b;      //function scope 
    console.log(sum);
}

calSum(2,3);
console.log(sum);     //for global scope


// Block scope
console.log("example of Block scope")
for(let i=1; i<=3; i++){
    console.log(i);  //Block scope
}


//lexical scope [like nested in function]
function outerFunc(){
    let x =15;
    let y =61;
    function innerFunc(){
        console.log(x);
    }


    innerFunc();
}



//Function expression
//example 1
let name="Nikhil";

let sam = function(a, b) {
    return a+b;
}

//example 2
let hello = function(){
    console.log("Helloooooo!!");
}




//High order function
console.log("example of High order function");

function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet = function(){
    console.log("hello");

}


multipleGreet(greet,3);



//High order function (Return)
console.log("example of High order function with return");


function oddOrEvenFactory(request){
    if(request =="odd") {
        return function(n){
            console.log(!(n%2 == 0));
        }

       
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }

    }
    else{
        console.log("wrong request");
    }
}


let request = "odd";