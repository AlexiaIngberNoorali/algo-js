const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Can you give me your first name please?');
let name = readlineSync.question('Can you give me your last name please?');
let city= readlineSync.question('Can you give me the name of your city please?');

let total = firstName + name + city;

//console.log(total);



