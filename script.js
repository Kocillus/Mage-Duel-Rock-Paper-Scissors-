let computerChoice = getComputerChoice();
let playerChoice = prompt("Please enter your choice").toUpperCase();
let gameResult = roundResult(playerChoice, computerChoice)

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3) + 1
    let choice = "";

    if (randomNumber === 1) {
        choice = 'ROCK';
    }
    if (randomNumber === 2) {
        choice = 'PAPER'
    }
    if (randomNumber === 3) {
        choice = 'SCISSORS'
    }

    return (choice);
};

function roundResult(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        return 'its a draw!'
      }
      if (computerChoice === 'ROCK' && playerChoice === "PAPER") {
        return 'you win!'
      }
      if (computerChoice === 'ROCK' && playerChoice === "SCISSORSS") {
        return 'you lost!'
      }
      if (computerChoice === 'PAPER' && playerChoice === "SCISSORS") {
        return 'you win!'
      }
      if (computerChoice === 'PAPER' && playerChoice === "ROCK") {
        return 'you lose!'
      }
      if (computerChoice === 'SCISSORS' && playerChoice === "ROCK") {
        return 'you win!'
      }
      if (computerChoice === 'SCISSORS' && playerChoice === "PAPER") {
        return 'you lose!'
      }
      else {
        return 'Please, type: ROCK, PAPER or SCISSORS';
      }
};

function game() {

}

console.log("Computer choice: " + computerChoice);
console.log ("Player choice: " + playerChoice)
console.log(gameResult)


