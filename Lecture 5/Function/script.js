// function 
// how to write functions
function myFunction(msg) {
    //parameter--->input
    console.log(msg);
}
myFunction("i love js") ;//argument --->argument and parameter are same

// function 2 numbers sum
function sum(x,y) {
    console.log(x+y);
}
sum(3,4);

// return the value from function to recall and nothing print after return
function sum(a,b) { //parameters are local variables and have no scope outside the function
    s=a+b;
    return s;
}
let val=sum(8,1);
console.log(val);

// sum function 
function sum(a, b) {
    return a + b;
}
let val1 = sum(1, 3);
console.log(val1);

//multi function
function multiplication(e, y) {
    return e * y
}
let calc = multiplication(2, 3);
console.log(calc);

// modern js (we use both methods console or return
const arrowsum = (y, z) => {
    console.log(y + z)
}
arrowsum(3, 4);
const arrowmulti = (w, t) => {
    return w * t;
}
let y=arrowmulti(5, 5);
console.log(y);

const function1 =()=>{
    console.log("Hello");
}
function1();

