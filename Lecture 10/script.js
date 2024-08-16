let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const drawGame = () => {
    console.log("game was draw");
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log(`userChoice=${userChoice}`);
    //generate compChoice
    const compChoice = genCompChoice();
    console.log(`compChoice=${compChoice}`);
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // compchoice=paper,scissors
           userWin= compChoice === "paper" ? false : ture;
        }
      else if(userChoice === "paper"){
          // compchoice=rock,scissors
          userWin= compChoice === "scissors" ? false : true;
      }
      else{
         // compchoice=paper,rock
         userWin= compChoice === "rock" ? false : true;
      }
      showWinner();
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});