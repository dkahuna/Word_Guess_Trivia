// these are the words used for the game
const legends = ["Bangalore", "Lifeline", "Bloodhound", "Valkyrie", "Caustic", "Wraith", "Pathfinder", "Fuse", "Crypto", "Gibraltar", "Horizon", "Octane", "Mirage", "Loba", "Rampart", "Revenant", "Seer", "Wattson", "Mad Maggie"];

let randomLegend = legends[Math.floor(Math.random() * legends.length)];
// this should randomize the object of the game
console.log(randomLegend); 

// storing the random Legend for the game
let name = null;

// game progession
let wins = 0;
let losses = 0;
let guessLeft = 7;

// letters guessed
var letters = [];

