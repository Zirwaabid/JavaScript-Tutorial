// create string 
let str="Zirwa Abid";
let string='Azra Abid';
console.log(str,string)
// //string lenth
console.log(str.length,string.length)
// indices (refers to index and index refers to position ) means if we want to excess the single letter from any string we use this method 
console.log(str[0],string[6]);

// Template literals 
let specialstring=`this is a template literals ${1+2+3}`;
console.log(specialstring)
// // benenfit of template literals 
let obj={
    item:"pen",
    price:45,
}
// // console.log("the cost of",obj.item,"is",obj.price,"rupees") instead of using this complex sentence we use this 
// // console.log(`the cost of ${obj.item} is ${obj.price} rupees`)
// // we can also written as 
let output=`the cost of ${obj.item} is ${obj.price} rupees`; // called string interpolation
console.log(output)

// // escape characters is not print by self but has specific functions
console.log("Apna\nCollege") //for next line
// console.log("Zirwa\tAbid") //for tab space

let str1="Zirwa Abid";
str=str1.toUpperCase();
// // str=str.toLowerCase();
console.log(str1)

let numbers="123456";
let word = "hello";
console.log(numbers.slice(1, 4));
console.log(word.slice(1, 3))

// // merger two string 
let animal1 = "cat";
let animal2 = "dog";
// // let result = animal1.concat(animal2);
let result = "cute animals" + animal1 + animal2;
console.log(result)

let thing="table";
console.log(thing.replace("t","c"));

