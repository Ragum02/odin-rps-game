console.log("Hello World");

// rock paper scissors game
// take user input
// Randomize computer input
// compare both input


let humanScore = 0;
let computerScore = 0;
let round = 0;
const result = document.querySelector("#display")
const score = document.querySelector("#score");
const selectButtonList = document.querySelector("#select")



function getComputerChoice(number){
    if(number === 1){
        return "rock";
    } else if (number === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

selectButtonList.addEventListener("click", function getHumanChoice(event) {
result.textContent = "";
 if(round === 5){
    if (humanScore > computerScore) {
        const finalWin = document.createElement("span");
        finalWin.textContent = `You win the game! You: ${humanScore} Computer: ${computerScore}`;
        result.appendChild(finalWin);
    } else if (humanScore < computerScore) {
        const finalLose = document.createElement("span");
        finalLose.textContent = `You lose the game! You: ${humanScore} Computer: ${computerScore}`;
        result.appendChild(finalLose);
    } else {
        const finalTie = document.createElement("span");
        finalTie.textContent = "It's a tie!";
        result.appendChild(finalTie);
    }
} else {
    round++
    let playerSelection = event.target.id;
    if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"){
        const randomizeChoice = Math.floor(Math.random() * 3) + 1;
        const computerSelection = getComputerChoice(randomizeChoice);
        playRound(playerSelection, computerSelection);
    }
}})
;


/*function getHumanChoice(string){
    if(string === "rock"){
        return "Rock"
    } else if (string === "paper") {
        return "Paper";
    } else if (string === "scissors"){
        return "Scissors";
    } else {
        alert("Invalid answer");
    }
}*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        const tieMsg = document.createElement("span");
        tieMsg.textContent = "It's a tie for this round!";
        result.appendChild(tieMsg);
    } else if ( (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        const winMsg = document.createElement("span");
        winMsg.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
        result.appendChild(winMsg);
        humanScore++;
    } else {
        const loseMsg = document.createElement("span");
        loseMsg.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
        result.appendChild(loseMsg);
        computerScore++;
    }
}

