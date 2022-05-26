// these are the characters used for the game
const legends = ["Bangalore", "Lifeline", "Bloodhound", "Valkyrie", "Caustic", "Wraith", "Pathfinder", "Fuse", "Crypto", "Gibraltar", "Horizon", "Octane", "Mirage", "Loba", "Rampart", "Revenant", "Seer", "Wattson", "Mad Maggie", "New Castle"];

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
    // For start and/or resetting of the game
    let guessLeft = 7;

    // this should randomize the object of the game
randomLegend = legends[Math.floor(Math.random() * legends.length)];

// Splitting the random legend into individual letters to the variable
letterBlanks = randomLegend.split(""); 

// Assigning the amount of blanks from the random legend chosen
numBlanks = letterBlanks.length;

// Testing for random character
console.log(randomLegend); 

// An array to setup for the blanks from the random characther to show on the page
legendBlanks = [];

// Pushing the set of "blanks" for the game
for (var i = 0; i < numBlanks; i++) {
    legendBlanks.push("_");
}

console.log(legendBlanks);

// Prints the amount of blanks from the random character chosen
document.getElementById("blanks").innerHTML = legendBlanks.join(" ");



};




// Initalizing the GAME
startGame();