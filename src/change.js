const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const Amount = Number(readlineSync.question("\nEnter a dollar amount: "));

const Q = 0.25
const D = 0.10
const N = 0.05
const P = 0.01

if (Number.isNaN(Amount)) {
    console.log("Invalid")
} else if (Amount < MIN || Amount > MAX) {
    console.log("Invalid")
} else {

  let Quarters = Math.floor(Amount/Q)
    let Amount1 = Amount % Q
  let Dimes = Math.floor(Amount1/D)
    let Amount2 = Amount1 % D
  let Nickels = Math.floor(Amount2/N)
    let Amount3 = Amount2 % N
  let Pennies = Math.ceil(Amount3/P)

    console.log("\n" + Quarters + " quarters, " + Dimes + " dimes, " + Nickels + " nickels, and " + Pennies + " pennies.\n")
}
