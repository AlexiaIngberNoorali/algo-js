const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question("Can you give 1 decimal number ?"); //14
let secondNumber = readlineSync.question("Can you give 1 decimal number ?"); //3

let modulo = 14 % 3;
console.log(modulo);
