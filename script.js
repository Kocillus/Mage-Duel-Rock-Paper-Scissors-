let playerScore = 0;
let computerScore = 0;

let playerLives = 5;
let computerLives = 5;

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
        computerLives--;
        return 'you win!';

    }
    if (computerChoice === 'ROCK' && playerChoice === "SCISSORS") {
        computerScore++;
        playerLives--;
        return 'you lost!'
    }
    if (computerChoice === 'PAPER' && playerChoice === "SCISSORS") {
        playerScore++;
        computerLives--;
        return 'you win!';
    }
    if (computerChoice === 'PAPER' && playerChoice === "ROCK") {
        computerScore++;
        playerLives--;
        return 'you lose!'
    }
    if (computerChoice === 'SCISSORS' && playerChoice === "ROCK") {
        playerScore++;
        computerLives--;
        return 'you win!';
    }
    if (computerChoice === 'SCISSORS' && playerChoice === "PAPER") {
        computerScore++;
        playerLives--;
        return 'you lose!'
    }
    else {
        return 'Please, type: ROCK, PAPER or SCISSORS';
    }
};


function playRound() {

    let computerChoice = getComputerChoice();
    let thisRoundResult = getRoundResult(playerChoice, computerChoice);
    
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerChoice").innerHTML = playerChoice;
    document.getElementById("computerChoice").innerHTML = computerChoice;
    document.getElementById("roundResult").innerHTML = thisRoundResult;

    //Visualisation of health of Player and Computer
    let fullHeart = "<img class=\"heart\" src=\"./img/heart.png\">";
    let emptyHeart = "<img class=\"heart\" src=\"./img/emptyheart.png\">";


    if (playerLives === 4) {
        document.getElementById("playerLives").innerHTML = (fullHeart + fullHeart + fullHeart + fullHeart + emptyHeart)
        
    };

    if (playerLives === 3) {
        document.getElementById("playerLives").innerHTML = (fullHeart + fullHeart + fullHeart + emptyHeart + emptyHeart)
    };

    if (playerLives === 2) {
        document.getElementById("playerLives").innerHTML = (fullHeart + fullHeart + emptyHeart + emptyHeart + emptyHeart)
    };

    if (playerLives === 1) {
        document.getElementById("playerLives").innerHTML = (fullHeart + emptyHeart + emptyHeart + emptyHeart + emptyHeart)
    };

    if (playerLives === 0) {
        document.getElementById("playerLives").innerHTML = (emptyHeart + emptyHeart + emptyHeart + emptyHeart + emptyHeart)
    };

    if (computerLives === 4) {
        document.getElementById("computerLives").innerHTML = (fullHeart + fullHeart + fullHeart + fullHeart + emptyHeart)
        
    };

    if (computerLives === 3) {
        document.getElementById("computerLives").innerHTML = (fullHeart + fullHeart + fullHeart + emptyHeart + emptyHeart)
    };

    if (computerLives === 2) {
        document.getElementById("computerLives").innerHTML = (fullHeart + fullHeart + emptyHeart + emptyHeart + emptyHeart)
    };

    if (computerLives === 1) {
        document.getElementById("computerLives").innerHTML = (fullHeart + emptyHeart + emptyHeart + emptyHeart + emptyHeart)
    };
    
    if (computerLives === 0) {
        document.getElementById("computerLives").innerHTML = (emptyHeart + emptyHeart + emptyHeart + emptyHeart + emptyHeart)
    };

    if (playerScore >= 5 || computerScore >= 5) {
        document.getElementById("gameResultWindow").style.display = "block";
        document.getElementById("button-container").style.display = "none";
        document.getElementById("gameResult").innerText = gameResult();
       };
    
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



