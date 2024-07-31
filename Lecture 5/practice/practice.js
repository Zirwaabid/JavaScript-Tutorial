// print the number of vowels 
// function countvowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//       count++
//     }
//   }
//   return count;
// }
// let result = countvowels("zirwa");
// console.log(result);

// print same task with arrow function 
// const countvow = (str) => {
//   count=0;
//   for (const c of str) {
//     if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
//      count++
//     }
//   }
//   return count;
// }
// let vowels=countvow("aeiou");
// console.log(`the total number of vowels in word is ${vowels}`);

// print the square of each value using for each loop
let array=[1,3,4,6];
array.forEach( array=> {
 console.log(array*array);
});

