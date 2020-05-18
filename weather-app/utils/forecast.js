const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e02ad3bc30c07b6deec2837377f925dc&query=${latitude},${longitude}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      const weather = {
        degrees: response.body.current.temperature,
        feelslike: response.body.current.feelslike,
        description: response.body.current.weather_descriptions[0],
      };

      callback(
        undefined,
        `${weather.description}. It is currently ${weather.degrees} degrees out. It feels like ${weather.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
