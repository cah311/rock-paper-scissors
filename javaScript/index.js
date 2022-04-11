
let playerWins = 0;
let computerWins = 0;
let playerSelection;
let computerSelection;
let round = 0; 

playerSelection = document.querySelectorAll('.btn');
playerSelection.forEach((button) => {
    button.addEventListener('click', function () {
        console.log(button.id);
        
        if (button.id === 'rBtn') {
           
            playerSelection = 'ROCK'
            console.log(playerSelection)
            //return playerSelection

        } else if (button.id === 'pBtn') {

            playerSelection = 'PAPER'
            console.log(playerSelection)
            //return playerSelection

        } else if (button.id === 'sBtn') {

            playerSelection = 'SCISSORS'
            console.log(playerSelection)
            //return playerSelection
        }

        return playerSelection
         
        
    });
    console.log(playerSelection)

})

   



/* Generates random selection for computer */ 
function computerPlay() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let computerPlay = options[Math.floor(Math.random()*options.length)];
    console.log("ComputerSelection:", computerPlay)
    computerSelection = computerPlay;

    return computerPlay; 
    
}
  
