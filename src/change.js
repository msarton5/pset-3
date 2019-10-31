const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

const Q = 0.25
const D = 0.10
const N = 0.05
const P = 0.01

if (Number.isNaN(amount)) {
    console.log("Invalid")
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid")
} else {
    console.log(Q + "quarters," + D + "dimes," + N + " nickels, and " + P + "pennies.")
}
