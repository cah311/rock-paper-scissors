
let playerWins = 0;
let computerWins = 0;
//game();


/* Prompt for user selection */ 
//function playerChoice() {
    
    
let playerChoice;
let round = 0; 

    document.getElementById('rBtn').addEventListener('click', function () {
        playerChoice = "ROCK";
        round ++;
        console.log("PlayerSelection:", playerChoice)
    });
    document.getElementById('pBtn').addEventListener('click', function () {
        playerChoice = "PAPER";
        round ++;
        console.log("PlayerSelection:", playerChoice)
    });
    document.getElementById('sBtn').addEventListener('click', function () {
        playerChoice = "SCISSORS";
        round ++;
        console.log("PlayerSelection:", playerChoice)
    });


    // const btn = document.querySelectorAll('button');
    // const rBtn = document.getElementById("rBtn")
    // const pBtn = document.getElementById("pBtn")
    // const sBtn = document.getElementById("sBtn")

    // rBtn.onclick = function() {
    //     playerChoice = "ROCK"
    //     //console.log(playerChoice);
    //     return playerChoice;
    //     playRound();
    // }
    // pBtn.onclick = function() {
    //     playerChoice = "PAPER"
    //     //console.log(playerChoice);
    //     return playerChoice;
    //     playRound();
    // }
    // sBtn.onclick = function() {
    //     playerChoice = "SCISSORS"
    //     //console.log(playerChoice);
    //     return playerChoice;
    //     playRound();
    // }
   
   
    // do {
    //     choice  = prompt("Rock, Paper, or Scissors");
    //     choice = choice.toUpperCase();
    // } while ((choice !== "ROCK") && (choice !== "PAPER") && (choice !== "SCISSORS")) 
    // return choice;
    
//}


/* Generates random selection for computer */ 
function computerPlay() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let computerPlay = options[Math.floor(Math.random()*options.length)];
    return computerPlay; 
    
}
  
/* Compares selections and returns a winner for the round */ 
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS')) {
        
        let result = ("You Win! Rock beats Scissors");
        playerWins++;
        return result; 

    } else if ((playerSelection == 'ROCK') && (computerSelection == 'PAPER')) {
        
        let result = ("You lose! Paper beats Rock");
        computerWins++; 
        return result; 

    } else if ((playerSelection == 'PAPER') && (computerSelection == 'ROCK')) {
        
        let result = ("You Win! Paper beats Rock");
        playerWins++;
        return result;

    } else if ((playerSelection == 'PAPER') && (computerSelection == 'SCISSORS')) {

        let result = ("You lose! Scissors beats Paper");
        computerWins++;
        return result;

    } else if ((playerSelection == 'SCISSORS') && (computerSelection == 'ROCK')) {
        
        let result = ("You lose! Rock beats Scissors");
        computerWins++;
        return result;

    } else if ((playerSelection == 'SCISSORS') && (computerSelection == 'PAPER')) {

        let result = ("You Win! Scissors beats Paper");
        playerWins++;
        return result;

    } else if (playerSelection == computerSelection) {
        
        let result = ("It's a tie!");

        return result;
        
    }  
    return playRound();
}
/* Plays the full game up to 5 wins for a single player */ 
function game() {

    i = round; 
    
    for ( i = 1; i <= 500; i++) {        
    
        console.log("----------------------------------");
        console.log("Round:", i);
        console.log("playerWins: ", playerWins);
        console.log("computerWins: ", computerWins);
        
        const playerSelection = playerChoice;
        console.log("playerSelection: ", playerSelection);
        
        
        const computerSelection = computerPlay();
        console.log("computerSelection: ", computerSelection);

        playRound();
        console.log(playRound(playerSelection, computerSelection));

        if (playerWins == 5 || computerWins == 5) {
            if (playerWins > computerWins) {
                console.log("----------------------------------");
                console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
                console.log("You win the game!");
                console.log("Score:", playerWins, "to", computerWins);
                console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
                console.log("----------------------------------");

            } else if (playerWins < computerWins) {
                console.log("----------------------------------");
                console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
                console.log("You lose the game."); 
                console.log("Score:", playerWins, "to", computerWins);
                console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
                console.log("----------------------------------");
            } else if (playerWins == computerWins) {
                console.log("----------------------------------");
                console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
                console.log("It's a draw!");
                console.log("Score:", playerWins, "to", computerWins);
                console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
                console.log("----------------------------------");
            }
            //return 
        }

    }
        
}
