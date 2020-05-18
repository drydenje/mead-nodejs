const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const query = process.argv[2];
if (!query) {
  console.log("Please provide an address");
} else {
  geocode(query, (error, { location, longitude, latitude } = {}) => {
    if (error) {
      return console.log("Error:", error);
    }

    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return console.log("Error", error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
