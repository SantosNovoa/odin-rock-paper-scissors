let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors!")
    return choice;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

function playRound(humanSelection, computerSelection) {

    capitalizeFirstLetter(humanSelection);
    
    if (humanSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        console.log("You lost that round!");
    }
    else if (humanSelection == "Rock" && computerSelection == "Scissors") {
        humanScore++;
        console.log("You won that round.");
    }
    else if ((humanSelection == "rock" || "Rock") && computerSelection == "Rock") {
        console.log("It's a draw.");
    }
    else if ((humanSelection == "paper" || "Paper") && computerSelection == "Scissors") {
        computerScore++;
        console.log("You lost that round!");
    }
    else if ((humanSelection == "paper" || "Paper") && computerSelection == "Rock") {
        humanScore++;
        console.log("You won that round.");
    }
    else if ((humanSelection == "paper" || "Paper") && computerSelection == "Paper") {
        console.log("It's a draw.");
    }
    else if ((humanSelection == "scissors" || "Scissors") && computerSelection == "Rock") {
        computerScore++;
        console.log("You lost that round!");
    }
    else if ((humanSelection == "scissors" || "Scissors") && computerSelection == "Paper") {
        humanScore++;
        console.log("You won that round.");
    }
    else if ((humanSelection == "scissors" || "Scissors") && computerSelection == "Scissors") {
        console.log("It's a draw.");
    }
    
}

const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);

console.log("scissors" === "rock" || "Rock");


console.log(getHumanChoice());
console.log(getComputerChoice());

console.log(computerScore);
console.log(humanScore);
console.log(computerScore);
console.log(humanScore)
