let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");

let turnO = true; //playerX,playerO
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [1, 2, 3],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    count = 0;
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color="purple"
                turnO = false;
        }
        else {
            box.innerText = "X";
              box.style.color="red"
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game is Draw.`;
    msgContainer.classList.remove("hide");
    boxDisabled();
};
const boxDisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    boxDisabled();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);