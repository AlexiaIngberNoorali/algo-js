//Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)


const readlineSync = require("readline-sync");

let chooseNumber = new Number (readlineSync.question("Enter a number between 1 and 7 ?"));


if (chooseNumber == 1) {   
     console.log("monday");
} 

else if (chooseNumber == 2) {
    console.log("tuesday");
} 
else if (chooseNumber == 3) {
    console.log("wednesday");
 } 

else if (chooseNumber == 4) {
       
        console.log("thursday");
    }
else  if (chooseNumber == 5) {
    console.log("friday");
}
            
           
else if (chooseNumber == 6) {
    console.log("saturday");
            }
else  if  (chooseNumber == 7) {
    console.log("sunday");
            }
 


