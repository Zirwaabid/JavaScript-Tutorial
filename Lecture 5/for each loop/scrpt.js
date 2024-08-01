// for each loop is used to perform different function with arrays
let arr = [1, 2, 3, 4];
arr.forEach(value => {
    console.log(value); //print all the values of array at each index
});
// print values of strings 
let array = ["banana", "mango", "apple"];
array.forEach((val, idx, array) => {
    console.log(val.toUpperCase(), idx, array);
});
// we can print parameters in such as value,index(position at each value),array itself as given upper

// map method (same as for each loop but it return new array if required )
let cat = [1, 2, 3, 4];
const newcat = cat.map((value)=>{
    return value;
})
console.log(newcat);

//filter method (give new array but filter different things from aray)
// filter even numbers from array 
let number1 = [1, 2, 3, 4, 5, 6]
let evennumbers = number1.filter((val) => {
    return val % 2 === 0;
})
console.log(evennumbers);

// filter values greater than 3 
let newnum = [1, 2, 3, 4, 5, 6];
let greaterval = newnum.filter((val) => {
    return val > 3;
})
console.log(greaterval);

//reduce method (this method is used if we have various input but we want single output eg)
// calculate sum 
let value = [1, 2, 3, 4, 5];
const sum = value.reduce((result, current) => { //result=>previousvalue/accumulator
    return result + current
})
console.log(sum);
// find greater value through reduce 
let n = [3, 4, 5, 6];
const gn = n.reduce((pre, curr) => {
    return pre > curr ? pre : curr;
})
console.log(gn);