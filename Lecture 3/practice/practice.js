// print even numbers from 1-100 
// for (let num = 0; num <= 100; num++) {
//     if(num%2==0){
//         console.log(num)
//     }
// }
// set a gamenumber and ask a user to write number until they reach correct number 
let gamenum=19;
let usernum=prompt("Guess the nuumber:");
while (usernum != gamenum) {
    usernum=prompt("You entered wrong number. Guess again : ")
}
console.log("Congratulations, you entered the right number")
