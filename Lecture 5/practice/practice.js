// print the number of vowels 
function countvowels(str) {
  let count = 0;
  for (const char of str) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      count++
    }
  }
  return count;
}
let result = countvowels("zirwa");
console.log(result);

// print same task with arrow function 
const countvow = (str) => {
  count=0;
  for (const c of str) {
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
     count++
    }
  }
  return count;
}
let vowels=countvow("aeiou");
console.log(`the total number of vowels in word is ${vowels}`);

// print the square of each value using for each loop
let array=[1,3,4,6];
array.forEach( array=> {
 console.log(array*array);
});

// filter 90+ marks 
let marks = [49, 50, 10, 91, 80, 95, 99, 100, 98];
const newmarks = marks.filter((value) => {
  return value>90;
})
console.log(`marks that greater than 90 is ${newmarks}`);

// take a number n as input from user and create array of these number
let number = prompt("Enter any number:");
let arr = [];
for (let i = 1; i <= number; i++) {
    arr[i - 1] = i;

}
console.log(`all numbers=${arr}`);

// use reduce method to sum the numbers in array
const sum = arr.reduce((res, current) => {
    return res + current;
})
console.log(`sum=${sum}`);
// use reduce method to find factorial of numbers in array 
const factorial = arr.reduce ((result, current) => {
    return result * current;
})
console.log(`factorial=${factorial}`);