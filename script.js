let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3) + 1
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

function roundResult(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        return 'its a draw!'
      }
      if (computerChoice === 'ROCK' && playerChoice === "PAPER") {
        playerScore++;
        return 'you win!';
       
      }
      if (computerChoice === 'ROCK' && playerChoice === "SCISSORSS") {
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



function game() {
  for (let i=1; playerScore !== 5 && computerScore !== 5; i++) {
    console.log(`Round ${i}`);

      let computerChoice = getComputerChoice();
      let playerChoice = prompt("Please enter your choice").toUpperCase();
      let gameResult = roundResult(playerChoice, computerChoice)
      console.log("Computer choice: " + computerChoice);
      console.log ("Player choice: " + playerChoice);
      console.log(gameResult);
      console.log("Player score: " + playerScore + " | Computer score: " + computerScore);
  }
}

game()