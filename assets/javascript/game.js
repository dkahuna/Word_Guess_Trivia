// JavaScript Document
var $ = function(id) {
    return document.getElementById(id);
};

// these are the characters used for the game
let legends = ["bangalore", "lifeline", "bloodhound", "valkyrie", "caustic", "wraith", "pathfinder", "fuse", "crypto", "gibraltar", "horizon", "octane", "mirage", "loba", "rampart", "revenant", "seer", "wattson", "mad maggie", "new castle"];

// randomly chooses from the array to make blanks/object of game
let randomLegend = Math.floor(Math.random()*20);

// Storing of the chosen character
let answer = legends[randomLegend];

// populate the underscore for the game
let gameBlanks = answer.length;

// storing the amount of underscores for the game
let display = [gameBlanks];

// winning the game
let win = gameBlanks;

// creating an array for the game from the math random
let word = answer.split(' ');

// given chances for user to guess
let attemptsLeft = 7;

let output = " ";

let userLetter = "";

// =============Basis of the Game========================

var setup = function() {
    for (var i = 0; i < answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("blanks").innerHTML = output;
    output = " ";
}

var submit = function() {
    output = "";
    userLetter = $("letter")
}

// initializing the game
setup();
