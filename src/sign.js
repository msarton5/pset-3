const readlineSync = require("readline-sync");

const Amount = Number(readlineSync.question("\nEnter a number: "));

let A = Number.MIN_SAFE_INTEGER;
let B = Number.MAX_SAFE_INTEGER;

if (Amount > 0) {
    console.log("\nPositive.")
} else if (Amount < 0) {
    console.log("\nNegative.")
} else if (Amount === 0) {
    console.log("\nZero.")
} else {
    console.log("\nInvalid.")
}
