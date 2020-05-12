const fs = require("fs");

// fs.writeFileSync("notes.txt", "My name is Jeremy. \n");

fs.appendFileSync("notes.txt", "This is the appended text.\n");
