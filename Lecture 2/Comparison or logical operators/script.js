//comparison operators

let w =10;
let v=5;
console.log("w==v",w==v)
console.log("w!=v",w!=v)

let a = 4;
let b = "4"
// // if we use == then it shows true because both have same number but if we want to compare numbers and their data types then ot shows false because both have different data types so we use ===
console.log(a === b) //false
console.log(a !==) // means not equal to and true 
 let y=6;
 let u=4;
 console.log(y>4) //means y is greater than 4
 console.log(y<u)
// also 6>=3 means greater than equal (true) to or 4<3=3 (false)  means less than equal to 
 

//Logical operators in js 

// 1- logical and && operator is true if both or all conditions is true and vice versa 
let y=6;
 let u=4;
// let condition1= y>u;
// let condition2= y!==u;
console.log( y>u && y!==u)

// 2-logical or  || is true when one out of any conditions is true 
console.log(y===4 || y>u)

// 3-logical not ! is always opposite if answer is true then it shows false eg 
console.log(!(y>u)) //which is true but shows false