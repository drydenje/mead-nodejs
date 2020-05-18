const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Andrew",
      age: 27,
    },
    {
      name: "Sarah",
      age: 29,
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
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
