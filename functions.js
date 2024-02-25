function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection.toLowerCase());
    let playerWon = true;
    if (playerSelection === "Rock" && computerSelection === "Paper"){
        playerWon = false;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        playerWon = false;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        playerWon = false;
    }
    return playerWon;
}

function capitalize(word){
    return word[0].toUpperCase() + word.slice(1);
}

function playGame(){
    let playerSelection;
    let computerChoice;
    let computerWins = 0;
    let userWins = 0
    let userWon;

    for (let i=0;i<5;i++){
        playerSelection = capitalize(prompt("Enter your selection"));
        computerChoice = getComputerChoice();
        userWon = playRound(playerSelection, computerChoice);
        if (userWon){
            userWins++;
            console.log(`You win! ${playerSelection} beats ${computerChoice}`);
        }
        else{
            computerWins++;
            console.log(`You lose! ${computerChoice} beats ${playerSelection}`);
        }
    }
    if (userWins > computerWins){
        console.log("You win!");
    }
    else{
        console.log("You lose!");
    }
}

playGame();