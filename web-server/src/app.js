const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    message: "Here are some helpful suggestions",
  });
});

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
