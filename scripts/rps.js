// Create an array with "rock" "paper" "scissors"

const possibleOutcomes = [
    "Rock",
    "Paper",
    "Scissors"
];

// Create a function called computerPlay
function computerPlay() {
    // Create variable result
    // Randomly assign Rock Paper or Scissors into result variable from array when ran
    let result = randomItem = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)];
    console.log(result)
}


