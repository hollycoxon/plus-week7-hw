function temperatureUpdate(response) {
  let temp = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = temp;
}

function cityUpdate(response) {
  let city = response.data.city;
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = city;
  temperatureUpdate(response);
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-box");

  let apiKey = "eb90b6ft43fead476caf1eb7234o9610";
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}`;
  axios.get(apiUrl).then(cityUpdate);
}
let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", search);
