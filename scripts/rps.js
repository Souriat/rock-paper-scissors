// Create an array with "rock" "paper" "scissors" as options 

const possibleOutcomes = [
    "Rock",
    "Paper",
    "Scissors"
];


//create variables for results
let userResult
let computerResult
let resultMessage
let rounds = 0
let computerScore = 0
let playerScore = 0
let scoreMessage

// Create a function called computerPlay
function computerPlay() {
    // Randomly assign Rock Paper or Scissors into computerResult variable from array when ran
    computerResult = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)];
};

//create a fuction called userPlay
function userPlay() {
//prompt user for input Rock Paper or Scissors & assign to userResult
userResult = prompt("Rock, Paper or Scissors?");
//match case of computerPlay array
userResult = userResult.substring(0, 1).toUpperCase() + userResult.substring(1).toLowerCase();
};


//create a fuction that runs userPlay and computerPlay functions
function playRound() {
    userPlay();
    console.log(userResult);
    computerPlay();
    console.log(computerResult);
    printResults();
    console.log(resultMessage);
    scoreMessage = ("Your score is " + playerScore + " the computers score is " + computerScore);
    console.log(scoreMessage);
}

// assign statements to win/loss outcomes

function printResults() {
    if (userResult === "Paper" && computerResult === "Scissors") {
            rounds++
            computerScore++
            resultMessage = ("You Lose, Computer picked " + computerResult + " and you picked " + userResult + ", " + computerResult + " beats " + userResult); 
        }

    else if (userResult === "Paper" && computerResult === "Rock") {
        rounds++
        playerScore++
        resultMessage = ("You Win!, Computer picked " + computerResult + " and you picked " + userResult + ", " + userResult + " beats " + computerResult);
     }

    else if (userResult === "Paper" && computerResult === "Paper") {
        rounds++
        resultMessage = ("Its a tie, Computer picked " + computerResult + " and you picked " + userResult + ", " + "try again!");
     }

     else if (userResult === "Rock" && computerResult === "Paper") {
        rounds++
        computerScore++
        resultMessage = ("You Lose, Computer picked " + computerResult + " and you picked " + userResult + ", " + computerResult + " beats " + userResult); 
    }

    else if (userResult === "Rock" && computerResult === "Scissors") {
        rounds++
        playerScore++
        resultMessage = ("You Win!, Computer picked " + computerResult + " and you picked " + userResult + ", " + userResult + " beats " + computerResult);
 }

    else if (userResult === "Rock" && computerResult === "Rock") {
        rounds++
        resultMessage = ("Its a tie, Computer picked " + computerResult + " and you picked " + userResult + ", " + "try again!");
 }

      else if (userResult === "Scissors" && computerResult === "Rock") {
        rounds++
        computerScore++
        resultMessage = ("You Lose, Computer picked " + computerResult + " and you picked " + userResult + ", " + computerResult + " beats " + userResult); 
    }

    else if (userResult === "Scissors" && computerResult === "Paper") {
        rounds++
        playerScore++
        resultMessage = ("You Win!, Computer picked " + computerResult + " and you picked " + userResult + ", " + userResult + " beats " + computerResult);
 }

    else if (userResult === "Scissors" && computerResult === "Scissors") {
        rounds++
        resultMessage = ("Its a tie, Computer picked " + computerResult + " and you picked " + userResult + ", " + "try again!");
    }
};


// create a function called game
function game() {

    // loop game 5 times

        while (rounds <= 4) {
        playRound()
        }

    // if 5 rounds completed return game over message

        if (rounds >= 5) {
            return ("Game Over type reset() to start again")
        }
    
}

function reset () {
userResult = ""
computerResult = ""
resultMessage = ""
rounds = 0
computerScore = 0
playerScore = 0
scoreMessage = ""

}