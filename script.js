let humanSelection = "";
let humanScore = 0;
let computerScore = 0;

// dom objects
const buttons = document.querySelectorAll("button");
const terminalScreen = document.querySelector(".fakeScreen");
const winnerComputer = document.createElement("div");
winnerComputer.classList.add("winnerComputer");
const winnerHuman = document.createElement("div");
winnerHuman.classList.add("winnerHuman");

const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const modalWinnerComputer = document.createElement("div");
modalWinnerComputer.classList.add("modalWinnerComputer");
const modalWinnerHuman = document.createElement("div");
modalWinnerHuman.classList.add("modalHuman");
const span = document.getElementsByClassName("again")[0]
const modalScore = document.createElement("div");
modalScore.classList.add("modalScore");


// prompts user to restart the game 
span.onclick = function() {
  modal.classList.remove("show");
  buttons.forEach(function (button) {
    button.disabled = false;
  }); 

// resetting scoreboard and removing the div dom objects.
  humanScore = 0;
  computerScore = 0;
  terminalScreen.innerHTML = "";
  modalWinnerComputer.textContent = "";
  modalWinnerHuman.textContent = "";
  modalScore.textContent = "";
}


// auto scrolling functions
function isAtBottom(element) {
  return element.scrollHeight - element.scrollTop <= element.clientHeight + 5;
}

function autoScrollIfAtBottom() {
  if (isAtBottom(terminalScreen)) {
    terminalScreen.scrollTop = terminalScreen.scrollHeight;
  }
}

// looping through all buttons to select them
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    humanSelection = `${button.className}`;
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    autoScrollIfAtBottom();

    // determines winner and disables the buttons once either user or computer has reached 5 wins
    if (computerScore == 5) {
      winnerComputer.textContent = "\nComputer won.";
      terminalScreen.appendChild(winnerComputer);
      modalWinnerComputer.textContent = "Computer won."
      modalContent.appendChild(modalWinnerComputer);
      modalScore.textContent = `Computer Score: ${computerScore}, Your score: ${humanScore}`
      modalContent.appendChild(modalScore);
      buttons.forEach(function (button) {
        button.disabled = true;
      });
      modal.classList.add("show");
    } else if (humanScore == 5) {
      winnerHuman.textContent = "\nYou won!";
      terminalScreen.appendChild(winnerHuman);
      modalWinnerHuman.textContent = "You won!"
      modalContent.appendChild(modalWinnerHuman);
      modalScore.textContent = `Computer Score: ${computerScore}, Your score: ${humanScore}`
      modalContent.appendChild(modalScore);
      buttons.forEach(function (button) {
        button.disabled = true;
      });
      modal.classList.add("show");
    }
  });
});

// function that randomly returns rock paper or scissors
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// function that defines the winner and keeps score
function playRound(humanSelection, computerSelection) {
  const content = document.createElement("div");
  content.classList.add("content");
  terminalScreen.appendChild(content);

  const choiceHistory = document.createElement("div");
  choiceHistory.classList.add("choiceHistory");
  choiceHistory.textContent = `>\nYou chose ${humanSelection} computer chose ${computerSelection}`;
  terminalScreen.appendChild(choiceHistory);

  if (humanSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    content.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanSelection == "rock" && computerSelection == "scissors") {
    humanScore++;
    content.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanSelection == "rock" && computerSelection == "rock") {
    content.textContent = `It's a draw. Your score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    content.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanSelection == "paper" && computerSelection == "rock") {
    humanScore++;
    content.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanSelection == "paper" && computerSelection == "paper") {
    content.textContent = `It's a draw. Your score: ${humanScore} \nComputer score: ${computerScore}`;
  } else if (humanSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    content.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanSelection == "scissors" && computerSelection == "paper") {
    humanScore++;
    content.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (humanSelection == "scissors" && computerSelection == "scissors") {
    content.textContent = `It's a draw. Your score: ${humanScore}, Computer score: ${computerScore}`;
  }
}
