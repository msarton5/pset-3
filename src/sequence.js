const readlineSync = require("readline-sync");

const Value1 = Number(readlineSync.question("\nEnter three numbers. \n\n"));
const Value2 = Number(readlineSync.question(""));
const Value3 = Number(readlineSync.question(""));

if (Number.isNaN(Value1)) {
    console.log("\nInvalid.\n")
} else if (Number.isNaN(Value2)) {
    console.log("\nInvalid.\n")
} else if (Number.isNaN(Value3)) {
    console.log("\nInvalid.\n")
} else if (Value1 < Value2 && Value2 < Value3) {
    console.log("\nStrictly Increasing.\n")
} else if (Value1 > Value2 && Value2 > Value3) {
    console.log("\nStrictly Decreasing.\n")
} else if (Value1 === Value2 && Value2 === Value3) {
    console.log("\nEqual.\n")
} else if (Value1 === Value2 && Value2 < Value3) {
    console.log("\nIncreasing.\n")
} else if (Value1 < Value2 && Value2 === Value3) {
    console.log("\nIncreasing.\n")
} else if (Value1 === Value2 && Value2 > Value3) {
    console.log("\nDecreasing.\n")
} else if (Value1 > Value2 && Value2 === Value3) {
    console.log("\nDecreasing.\n")
} else if (Value1 > Value2 && Value2 < Value3) {
    console.log("\nUnordered.")
} else if (Value1 < Value2 && Value2 > Value3) {
    console.log("\nUnordered.")
} else {
    console.log("\nInvalid.")
}
