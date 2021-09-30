let location1 = 3;
let location2 = 4;
let location3 = 5;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
    } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
    alert("HIT!");
    hits = hits + 1;
    if (hits == 3) {
    isSunk = true;
    alert("You sank my battleship!");
    }
    } else {
    alert("MISS");
    }
    }
    }
    let stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3/guesses);


























/*let sherlock = {
    surname: "Holmes",
    address: {city: "London"}
};

let john = {
    surname: "Watson",
    address: sherlock.address
};

john.surname = "Lennon";
john.address.city = "Malibu";

console.log(sherlock.address.city);
console.log(john.address.city); */

/* let count = "";
for (let i=0; i<7; i++) {
    count = count + "#";
    console.log(count);
} 



for (let i=1; i<=100; i++) {
  
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");  
    }
    else if (i % 5 === 0) {
        console.log("Fizz");
    }
    else if (i % 3 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
};

let count = "";
for (let i=0; i<7; i++) {
    count = count + "#";
    console.log(count);
} 


var name = "joe";
var i = 0;
while (i < 2) {
    document.write("Happy Birthday to you. <br>");
    i = i + 1;
}
   document.write(`Happy Birthday dear ${name} <br>`);
   document.write("Happy Birthday to you. <br>"); */


   /* var word = "bottles";
   var count = 99;
   while (count > 0) {
   console.log(count + " " + word + " of beer on the wall");
   console.log(count + " " + word + " of beer,");
   console.log("Take one down, pass it around,");
   count = count - 1;
   
   if (count > 0) {
   console.log(count + " " + word + " of beer on the wall.");
   } else {
   console.log("No more " + word + " of beer on the wall.");
   }
}; */