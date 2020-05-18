const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const query = process.argv[2];
if (!query) {
  console.log("Please provide an address");
} else {
  geocode(query, (error, data) => {
    if (error) {
      return console.log("Error:", error);
    }

    forecast(data.longitude, data.latitude, (error, forecastData) => {
      if (error) {
        return console.log("Error", error);
      }

      console.log(data.name);
      console.log(forecastData);
    });
  });
}
