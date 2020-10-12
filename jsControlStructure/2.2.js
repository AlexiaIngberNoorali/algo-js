const readlineSync = require("readline-sync");

let minNumber = new Number (readlineSync.question("Can you give a min number ?")); 
let currentNumber = new Number (readlineSync.question("Can you give a current number ?")); 
let maxNumber = new Number (readlineSync.question("Can you give a max number ?")); 



if ((currentNumber > minNumber) && (currentNumber < maxNumber)){
     console.log(currentNumber);
} else if (minNumber > maxNumber) {
    console.error("You motherfucker are wrong, leave now or prepare to face tragic destiny");
}
 

 

