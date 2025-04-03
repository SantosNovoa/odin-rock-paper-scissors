console.log("Hello World!")

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]

    const random = Math.floor(Math.random() * choices.length);

    return console.log(choices[random]);
}

getComputerChoice()
getComputerChoice()
getComputerChoice()