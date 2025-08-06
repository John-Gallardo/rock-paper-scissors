/* Game Logic */

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
const maxPoints = 5;

function getHumanChoice(buttonClick) {
    let target = buttonClick.target;
    switch(target.id) {
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;
    }
}

function getComputerChoice() {
    let computerChoice;
    let number = Math.random();
    if (number >= 2/3)
        computerChoice = "rock";
    else if (number >= 1/3)
        computerChoice = "paper";
    else 
        computerChoice = "scissors";
    return computerChoice;
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // make case insensitive by converting all to lowercase
    let losingMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    let winningMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    let tie = `A tie! ${humanChoice} doesn't beat ${computerChoice}`;

    // tie
    if (humanChoice === computerChoice) 
        addToDom(tie);
    // losing cases
    else if (humanChoice === "rock" && computerChoice === "paper") {
        addToDom(losingMessage);
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        addToDom(losingMessage);
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        addToDom(losingMessage);
        computerScore++;
    }
    // winning cases
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        addToDom(winningMessage);
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        addToDom(winningMessage);
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        addToDom(winningMessage);
        humanScore++;
    }
}

function checkGameStatus() {
    if (humanScore === maxPoints || computerScore === maxPoints) {
        switch(true) {
            case humanScore === computerScore:
                addToDom("A tie!");
                break;
            case humanScore < computerScore:
                addToDom("You lost!");
                break;
            case humanScore > computerScore:
                addToDom("You won!");
                break;
        }
        humanChoices.removeEventListener("click", playGame);
    }
}

function playGame(buttonClick) {
    getHumanChoice(buttonClick);
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScore();
    checkGameStatus();
}

/* Most HTML/CSS Logic */

let body = document.querySelector("body");

const humanChoices = document.querySelector("#humanChoices");

humanChoices.addEventListener("click", playGame);

function addToDom(string) {
    let text = document.createElement("div");
    text.textContent = string;
    body.appendChild(text);
}

function updateScore() {
    let score = document.querySelector("#score");
    score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
}