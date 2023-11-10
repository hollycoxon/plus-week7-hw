function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-box");
  let city = document.querySelector(".city");
  city.innerHTML = searchInput.value;
}
let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", search);
