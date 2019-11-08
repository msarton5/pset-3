const readlineSync = require("readline-sync");

const Year = Number(readlineSync.question("\nEnter a year: "));

if (Number.isNaN(Year)) {
    console.log("Invalid.")
} else if (Year % 4 === 0 ) {
    console.log("\n" + Year + " is a leap year.\n")
} else if (Year % 4 === 1) {
    console.log("\n" + Year + " is not a leap year.\n")
} else if (Year % 4 === 2) {
    console.log("\n" + Year + " is not a leap year.\n")
} else if (Year % 4 === 3) {
    console.log("\n" + Year + " is not a leap year.\n")
} else {
    console.log("Invalid.")
}
