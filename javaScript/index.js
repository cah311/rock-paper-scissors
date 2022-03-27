
 let choice = prompt("Rock, Paper, or Scissors");
 let playerSelection = choice.toUpperCase();
 console.log("playerSelection: ", playerSelection);

function computerPlay() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let computerPlay = options[Math.floor(Math.random()*options.length)];
    return computerPlay; 
    
}


function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS')) {
        
        let result = ("You Win! Rock beats Scissors");
        return result; 

    } else if ((playerSelection == 'ROCK') && (computerSelection == 'PAPER')) {
        
        let result = ("You lose! Paper beats Rock");
        return result; 

    } else if ((playerSelection == 'PAPER') && (computerSelection == 'ROCK')) {
        
        let result = ("You Win! Paper beats Rock");
        return result;

    } else if ((playerSelection == 'PAPER') && (computerSelection == 'SCISSORS')) {

        let result = ("You lose! Scissors beats Paper");
        return result;

    } else if ((playerSelection == 'SCISSORS') && (computerSelection == 'ROCK')) {
        
        let result = ("You lose! Rock beats Scissors");
        return result;

    } else if ((playerSelection == 'SCISSORS') && (computerSelection == 'PAPER')) {

        let result = ("You Win! Scissors beats Paper");
        return result;

    } else if (playerSelection == computerSelection) {
        
        let result = ("It's a tie!");
        return result;
        
    }

    
    
}


const computerSelection = computerPlay();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

// function game() {
//     for (let i = 0; i <= 5; i++) {
//         //code here
//     }
// }