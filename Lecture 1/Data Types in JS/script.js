// There are two types of data types:
// 1-primitive
// 2-non-primitive 

// 1-typs of primitive (7):

// Numbers :
let age = 45;
console.log(age)
console.log(typeof age)

// strings: 
let fullName = "Zirwa Abid";
console.log(fullName)
console.log(typeof fullName)

// boolean : 
let isFollow = true;
console.log(isFollow)
console.log(typeof isFollow)

// undefined: 
let x;
console.log(x)
console.log(typeof x)

// null 
let y = null;
console.log(y)
console.log(typeof y)

// bigint 
let w = BigInt("333");
console.log(w)
console.log(typeof w)

// symbol 
let e = Symbol("CAt")
console.log(e)
console.log(typeof e)

// 2-types of non primitive:
// object (collection of values) 
const obj = {
    fullName: "Zirwa",
    age: 19,
    isgood: true,
};
// if we want to chnage the age in object
obj["age"] = obj["age"] + 1;
console.log(obj)
// console.log(obj.age)
// console.log(obj["age"])
console.log(typeof obj)