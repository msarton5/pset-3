const readlineSync = require("readline-sync");

const Temp = Number(readlineSync.question("\nEnter a temperature: "));
const Scale = String(readlineSync.question("Enter a scale: "));

if (Number.isNaN(Temp)) {
    console.log("Invalid.")
} else if (Temp <= 32 && Scale === "F") {
    console.log("\nSolid.\n")
} else if (Temp > 32 && Temp < 212 && Scale === "F") {
    console.log("\nLiquid.\n")
} else if (Temp >= 212 && Scale === "F") {
    console.log("\nGas.\n")
} else if (Temp <= 0 && Scale === "C") {
    console.log("\nSolid.\n")
} else if (Temp > 0 && Temp < 100 && Scale === "C") {
    console.log("\nLiquid.\n")
} else if (Temp >= 100 && "C") {
    console.log("\nGas.\n")
} else if (Temp <= 273.2 && Scale === "K") {
    console.log("\nSolid.\n")
} else if (Temp > 273.2 && Temp < 373.2 && Scale === "K") {
    console.log("\nLiquid.\n")
} else if (Temp >= 373.2 && Scale === "K") {
    console.log("\nGas.\n")
} else {
    console.log("\nInvalid.\n")
}
