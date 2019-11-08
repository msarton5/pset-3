const readlineSync = require("readline-sync");

const Month = String(readlineSync.question("\nEnter a month: "));

if (Month == "jan") {
    console.log("\n\n31 days.\n")
} else if (Month == "feb") {
    console.log("\n28 or 29 days.\n")
} else if (Month == "mar") {
    console.log("\n31 days.\n")
} else if (Month == "apr") {
    console.log("\n30 days.\n")
} else if (Month == "may") {
    console.log("\n31 days.\n")
} else if (Month == "jun") {
    console.log("\n30 days.\n")
} else if (Month == "jul") {
    console.log("\n31 days.\n")
} else if (Month == "aug") {
    console.log("\n31 days.\n")
} else if (Month == "sep") {
    console.log("\n30 days.\n")
} else if (Month == "oct") {
    console.log("\n31 days.\n")
} else if (Month == "nov") {
    console.log("\n30 days.\n")
} else if (Month == "dec") {
    console.log("\n31 days.\n")
} else {
    console.log("\nInvalid.\n")
}
