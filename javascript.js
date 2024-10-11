console.log("Hello World");

// rock paper scissors game
// take user input
// Randomize computer input
// compare both input

const randomizeChoice = Math.floor(Math.random() * 3) + 1;
const userInput = prompt("Rock,Paper,Scissors?: ").toLowerCase();
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(number){
    if(number === 1){
        return "Rock";
    } else if (number === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(string){
    if(string === "rock"){
        return "Rock"
    } else if (string === "paper") {
        return "Paper";
    } else if (string === "scissors"){
        return "Scissors";
    } else {
        alert("Invalid answer");
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice < computerChoice){
console.log(`${humanChoice} beat ${computerChoice}`);
humanScore++;
console.log("You have: " + humanScore + " points");
    } else if (humanChoice > computerChoice){
        console.log(`${computerChoice} beat ${humanChoice}`);
        computerScore++;
console.log("Computer has: " + computerScore + " points");
    } else{
        console.log("Draw !");
    }
}

playRound(getHumanChoice(userInput),getComputerChoice(randomizeChoice));
console.log(getComputerChoice(randomizeChoice));
console.log(getHumanChoice(userInput))