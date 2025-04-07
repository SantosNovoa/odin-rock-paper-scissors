// const rock = document.querySelector(".rock");
// const paper = document.querySelector(".paper");
// const scissors = document.querySelector(".scissors");

// function alertFunctionRock() {
//   alert("You chose rock.");
// }

// function alertFunctionPaper() {
//   alert("You chose paper.");
// }

// function alertFunctionScissors() {
//   alert("You chose scissors.");
// }

// rock.addEventListener("click", alertFunctionRock);
// paper.addEventListener("click", alertFunctionPaper);
// scissors.addEventListener("click", alertFunctionScissors);

// let myString = "";
let humanSelection = "";

const buttons = document.querySelectorAll("button");

const terminalScreen = document.querySelector(".fakeScreen");
console.log(terminalScreen);

const winner = document.createElement("div");
winner.classList.add("winner");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    humanSelection = `${button.className}`;
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (computerScore == 5) {
      
      winner.textContent = "\nComputer won.";
      terminalScreen.appendChild(winner);

      buttons.forEach(function (button) {
        button.disabled = true;
      });
    } else if (humanScore == 5) {
      
      winner.textContent = "\nYou won!";
      terminalScreen.appendChild(winner);

      buttons.forEach(function (button) {
        button.disabled = true;
      });
    }
  });
});

// rock.addEventListener('click', function() {
//     myString = "Rock";
//     console.log(myString); // Output: Button was clicked!
//   });
// console.log(myString);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// function getHumanChoice() {
//   rock.addEventListener("click", function () {
//     myString = "Rock";
//     // Output: Button was clicked!
//     return myString
//   });
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {

  const content = document.createElement("div");
  content.classList.add("content");
  terminalScreen.appendChild(content);

  const choiceHistory = document.createElement("div");
  choiceHistory.classList.add("choiceHistory");
  choiceHistory.textContent = `>\nYou chose ${humanSelection} computer chose ${computerSelection}`;
  terminalScreen.appendChild(choiceHistory)

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
      content.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
  } else if (humanSelection == "paper" && computerSelection == "rock") {
      humanScore++;
      content.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
  } else if (humanSelection == "paper" && computerSelection == "paper") {
      content.textContent =  `It's a draw. Your score: ${humanScore} \nComputer score: ${computerScore}`
  } else if (humanSelection == "scissors" && computerSelection == "rock") {
      computerScore++;
      content.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
  } else if (humanSelection == "scissors" && computerSelection == "paper") {
      humanScore++;
      content.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
  } else if (humanSelection == "scissors" && computerSelection == "scissors") {
      content.textContent = `It's a draw. Your score: ${humanScore}, Computer score: ${computerScore}`
  }
}

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   // function playRound(humanSelection, computerSelection) {
//   //   console.log(
//   //     `\nYou chose ${humanSelection} computer chose ${computerSelection}`
//   //   );

//   //   if (humanSelection == "rock" && computerSelection == "paper") {
//   //     computerScore++;
//   //     console.log(
//   //       `You lost that round.\nYour score: ${humanScore} \nComputer score: ${computerScore}`
//   //     );
//   //   } else if (humanSelection == "rock" && computerSelection == "scissors") {
//   //     humanScore++;
//   //     console.log(
//   //       `You won that round!\nYour score: ${humanScore} \nComputer score: ${computerScore}`
//   //     );
//   //   } else if (humanSelection == "rock" && computerSelection == "rock") {
//   //     console.log(
//   //       `It's a draw.\nYour score: ${humanScore} \nComputer score: ${computerScore}`
//   //     );
//   //   } else if (humanSelection == "paper" && computerSelection == "scissors") {
//   //     computerScore++;
//   //     console.log(
//   //       `You lost that round.\nYour score: ${humanScore} \nComputer score: ${computerScore}`
//   //     );
//   //   } else if (humanSelection == "paper" && computerSelection == "rock") {
//   //     humanScore++;
//   //     console.log(
//   //       `You won that round!\nYour score: ${humanScore} \nComputer score: ${computerScore}`
//   //     );
//   //   } else if (humanSelection == "paper" && computerSelection == "paper") {
//   //     console.log(
//   //       `It's a draw.\nYour score: ${humanScore} \nComputer score: ${computerScore}`
//   //     );
//   //   } else if (humanSelection == "scissors" && computerSelection == "rock") {
//   //     computerScore++;
//   //     console.log(
//   //       `You lost that round.\nYour score: ${humanScore} \nComputer score: ${computerScore}`
//   //     );
//   //   } else if (humanSelection == "scissors" && computerSelection == "paper") {
//   //     humanScore++;
//   //     console.log(
//   //       `You won that round!\nYour score: ${humanScore} \nComputer score: ${computerScore}`
//   //     );
//   //   } else if (
//   //     humanSelection == "scissors" &&
//   //     computerSelection == "scissors"
//   //   ) {
//   //     console.log(
//   //       `It's a draw.\nYour score: ${humanScore} \nComputer score: ${computerScore}`
//   //     );
//   //   }
//   // }

//   // Game loop
//   // do {

//   //   let humanSelection = "";
//   //   buttons.forEach((button) => {
//   //     button.addEventListener("click", () => {
//   //       humanSelection = `${button.className}`;
//   //       console.log(humanSelection);
//   //     });
//   //   });

//   //   let computerSelection = getComputerChoice();
//   //   playRound(humanSelection, computerSelection);
//   // } while (computerScore < 5 && humanScore < 5);

//   // Determines winner

//   // if (computerScore > humanScore) {
//   //   console.log("\nComputer won.");
//   // } else {
//   //   console.log("\nYou won!");
//   // }
// }

// playGame();
