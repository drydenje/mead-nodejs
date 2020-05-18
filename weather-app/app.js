const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

forecast(-79.3849, 43.6529, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

geocode("Toronto", (error, data) => {
  console.log("Error:", error);
  console.log("Data:", data);
});
