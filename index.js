
function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  

  function Winner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissor') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  

  function updateResults(result, rounds, playerScore, computerScore) {
    document.getElementById('results').innerText = result;
    document.getElementById('roundsplayed').innerText = `Rounds played: ${rounds}`;
    document.getElementById('playerwins').innerText = `Player wins: ${playerScore}`;
    document.getElementById('computerwins').innerText = `Computer wins: ${computerScore}`;
  }
  

  function playRound(playerChoice) {
    const computerChoice = getRandomChoice();
    const result = Winner(playerChoice, computerChoice);
  
    if (result === 'You win!') {
      playerWins++;
    } else if (result === 'Computer wins!') {
      computerWins++;
    }
  
    roundsPlayed++;
  
    
    updateResults(result, roundsPlayed, playerWins, computerWins);
  }
  
  document.getElementById('rock').addEventListener('click', function () {
    playRound('rock');
  });
  
  document.getElementById('paper').addEventListener('click', function () {
    playRound('paper');
  });
  
  document.getElementById('scissor').addEventListener('click', function () {
    playRound('scissor');
  });
  

  let roundsPlayed = 0;
  let playerWins = 0;
  let computerWins = 0;
  
    
  