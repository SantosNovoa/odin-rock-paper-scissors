console.log("Hello World!")

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]

    const random = Math.floor(Math.random() * choices.length);

    return console.log(choices[random]);
}

function getHumanChoice () {
    let choice = prompt("Enter rock, paper, or scissors!")
    return console.log(choice);
}

getComputerChoice()
getComputerChoice()
getComputerChoice()

getHumanChoice()
