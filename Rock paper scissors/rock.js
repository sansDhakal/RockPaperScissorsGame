
const choices =["rock","paper","scissors"]
const displayPlayers = document.getElementById("displayPlayers");
const displayComputer = document.getElementById("displayComputer");
const displayResult = document.getElementById("displayResult");
const playersScoreDisplay = document.getElementById("playersScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playersScore = 0;
let computerScore = 0;

function startGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice){
        result = "Its a Tie!!!!!!!!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
                break;
        }
    }

    displayPlayers.textContent = `Player Picks: ${playerChoice}`;
    displayComputer.textContent = `Computer Picks: ${computerChoice}`;
    displayResult.textContent= result;

    displayResult.classList.remove("greenText","redText");

    switch(result){
        case "YOU WIN!":
            displayResult.classList.add("greenText");
            playersScore++;
            playersScoreDisplay.textContent = playersScore;
            break;
        case "YOU LOSE!":
            displayResult.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}