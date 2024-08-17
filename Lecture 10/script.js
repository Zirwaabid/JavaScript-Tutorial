let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "Game was Draw Play Again!";
    msg.style.backgroundColor = "#081b31";
};

let showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
    };
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
            userWin = compChoice === "paper" ? false : ture;
        }
        else if (userChoice === "paper") {
            // compchoice=rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // compchoice=paper,rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});