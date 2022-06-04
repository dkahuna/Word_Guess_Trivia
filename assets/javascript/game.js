/* ======== VARIABLES ====== */

// these are the characters used for the game
let legends = ["bangalore", "lifeline", "bloodhound", "valkyrie", "caustic", "wraith", "pathfinder", "fuse", "crypto", "gibraltar", "horizon", "octane", "mirage", "loba", "rampart", "revenant", "seer", "wattson", "mad maggie", "new castle"];

// randomly chooses from the array to make blanks/object of game
let randomLegend = legends[Math.floor(Math.random()*legends.length)];

let blankLength = [];

// set amount of user guesses
let attempts = 7;

// Storing of the chosen character and splitting it
let answer = randomLegend.split("");
console.log(answer);

// Creating blanks from the random legend
for (i = 0; i < answer.length; i++) {
    blankLength.push("_");
};
console.log(blankLength);

// Printing the "blanks" into the DOM
let legendBlanks = function() {
    document.getElementById("blanks").innerHTML = blankLength.join(" ");
};

legendBlanks();

// printing the amount of guesses for the user
document.getElementById("guess").innerHTML = attempts;