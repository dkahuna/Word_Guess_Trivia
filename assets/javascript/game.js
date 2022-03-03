// these are the characters used for the game
const legends = ["Bangalore", "Lifeline", "Bloodhound", "Valkyrie", "Caustic", "Wraith", "Pathfinder", "Fuse", "Crypto", "Gibraltar", "Horizon", "Octane", "Mirage", "Loba", "Rampart", "Revenant", "Seer", "Wattson", "Mad Maggie"];

// storing the random Legend for the game
let randomLegend = "";

// Storing the letters of the chosen character into an array
let letterBlanks = [];

// The amount of blanks for the random character chosen
let numBlanks = 0;

// Will carry the correct letters guessed and blanks for the game
let blanksAndSuccesses = [];

// letters guessed
var letters = [];

// game progession
let winCounter = 0;
let lossCounter = 0;
let guessLeft = 7;

// =====================================

// Functions created for the game
function startGame() {
    // Resets game
    let guessLeft = 7;

    // this should randomize the object of the game
randomLegend = legends[Math.floor(Math.random() * legends.length)];
console.log(randomLegend); 

// Splitting the random legend into individual letters to the variable on line 8
letterBlanks = randomLegend.split(""); 
}

startGame();