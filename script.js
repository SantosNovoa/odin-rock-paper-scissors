let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors!")
    return choice.toLowerCase();
}


function playRound(humanSelection, computerSelection) {
    
    if (humanSelection == "rock" && computerSelection == "Paper") {
        computerScore++;
        console.log("You lost that round!");
    }
    else if (humanSelection == "rock" && computerSelection == "Scissors") {
        humanScore++;
        console.log("You won that round.");
    }
    else if (humanSelection == "rock" && computerSelection == "Rock") {
        console.log("It's a draw.");
    }
    else if (humanSelection == "paper" && computerSelection == "Scissors") {
        computerScore++;
        console.log("You lost that round!");
    }
    else if (humanSelection == "paper" && computerSelection == "Rock") {
        humanScore++;
        console.log("You won that round.");
    }
    else if (humanSelection == "paper" && computerSelection == "Paper") {
        console.log("It's a draw.");
    }
    else if (humanSelection == "scissors" && computerSelection == "Rock") {
        computerScore++;
        console.log("You lost that round!");
    }
    else if (humanSelection == "scissors" && computerSelection == "Paper") {
        humanScore++;
        console.log("You won that round.");
    }
    else if (humanSelection == "scissors" && computerSelection == "Scissors") {
        console.log("It's a draw.");
    }
    
}

let humanSelection = getHumanChoice();

let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


console.log(computerScore);
console.log(humanScore);
console.log(computerScore);
console.log(humanScore)
