// these are the characters used for the game
let legends = ["Bangalore", "Lifeline", "Bloodhound", "Valkyrie", "Caustic", "Wraith", "Pathfinder", "Fuse", "Crypto", "Gibraltar", "Horizon", "Octane", "Mirage", "Loba", "Rampart", "Revenant", "Seer", "Wattson", "Mad Maggie", "New Castle"];

// storing the random Legend for the game
let randomLegend = "";

// game progession
let winCounter = 0;
let lossCounter = 0;
let guessLeft = 7;

// Storing the letters of the chosen character into an array
let letterBlanks = [];

// The amount of blanks for the random character chosen
let numBlanks = 0;

// Will carry the correct letters guessed and blanks for the game
let blanksAndSuccesses = [];

// letters guessed
var letters = [];


// =============Basis of the Game========================

// randomly chooses from the array to make blanks/object of game
randomLegend = legends[Math.floor(Math.random() * legends.length)];

// Testing for random character
console.log(randomLegend); 

// Splitting the random legend into individual letters to the variable
letterBlanks = randomLegend.split(""); 

// Assigning the amount of blanks from the random legend chosen
numBlanks = letterBlanks.length;

// An array to setup for the blanks from the random characther to show on the page
legendBlanks = [];

// Pushing the set of "blanks" for the game
for (var i = 0; i < numBlanks; i++) {
    legendBlanks.push("_");
}

console.log(legendBlanks);

// Prints the amount of blanks from the random character chosen
document.getElementById("blanks").innerHTML = legendBlanks.join(" ");

// Printing the start of guesses for the user, which is 7
let remainGuesses = function() {
    document.querySelector("#guess").innerHTML = guessLeft;
    console.log(guessLeft);
}
// invoking the function to populate the number of guesses
remainGuesses();

// displaying the guesses given and 'joining' a comma to seperate each guess
let currGuesses = function() {
    document.querySelector("#usedGuess").innerHTML = letters.join(", ");
};

// ==============Events============================

// User presses key(letter guess) function is called....
document.onkeyup = function(event) {
    
    // reducing the amount of guesses per User's attempt to solve game
    guessLeft--;
    // when the "chances" reach zero, end of game
    if (guessLeft === 0) {
        lossCounter++;
        document.querySelector("#losses").innerHTML = lossCounter;
    };

    // capturing what the user has guessed
    let chosenLetters = event.key.toLowerCase();

    // showing what the User has guessed thus far
    letters.push(chosenLetters);

    // invoking the functions within the event will update the game for the letters guessed and how many chances are left
    currGuesses();
    remainGuesses();


    // checking if "guess" matches string of game
};