let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

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

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // make case insensitive by converting all to lowercase
    let losingMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    let winningMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    let tie = `A tie! ${humanChoice} doesn't beat ${computerChoice}`;

    // tie
    if (humanChoice === computerChoice) 
        console.log(tie);
    // losing cases
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(losingMessage)
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(losingMessage)
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(losingMessage);
        computerScore++;
    }
    // winning cases
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(winningMessage);
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(winningMessage);
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(winningMessage);
        humanScore++;
    }

}

function playGame() {
    let rounds = 5;
    while (rounds != 0) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        rounds--;
    }
    if (humanScore === computerScore)
        console.log("A tie!");
    else if (humanScore < computerScore)
        console.log("You lost!");
    else
        console.log("You won!");
}

playGame();

