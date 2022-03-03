// these are the characters used for the game
const legends = ["Bangalore", "Lifeline", "Bloodhound", "Valkyrie", "Caustic", "Wraith", "Pathfinder", "Fuse", "Crypto", "Gibraltar", "Horizon", "Octane", "Mirage", "Loba", "Rampart", "Revenant", "Seer", "Wattson", "Mad Maggie"];

// storing the random Legend for the game
let randomLegend = "";

// Storing the letters of the chosen character into an array
let letterBlanks = [];

// game progession
let winCounter = 0;
let lossCounter = 0;
let guessLeft = 7;

// letters guessed
var letters = [];


// Functions created for the game
function startGame() {
    // Resets game
    let guessLeft = 7;

    // this should randomize the object of the game
randomLegend = legends[Math.floor(Math.random() * legends.length)];
console.log(randomLegend); 

}

startGame();