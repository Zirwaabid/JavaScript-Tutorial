// let num=prompt("enter your number");
// if (num%5===0) {
//     console.log(num,"is multiple of 5")
// } else {
//     console.log(num,"is not multiple of 5")
// }

let score = prompt("enter your score (0-100)");
let Grade;
if (score >= 80 && score <= 100) {
    Grade="A";
}
else if (score >= 70 && score <= 89) {
    Grade="B"
}
else if (score >= 60 && score <= 69) {
    Grade="C"
}
else if (score >= 50 && score <= 59) {
    Grade=" D"
}
else if (score >= 0 && score <= 49) {
    Grade=" F"
}
console.log("according to your scores, your grade was:",Grade)