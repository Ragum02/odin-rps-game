console.log("Hello World");

// rock paper scissors game
// take user input
// Randomize computer input
// compare both input

const randomizeChoice = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(number){
    if(number === 1){
        return "Rock";
    } else if (number === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice(randomizeChoice));