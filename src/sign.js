const readlineSync = require("readline-sync");

const Amount = Number(readlineSync.question("\nEnter a number: "));

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

if (Amount > 0) {
    console.log("\nPositive.")
} else if (Amount < 0) {
    console.log("\nNegative.")
} else if (Amount === 0) {
    console.log("\nZero.")
} else {
    console.log("\nInvalid.")
}
