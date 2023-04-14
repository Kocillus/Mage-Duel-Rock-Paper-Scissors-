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
        const startNewGame = document.getElementById("newGameButton");
        startNewGame.addEventListener("click", () => {
            document.getElementById("newGameWindow").style.display = "none";
            document.getElementById("game-container").style.display = "block";
    })})

document.addEventListener("DOMContentLoaded", () => {
    const fire = document.getElementById("fire");
    fire.addEventListener("click", () => {
        setPlayerChoice("FIRE")
    });
    water.addEventListener("click", () => setPlayerChoice('WATER'));
    earth.addEventListener("click", () => setPlayerChoice('EARTH'));
})

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    let choice = "";
    switch (randomNumber) {
        case 1:
            choice = 'FIRE';
            break;
        case 2:
            choice = 'WATER';
            break;
        case 3:
            choice = 'EARTH';
            break;
    }

    return (choice);
};

function getRoundResult(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        return 'Your spells neutralize each other!'
    }
    if (computerChoice === 'FIRE' && playerChoice === "WATER") {
        playerScore++;
        computerLives--;
        return 'Success! Evil Wizard get damage!';

    }
    if (computerChoice === 'FIRE' && playerChoice === "EARTH") {
        computerScore++;
        playerLives--;
        return 'Watch out! You get damage!'
    }
    if (computerChoice === 'WATER' && playerChoice === "EARTH") {
        playerScore++;
        computerLives--;
        return 'Success! Evil Wizard get damage!';
    }
    if (computerChoice === 'WATER' && playerChoice === "FIRE") {
        computerScore++;
        playerLives--;
        return 'Watch out! You get damage!'
    }
    if (computerChoice === 'EARTH' && playerChoice === "FIRE") {
        playerScore++;
        computerLives--;
        return 'Success! Evil Wizard get damage!';
    }
    if (computerChoice === 'EARTH' && playerChoice === "WATER") {
        computerScore++;
        playerLives--;
        return 'Watch out! You get damage!'
    }
    else {
        return 'Please, type: FIRE, WATER or EARTH';
    }
};


function playRound() {

    let computerChoice = getComputerChoice();
    let thisRoundResult = getRoundResult(playerChoice, computerChoice);
    
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
        document.getElementById("computerPortrait").style.transform = "translateY(150px) rotate(90deg)"
        document.getElementById("computerPortrait").style.transition = "4s"
        return 'You saved the kingdom!';
    }
    if (computerScore === 5) {
        document.getElementById("playerPortrait").style.transform = "translateY(150px) rotate(-90deg) "
        document.getElementById("playerPortrait").style.transition = "4s"
        return 'You failed. Evil Wizard has destroyed the kingdom.';

    }

}



