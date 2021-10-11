// Create an array with "rock" "paper" "scissors"

const possibleOutcomes = [
    "Rock",
    "Paper",
    "Scissors"
];


//create variables for results
let userResult
let computerResult

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
function playRound(playerSelection, computerSelection) {
    playerSelection = userPlay();
    console.log(userResult);
    computerSelection = computerPlay();
    console.log(computerResult)
    // compare results and return relevant win/loss text for each possible outcome
    if (userResult === "Paper" && computerResult === "Scissors") {
            return ("You Lose, Computer picked " + computerResult + " and you picked " + userResult + ", " + computerResult + " beats " + userResult); 
        }

    else if (userResult === "Paper" && computerResult === "Rock") {
        return ("You Win!, Computer picked " + computerResult + " and you picked " + userResult + ", " + userResult + " beats " + computerResult);
     }

    else if (userResult === "Paper" && computerResult === "Paper") {
        return ("Its a tie, Computer picked " + computerResult + " and you picked " + userResult + ", " + "try again!");
     }

    };


