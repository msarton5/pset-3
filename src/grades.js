const readlineSync = require("readline-sync");

const Grade = Number(readlineSync.question("\nEnter a grade: "));

const MIN = 0;
const MAX = 100;

if (Number.isNaN(Grade)) {
    console.log("\nInvalid.")
} else if (100 >= Grade && Grade >= 90) {
    console.log("\nYou received an A.")
} else if (90 > Grade && Grade >= 80) {
    console.log("\nYou received a B.")
} else if (80 > Grade && Grade >= 70) {
    console.log("\nYou received a C.")
} else if (70 > Grade && Grade >= 60) {
    console.log("\nYou received a D.")
} else if (60 > Grade && Grade >= 0) {
    console.log("\nYou received an F.")
} else {
    console.log("\nInvalid.")
}
