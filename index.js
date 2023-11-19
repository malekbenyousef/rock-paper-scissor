const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');
const roundNumberText = document.querySelector('#roundNumberText');
const finalResultText = document.querySelector('#finalResultText');
const resetBtn = document.querySelector('#resetBtn');
let player;
let computer;
let result;
let roundNumber = 0;
let computerWins = 0;
let playerWins = 0;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    if (roundNumber < 5) {
        roundNumber++;
        player = button.textContent;
        computerChoice();
        playerText.textContent = `player ${player}`;
        computerText.textContent = `computer ${computer}`;
        resultText.textContent = checkWinner();
        roundNumberText.textContent = `rounds played ${roundNumber}`;

        if (checkWinner() == "COMPUTER WINS") {
            computerWins += 1;
        } else if (checkWinner() == "PLAYER WINS") {
            playerWins += 1;
        }

        if (roundNumber === 5) {
            announceFinalResult();
        }
    }
}));
resetBtn.addEventListener("click", () => {
  roundNumber = 0;
  computerWins = 0;
  playerWins = 0;
  finalResultText.textContent = '';
  roundNumberText.textContent = '';
});


function computerChoice() {
    const randNumber = Math.floor(Math.random() * 3) + 1;

    switch (randNumber) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {
    if (computer == player) {
        return "IT IS A TIE";
    } else if (computer == "PAPER" && player == "ROCK" || computer == "SCISSORS" && player == "PAPER" || computer == "ROCK" && player == "SCISSORS") {
        return "COMPUTER WINS";
    } else {
        return "PLAYER WINS";
    }
}

function announceFinalResult() {
    finalResultText.textContent = `Final Score: ${computerWins} (Computer), ${playerWins} (Player)`;
    if (computerWins > playerWins) {
        finalResultText.textContent += " - Computer Wins!";
    } else if (computerWins < playerWins) {
        finalResultText.textContent += " - Player Wins!";
    } else {
        finalResultText.textContent += " - It's a Tie!";
    }
}
