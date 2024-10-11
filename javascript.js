console.log("Hello World");

// rock paper scissors game
// take user input
// Randomize computer input
// compare both input


let humanScore = 0;
let computerScore = 0;
let round = 1;

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
console.log(`You win this round ! ${humanChoice} beat ${computerChoice}`);
humanScore++;
console.log("You have: " + humanScore + " points");
    } else if (humanChoice > computerChoice){
        console.log(`You lose this round ! ${humanChoice} lose against ${computerChoice} `);
        computerScore++;
console.log("Computer has: " + computerScore + " points");
    } else if (humanChoice === computerChoice){
        console.log("It's a Draw for this round!");
    } else {
        console.log("Invalid user answer !");
    }
}

function playGame(round){
   while(round <= 5){
    const randomizeChoice = Math.floor(Math.random() * 3) + 1;
    const userInput = prompt("Rock,Paper,Scissors?: ").toLowerCase();
playRound(getHumanChoice(userInput),getComputerChoice(randomizeChoice));
    round++;
} if(humanScore > computerScore){
console.log (`You win the game!  You: ${humanScore} Computer: ${computerScore}`);
} else if (humanScore < computerScore) {
    console.log(`You lose the game! You: ${humanScore} Computer: ${computerScore}`);
} else {
    console.log("DRAAAW !");
}
}

playGame(round);