
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
gameText.textContent = "Choose Your Weapon... First to 5 wins the match!"

gameCommentText.appendChild(gameText);




//Rock Button
playerSelectionR = document.querySelector('#rBtn');
playerSelectionR.addEventListener('click', function () {
    playerSelection = "ROCK"
    computerPlay();
    if ((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS')) {
        
        playerWins++;

        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore);

        gameText.textContent = "Computer chooses Scissors: You Win! Rock beats Scissors";
        gameCommentText.appendChild(gameText);

    } else if ((playerSelection == 'ROCK') && (computerSelection == 'PAPER')) {
        
        computerWins++; 

        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore)

        gameText.textContent = "Computer chooses Paper:  You lose! Paper beats Rock";
        gameCommentText.appendChild(gameText);

    } else if (playerSelection == computerSelection) {
        
        gameText.textContent = "It's a tie!";
        gameCommentText.appendChild(gameText);

    }
    
    if (computerWins === 5) {

        alert("Computer Wins the match")
        computerWins = 0
        playerWins = 0
        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore)
        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore)
        
    } else if (playerWins === 5) {

        alert("You win the match!")
        computerWins = 0
        playerWins = 0
        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore)
        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore)

    }
    return

});


//Paper Button
playerSelectionP = document.querySelector('#pBtn');
playerSelectionP.addEventListener('click', function () {
    playerSelection = "PAPER"
    computerPlay();
    if ((playerSelection == 'PAPER') && (computerSelection == 'ROCK')) {
    
        playerWins++;

        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore)

        gameText.textContent = "Computer chooses Rock:  You Win! Paper beats Rock";
        gameCommentText.appendChild(gameText);


    } else if ((playerSelection == 'PAPER') && (computerSelection == 'SCISSORS')) {

        computerWins++; 

        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore)

        gameText.textContent = "Computer chooses Scissors:  You lose! Scissors beats Paper";
        gameCommentText.appendChild(gameText);


    } else if (playerSelection == computerSelection) {
        
        gameText.textContent = "It's a tie!";
        gameCommentText.appendChild(gameText);
        
    }
    
    if (computerWins === 5) {
        alert("Computer Wins the match")
        computerWins = 0
        playerWins = 0
        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore)
        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore)

    } else if (playerWins === 5) {
        alert("You win the match!")
        computerWins = 0
        playerWins = 0
        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore)
        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore)

    }
    return
});


//Scissors Button
playerSelectionS = document.querySelector('#sBtn');
playerSelectionS.addEventListener('click', function () {
    playerSelection = "SCISSORS"
    computerPlay();
    if ((playerSelection == 'SCISSORS') && (computerSelection == 'PAPER')) {
        
        playerWins++;

        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore)

        gameText.textContent = "Computer chooses Paper:  You Win! Scissors beats Paper";
        gameCommentText.appendChild(gameText);


    } else if ((playerSelection == 'SCISSORS') && (computerSelection == 'ROCK')) {
        
        computerWins++; 

        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore);

        gameText.textContent = "Computer chooses Rock:  You lose! Rock beats Scissors";
        gameCommentText.appendChild(gameText);

    } else if (playerSelection == computerSelection) {
        
        gameText.textContent = "It's a tie!";
        gameCommentText.appendChild(gameText);
        
    }
   
    if (computerWins === 5) {
        alert("Computer Wins the match")
        computerWins = 0
        playerWins = 0
        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore)
        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore)

    } else if (playerWins === 5) {
        alert("You win the match!")
        computerWins = 0
        playerWins = 0
        plrScore.textContent =  `${playerWins}`;
        plrScoreBoard.appendChild(plrScore)
        cmpScore.textContent =  `${computerWins}`;
        cmpScoreBoard.appendChild(cmpScore)

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




  
