const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid")
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid")
} else {
    console.log(Q + "quarters," + D + "dimes," + N + " nickels, and " + P + "pennies.")
}
