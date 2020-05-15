const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=e02ad3bc30c07b6deec2837377f925dc&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.current);
  const degrees = response.body.current.temperature;
  const feelslike = response.body.current.feelslike;
  const descriptions = response.body.current.weather_descriptions[0];
  const message = `${descriptions}. It is currently ${degrees} degrees out. It feels like ${feelslike} degrees out.`;
  console.log(message);
});

// 'It is currently 58.5 degrees out. There is a 0% chance of rain.'
