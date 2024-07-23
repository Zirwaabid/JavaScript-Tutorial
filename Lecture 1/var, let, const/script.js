// var: 
var age=4;
var age=4;
var age=4;
console.log(age)
// limitations:in var we use single variable multiple times and while written in console it show the value of last variable as shown above that cause problems 

// let: 
let num=4;
 num =5
 let a; 
console.log(num)
console.log(num)
console.log(a) //  then it shows undefined instead of sme error which is good 
// importance:variabels cannot be used multiple times but we can update them and block scope

// const:
const number=3;
console.log(number)
// importace:variabels cannot be used multiple times and show error if we use it again so very helpful and block scope

// block (means curly brackets) scope means: 
{
    let a=3;
    console.log(a) 
//  this let has only range in this block we can re-use a in in onther block 
}
{
    let a=3;
    console.log(a) 
}

