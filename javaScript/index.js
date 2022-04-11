
let playerWins = 0;
let computerWins = 0;
let playerSelection;
let computerSelection;
let round = 0; 

playerSelectionR = document.querySelector('#rBtn');
playerSelectionR.addEventListener('click', function () {
    playerSelection = "ROCK"
    console.log(playerSelection)
    computerPlay();
    if ((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS')) {
        
        let result = ("You Win! Rock beats Scissors");
        playerWins++;
        console.log(result);

    } else if ((playerSelection == 'ROCK') && (computerSelection == 'PAPER')) {
        
        let result = ("You lose! Paper beats Rock");
        computerWins++; 
        console.log(result);

    } else if (playerSelection == computerSelection) {
        
        let result = ("It's a tie!");
        console.log(result);
        
    }
    console.log(playerWins);
    console.log(computerWins);
    if (computerWins === 5) {
        alert("Computer Wins the match")
    } else if (playerWins === 5) {
        alert("You win the match!")
    }
    return

});

playerSelectionP = document.querySelector('#pBtn');
playerSelectionP.addEventListener('click', function () {
    playerSelection = "PAPER"
    console.log(playerSelection)
    computerPlay();
    if ((playerSelection == 'PAPER') && (computerSelection == 'ROCK')) {
        
        let result = ("You Win! Rock beats Scissors");
        playerWins++;
        console.log(result);

    } else if ((playerSelection == 'PAPER') && (computerSelection == 'SCISSORS')) {
        
        let result = ("You lose! Paper beats Rock");
        computerWins++; 
        console.log(result);

    } else if (playerSelection == computerSelection) {
        
        let result = ("It's a tie!");
        console.log(result);
        
    }
    console.log(playerWins);
    console.log(computerWins);
    if (computerWins === 5) {
        alert("Computer Wins the match")
    } else if (playerWins === 5) {
        alert("You win the match!")
    }
    return
});

playerSelectionS = document.querySelector('#sBtn');
playerSelectionS.addEventListener('click', function () {
    playerSelection = "SCISSORS"
    console.log(playerSelection)
    computerPlay();
    if ((playerSelection == 'SCISSORS') && (computerSelection == 'ROCK')) {
        
        let result = ("You Win! Rock beats Scissors");
        playerWins++;
        console.log(result);

    } else if ((playerSelection == 'SCISSORS') && (computerSelection == 'PAPER')) {
        
        let result = ("You lose! Paper beats Rock");
        computerWins++; 
        console.log(result);

    } else if (playerSelection == computerSelection) {
        
        let result = ("It's a tie!");
        console.log(result);
        
    }
    console.log(playerWins);
    console.log(computerWins);
    if (computerWins === 5) {
        alert("Computer Wins the match")
    } else if (playerWins === 5) {
        alert("You win the match!")
    }
    return
});
    


/* Generates random selection for computer */ 
function computerPlay() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let computerPlay = options[Math.floor(Math.random()*options.length)];
    console.log("ComputerSelection:", computerPlay)
    computerSelection = computerPlay;

    return computerPlay; 
    
}


if (computerWins === 5) {
    alert("Computer Wins the match")
} else if (playerWins === 5) {
    alert("You win the match!")
}

  
