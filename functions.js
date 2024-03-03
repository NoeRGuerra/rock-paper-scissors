function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if ((playerSelection + 1) % 3 === computerSelection) {
        return "User"
    }
    return "Computer";
}

function playGame() {
    let playerSelection;
    let computerChoice;
    let computerWins = 0;
    let userWins = 0
    let roundWinner;

    const options = ["Rock", "Scissors", "Paper"];
    const userScore = document.querySelector("#userScore");
    const computerScore = document.querySelector("#computerScore");
    const winnerResult = document.querySelector("#result");
    const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playerSelection = parseInt(button.value);
            computerChoice = getComputerChoice();
            roundWinner = playRound(playerSelection, computerChoice);
            console.log(`${options[playerSelection]}[U] vs ${options[computerChoice]}[C] = ${roundWinner}`)
            if (roundWinner == "User") {
                userWins++;
                userScore.textContent = userWins;
                winnerResult.textContent = "User wins round!"
            }
            else if (roundWinner == "Computer") {
                computerWins++;
                computerScore.textContent = computerWins;
                winnerResult.textContent = "Computer wins round!"
            }
            else {
                winnerResult.textContent = "Tie!";
            }
            if (userWins == 5 || computerWins == 5) {
                const finalWinner = userWins > computerWins ? "User" : "Computer";
                const scoreDiv = document.querySelector(".score");
                const winnerStr = document.createElement("p");
                winnerStr.textContent = `${finalWinner} is the winner!`;
                scoreDiv.appendChild(winnerStr);
                userWins = 0;
                computerWins = 0;
            }
        })
    })
}

playGame();