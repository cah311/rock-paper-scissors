
let playerWins = 0;
let computerWins = 0;
let playerSelection;
let computerSelection;
let round = 0; 

//Generates Player Score Text 
document.getElementById('.plrScoreBoard');

const plrTitle = document.createElement('p');
plrTitle.classList.add('plrTitle');
plrTitle.textContent = "Player Score: ";
const plrScore = document.createElement('p');
plrScore.classList.add('plrScore');
plrScore.textContent =  `${playerWins}`;

plrScoreBoard.appendChild(plrTitle)
plrScoreBoard.appendChild(plrScore)


//Generates Computer Score Text
document.getElementById('.cmpScoreBoard');

const cmpTitle = document.createElement('p');
cmpTitle.classList.add('cmpTitle');
cmpTitle.textContent = "Computer Score: ";
const cmpScore = document.createElement('p');
cmpScore.classList.add('cmpScore');
cmpScore.textContent =  `${computerWins}`;

cmpScoreBoard.appendChild(cmpTitle)
cmpScoreBoard.appendChild(cmpScore)


//Create in-game text 
document.getElementById('.gameCommentText');

const gameText = document.createElement('p');
gameText.classList.add('gameText');
gameText.textContent = "Choose Your Weapon!"

gameCommentText.appendChild(gameText);







playerSelectionR = document.querySelector('#rBtn');
playerSelectionR.addEventListener('click', function () {
    playerSelection = "ROCK"
    console.log(playerSelection)
    computerPlay();
    if ((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS')) {
        
        let result = ("You Win! Rock beats Scissors");
        playerWins++;
        console.log(result);

        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore)

    } else if ((playerSelection == 'ROCK') && (computerSelection == 'PAPER')) {
        
        let result = ("You lose! Paper beats Rock");
        computerWins++; 
        console.log(result);

        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore)


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

        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore)

    } else if ((playerSelection == 'PAPER') && (computerSelection == 'SCISSORS')) {
        
        let result = ("You lose! Paper beats Rock");
        computerWins++; 
        console.log(result);

        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore)

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

        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore)

    } else if ((playerSelection == 'SCISSORS') && (computerSelection == 'PAPER')) {
        
        let result = ("You lose! Paper beats Rock");
        computerWins++; 
        console.log(result);

        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore)

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




  
