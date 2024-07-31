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

// map same as for each loop but it return new array if required 
let colours=["red","orange","purple"]
let newarr=colours.map((value) => {
return value
})
console.log(newarr);
