const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=e02ad3bc30c07b6deec2837377f925dc&query=40,-75&units=f`;

const request = http.request(url, (response) => {
  let data = "";

  // fires when data comes in (could be multiple times)
  response.on("data", (chunk) => {
    data = data + chunk.toString();
    // console.log(chunk);
  });

  // when the data stream is finished
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body.current);
  });
});

request.on("error", (error) => {
  console.log("An error:", error);
});

request.end();
