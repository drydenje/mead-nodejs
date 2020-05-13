const getNotes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");

const msg = getNotes();
const command = process.argv[2];

console.log("Args:", process.argv);

if (command === "add") {
  console.log("Adding note");
} else if (command === "remove") {
  console.log("Removing note!");
}
