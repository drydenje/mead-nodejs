const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=e02ad3bc30c07b6deec2837377f925dc&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   // console.log(response.body.current);
//   const degrees = response.body.current.temperature;
//   const feelslike = response.body.current.feelslike;
//   const descriptions = response.body.current.weather_descriptions[0];
//   const message = `${descriptions}. It is currently ${degrees} degrees out. It feels like ${feelslike} degrees out.`;
//   console.log(message);
// });

const mapboxUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWF0c29zIiwiYSI6ImNrYTh0cXNrbTAwNXQycnBoNnY1Y2tnOTgifQ.f5OxrVclDzoKyUK5Auo7bQ";
request({ url: mapboxUrl, json: true }, (error, response) => {
  const placeName = response.body.features[0].place_name;
  const coords = {
    long: response.body.features[0].center[0],
    lat: response.body.features[0].center[1],
  };
  // const message = `${placeName}`;
  console.log(coords);
});
// Geocoding
// Address -> Lat/Long -> Weather
