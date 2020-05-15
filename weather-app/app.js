const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=e02ad3bc30c07b6deec2837377f925dc&query=37.8267,-122.4233";

request(url, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
