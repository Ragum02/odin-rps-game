console.log("Hello World");

// rock paper scissors game
// take user input
// Randomize computer input
// compare both input

const randomizeChoice = Math.floor(Math.random() * 3) + 1;
const userInput = prompt("Rock,Paper,Scissors?: ")


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
    if(string === "Rock"){
        return "Rock"
    } else if (string === "Paper") {
        return "Paper";
    } else if (string === "Scissors"){
        return "Scissors";
    } else {
        alert("Invalid answer");
    }
}
console.log(getComputerChoice(randomizeChoice));
console.log(getHumanChoice(userInput.value))