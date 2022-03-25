
let playerSelection = prompt("Rock, Paper, or Scissors");

function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let computerPlay = options[Math.floor(Math.random()*options.length)];
    return computerPlay; 
    
}


function playRound(playerSelection, computerSelection) {
    
}


const computerSelection = computerPlay();

console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

// function game() {
//     for (let i = 0; i <= 5; i++) {
//         //code here
//     }
// }