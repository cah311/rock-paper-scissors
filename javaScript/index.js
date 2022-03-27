
let playerSelection = prompt("Rock, Paper, or Scissors");

function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let computerPlay = options[Math.floor(Math.random()*options.length)];
    return computerPlay; 
    
}


function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock') && (computerSelection == 'Scissors')) {
        
        let result = ("You Win! Rock beats Scissors");
        return result; 

    } else if ((playerSelection == 'Rock') && (computerSelection == 'Paper')) {
        
        let result = ("You lose! Paper beats Rock");
        return result; 

    } else if ((playerSelection == 'Paper') && (computerSelection == 'Rock')) {
        
        let result = ("You Win! Paper beats Rock");
        return result;

    } else if ((playerSelection == 'Paper') && (computerSelection == 'Scissors')) {

        let result = ("You lose! Scissors beats Paper");
        return result;

    } else if ((playerSelection == 'Scissors') && (computerSelection == 'Rock')) {
        
        let result = ("You lose! Rock beats Scissors");
        return result;

    } else if ((playerSelection == 'Scissors') && (computerSelection == 'Paper')) {

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