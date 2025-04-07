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
const span = document.getElementsByClassName("close")[0]

terminalScreen.scrollTop = terminalScreen.scrollHeight;
// function to autoscroll when new score data is outputted to the terminal
window.setInterval(function () {
  terminalScreen.scrollTop = terminalScreen.scrollHeight;
}, 100);

// looping through all buttons to select them
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    humanSelection = `${button.className}`;
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // determines winner and disables the buttons once either user or computer has reached 5 wins
    if (computerScore == 5) {
      winnerComputer.textContent = "\nComputer won.";
      terminalScreen.appendChild(winnerComputer);

      buttons.forEach(function (button) {
        button.disabled = true;
      });
      modal.style.display = "block";
    } else if (humanScore == 5) {
      winnerHuman.textContent = "\nYou won!";
      terminalScreen.appendChild(winnerHuman);

      buttons.forEach(function (button) {
        button.disabled = true;
      });
      modal.style.display = "block";
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
