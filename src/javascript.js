function formatDate(date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekDays[date.getDay()];
  let hour = date.getHours();
  let minute = date.getMinutes().toString().padStart(2, "0");
  let time = `${hour}:${minute}`;
  let dateTimeElement = document.querySelector("#dateTime");
  dateTimeElement.innerHTML = `${day} ${time}`;
}

function weatherUpdate(response) {
  let temp = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = temp;
  let humidity = Math.round(response.data.temperature.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;
  let wind = Math.round(response.data.wind.speed * 10) / 10;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind}km/h`;
  let description = response.data.condition.description;
  let descriptionElement = document.querySelector(".description");
  descriptionElement.innerHTML = description;
  let icon = response.data.condition.icon_url;
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `
    <img
      src="${icon}"
      alt="${description}"
    />
  `;
  let epochDate = response.data.time * 1000;
  let date = new Date(epochDate);
  formatDate(date);
}

function cityUpdate(response) {
  let city = response.data.city;
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = city;
  weatherUpdate(response);
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
