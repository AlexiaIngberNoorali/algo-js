const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question("Can you tell me your shoeSize "); 

let birthYear = readlineSync.question("What is your Birthyear?"); 

let myShoe = (40 + 5) * 50;

let substract = (myShoe - 1990) + 1766;

console.log(substract);
