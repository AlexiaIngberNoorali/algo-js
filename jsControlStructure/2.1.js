const readlineSync = require("readline-sync");

let questionAge = readlineSync.question("What is your age?"); 

//let age1 = 18;

if (questionAge >= 18) {
    console.log("You are an adult");
   } else  {
       console.log("You are not yet an adult");
   }
