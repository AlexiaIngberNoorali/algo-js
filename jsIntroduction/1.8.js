const readlineSync = require("readline-sync");

let question1 = readlineSync.question("What is your favourite animal ?"); 
console.log("3 questions remaining")
let question2 = readlineSync.question("What is your favourite food ?"); 
console.log("2 questions remaining")
let question3 = readlineSync.question("Where would like to live the most ?");
console.log("1 questions remaining") 
let question4 = readlineSync.question("What is your horoscop sing?"); 

let text1 = "big fat panda";
let text2 = "rice and fish";
let text3 = "Mumbai"
let text4 = "Vergo"

console.log("You will meet soon in your dreams a " + text1 + " that will mistake you for " + text2 + ". He will suck up your dreams and move to " + text3 + " and will become the first celibate and " + text4 + " panda living in a big city.")