function getComputerChoice() {
    let choiceArray = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    console.log(randomChoice);
    return randomChoice;
}

function playerSelection() {
    let playerChoice = prompt("Choose between rock, paper, or scissors.")
    console.log(playerChoice);
    return playerChoice;
}

function mainGame(player, computer) {
    
}

getComputerChoice();
playerSelection();