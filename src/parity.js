const readlineSync = require("readline-sync");

const Integer = Number(readlineSync.question("\nEnter an integer: "));

const MIN = 0;
const MAX = 100;

if (Integer % 2 == 0) {
  console.log("\nEven.")
} else if (Integer % 2 == 1) {
  console.log("\nOdd.")
} else {
  console.log("\nInvalid.")
}
