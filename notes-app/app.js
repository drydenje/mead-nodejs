const getNotes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");

const msg = getNotes();

console.log(msg);
console.log(validator.isEmail("me@me.com"));
console.log(validator.isURL("https://mead.io"));
console.log(chalk.black.bgGreen("SUCCESS"));
console.log(chalk.bold.inverse("BOLD AND INVERSED"));
