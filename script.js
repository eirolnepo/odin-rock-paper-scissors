function getComputerChoice() {
    let choiceArray = [
        "rock",
        "paper",
        "scissors"
    ];

    let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    console.log("computer: " + randomChoice);
    return randomChoice;
}

function playerSelection() {
    let playerChoice = prompt("Choose between rock, paper, or scissors.");
    console.log("user: " + playerChoice);
    return playerChoice.toLowerCase();
}

function oneRound(player, computer) {
    if (player == "rock" && computer == "scissors"){
        console.log("You win! Rock beats Scissors");
    } else if (player == "scissors" && computer == "rock"){
        console.log("You lose! Rock beats Scissors");
    } else if (player == "paper" && computer == "rock"){
        console.log("You win! Paper beats Rock")
    } else if (player == "rock" && computer == "paper"){
        console.log("You lose! Paper beats Rock")
    } else if (player == "scissors" && computer == "paper"){
        console.log("You win! Scissors beats Paper")
    } else if (player == "paper" && computer == "scissors"){
        console.log("You lose! Scissors beats Paper")
    } else if (player == "rock" && computer =="rock") {
        console.log("You tied!");
    } else if (player == "scissors" && "scissors") {
        console.log("You tied!");
    } else if (player == "paper" && computer == "paper"){
        console.log("You tied!");
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        oneRound(playerSelection(), getComputerChoice());
    }
}

game();