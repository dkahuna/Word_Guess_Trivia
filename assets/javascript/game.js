// these are the characters used for the game
let legends = ["bangalore", "lifeline", "bloodhound", "valkyrie", "caustic", "wraith", "pathfinder", "fuse", "crypto", "gibraltar", "horizon", "octane", "mirage", "loba", "rampart", "revenant", "seer", "wattson", "mad maggie", "new castle"];

// randomly chooses from the array to make blanks/object of game
let randomLegend = legends[Math.floor(Math.random()*legends.length)];

// Storing of the chosen character
let answer = randomLegend;

console.log(answer);


