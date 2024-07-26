// conditional statements

// if-if statement  
let age1=18;
if(age1>=18) {
    console.log("you can vote")
}
if(age1<18) {
    console.log("you cannot vote")
}

// let mode ="light";
// let color;
// if (mode==="dark") {
//     console.log("dark")
// }
// if (mode==="light") {
//     console.log("white")
// }

// if-else statement 
let mode ="light";
let color;
if (mode==="dark") {
 color="black"
}
else  {
    color=("white")
}
console.log(color)

// let age=18;
// if(age>=18) {
//     console.log("you can vote")
// }
// else {
//     console.log("you cannot vote")
// }

// we can use if else to find which number is even or add 
let num=3;
if (num%2===0) {
    console.log(num ,"is even");
}
else{
    console.log(num ,"is odd");
};

// else if statement
let age =70; 
if (age<18) {
    console.log("Junior");
} 
else if (age>60){
    console.log("Senior");
}
else {
    console.log("Middle");
};

// ternary opertors 
let marks=30;
let result= marks>=20 ? "pass" : "fail";
console.log(result);
