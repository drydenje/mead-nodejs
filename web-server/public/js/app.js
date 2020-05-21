console.log("Client side javascript file is loaded");

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

fetch("http://localhost:3000/weather?address=Toronto").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      return console.log(data.error);
    }

    console.log(data);
  });
});
