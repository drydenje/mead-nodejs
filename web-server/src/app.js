const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));
app.use(express.static(path.join(publicDirectoryPath, "/help.html")));

// This won't run because of the publicDirectoryPath
// app.get("/", (req, res) => {
//   res.send("HELLO");
// });

app.get("/weather", (req, res) => {
  const weatherResponse = {
    location: "Chicago",
    temperature: 48,
  };

  res.send(weatherResponse);
});

app.listen(3000, () => {
  console.log("Server is running");
});
