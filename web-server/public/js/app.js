const getWeather = (location = "") => {
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          return console.log(data.error);
        }

        console.log(data);
      });
    }
  );
};

const weatherForm = document.querySelector("#searchForm");
const search = document.querySelector("input");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  getWeather(location);
});
