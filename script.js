let playerScore = 0;
let computerScore = 0;

let playerChoice = '';

function setPlayerChoice(choice) {
    playerChoice = choice;
    playRound();
}

document.addEventListener("DOMContentLoaded", () => {
    const rock = document.getElementById("rock");
    rock.addEventListener("click", () => {
        setPlayerChoice("ROCK")
    });
    paper.addEventListener("click", () => setPlayerChoice('PAPER'));
    scissors.addEventListener("click", () => setPlayerChoice('SCISSORS'));
})

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    let choice = "";
    switch (randomNumber) {
        case 1:
            choice = 'ROCK';
            break;
        case 2:
            choice = 'PAPER';
            break;
        case 3:
            choice = 'SCISSORS';
            break;
    }

    return (choice);
};

function getRoundResult(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        return 'its a draw!'
    }
    if (computerChoice === 'ROCK' && playerChoice === "PAPER") {
        playerScore++;
        return 'you win!';

    }
    if (computerChoice === 'ROCK' && playerChoice === "SCISSORS") {
        computerScore++;
        return 'you lost!'
    }
    if (computerChoice === 'PAPER' && playerChoice === "SCISSORS") {
        playerScore++;
        return 'you win!';
    }
    if (computerChoice === 'PAPER' && playerChoice === "ROCK") {
        computerScore++;
        return 'you lose!'
    }
    if (computerChoice === 'SCISSORS' && playerChoice === "ROCK") {
        playerScore++;
        return 'you win!';
    }
    if (computerChoice === 'SCISSORS' && playerChoice === "PAPER") {
        computerScore++;
        return 'you lose!'
    }
    else {
        return 'Please, type: ROCK, PAPER or SCISSORS';
    }
};



function playRound() {
    // for (let i = 1; playerScore !== 1 && computerScore !== 1; i++) {
    // console.log(`Round ${i}`);
    let computerChoice = getComputerChoice();
    let thisRoundResult = getRoundResult(playerChoice, computerChoice);
    // }s
    
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerChoice").innerHTML = playerChoice;
    document.getElementById("computerChoice").innerHTML = computerChoice;
    document.getElementById("roundResult").innerHTML = thisRoundResult;


    

    if (playerScore >= 5 || computerScore >= 5) {
        document.getElementById("gameResultWindow").style.display = "block";
        document.getElementById("game-container").style.display = "none";
        document.getElementById("gameResult").innerText = gameResult();
       }
    

    const gameRestartButton = document.getElementById("gameRestartButton");
    gameRestartButton.addEventListener("click", () => {
        window.location.reload();
    });
}   

function gameResult() {
    if (playerScore === 5) {
        
        return 'You won this game';
    }
    if (computerScore === 5) {
        return 'Computer won this game';

    }

}



