const readlineSync = require("readline-sync");

let firstNumber = new Number (readlineSync.question("Can you give 1 decimal number ?"));
let secondNumber = new Number (readlineSync.question("Can you give 1 decimal number ?"));
let multiNumer = Math.round(firstNumber) * secondNumber;

console.log(multiNumer);

