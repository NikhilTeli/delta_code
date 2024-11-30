const student = {
    name: "Nikhil",
    marks: 95,
    prop: this,
    getName: function () {
        return this.name;
    }
};


//Practice question
//question no 1
const sqr = (n) => {
    return n * n
}
console.log(sqr(16));


//question no 2
let id = setInterval(() => {
    console.log("Hello world");
}, 2000)

setInterval(() => {
    clearInterval(id);
    console.log("clear interval run");
}, 10000);