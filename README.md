# rock-paper-scissors PT 1
1. Understand the Problem 
    - reword it if needed
2. Plan 
    - answer general questions 
    --does program have user interface?
    --whatwill it look like?
    --What inputs will it have? Will user enter datata or will you get input from somewhere else?
    --What is the desired output
    --Given the inputs, what steps are neccessary to return desired output
3. Psudocode 
    - write out code in natural language that will solve the last question from before
4. Divide and conquer
    - identify subproblems from the big problem, dont go after big problem from the start. Break it down and start with the smallest problems and work your way up
   

    --------------------------------------------------

    1. Problem: 
      - write a function that takes two parameters, the 'playerSelection' - one in which the user provides, and 'computerSelection' - one that the computer generates. This function will then take those two parameters and compare them, then return a string to declare the winner between the two. These wil be based on the rules of "rock Paper Scissors"

      
      

    2. Plan
        --no interface at the moment, will play out of the console
        --will be played against the computer, will prompt for user input, and will return result based on generated computer selection
        --has to give an answer like "You lose! Paper beats Rock" 
        --has to be case incensitive
        --should go for 5 rounds 
        --utilize a playRound() function that tests two parametes 
        --utilize a game() function that calls the playRound() function inside of it. This will keep track of number of rounds won. 
        --should utilize loops to play through each round
    
    3. Psudocode
    When a user enters a choice of 'Rock, Paper, or Scissors'
    Loop through rounds up to 5 while keeping score of rounds won
        If user picks Rock and computer picks Paper, user loses. Print result and mark score.
        If user picks Rock and computer picks Scissors, user wins. Print result and mark score.
        If user picks Paper and computer picks Scissors, user loses. Print result and mark score.
        If user picks Paper and computer picks Rock, user wins. Print result and mark score.
        If user picks Scissors and computer picks Rock, user loses. Print result and mark score.
        If user picks Scissors and computer picks Paper, user wins. Print result and mark score.
        If user and computer picks are the same, its a draw. Print result and mark score. 
    After 5 rounds print the results of the 5 game match and end the game. 
       
    
    4. Subproblems
    - need to create variable to keep track of game rounds
    - need to create variables to keep track of round winners
    - need to get pick from user 
    - need to generate computer pick 
    - need to compare the two and record winner based on parameters 
    - need to print all resluts 
       

