function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day}, ${hours}:${minutes}`;
}

//function search(event) {
//  event.preventDefault();
//  let cityElement = document.querySelector("#city");
//  let cityInput = document.querySelector("#city-input");
//  cityElement.innerHTML = cityInput.value;
//}

function showWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity-description").innerHTML =
    response.data.main.humidity;
  document.querySelector("#wind-description").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(city) {
  let apiKey = "800ce0b328242e404847541f27001927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "800ce0b328242e404847541f27001927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function celsiusToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = "68ºF";
  let maxTempToday = document.querySelector(".max-today");
  maxTempToday.innerHTML = "77ºF";
  let minTempToday = document.querySelector(".min-today");
  minTempToday.innerHTML = "54ºF";
  let minTempOne = document.querySelector("#min-day-one");
  minTempOne.innerHTML = "54ºF";
  let maxTempOne = document.querySelector("#max-day-one");
  maxTempOne.innerHTML = "72ºF";
  let minTempTwo = document.querySelector("#min-day-two");
  minTempTwo.innerHTML = "50ºF";
  let maxTempTwo = document.querySelector("#max-day-two");
  maxTempTwo.innerHTML = "64ºF";
  let minTempThree = document.querySelector("#min-day-three");
  minTempThree.innerHTML = "55ºF";
  let maxTempThree = document.querySelector("#max-day-three");
  maxTempThree.innerHTML = "70ºF";
  let minTempFour = document.querySelector("#min-day-four");
  minTempFour.innerHTML = "57ºF";
  let maxTempFour = document.querySelector("#max-day-four");
  maxTempFour.innerHTML = "73ºF";
  let minTempFive = document.querySelector("#min-day-five");
  minTempFive.innerHTML = "59ºF";
  let maxTempFive = document.querySelector("#max-day-five");
  maxTempFive.innerHTML = "77ºF";
}
function fahrenheitToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = "20ºC";
  let maxTempToday = document.querySelector(".max-today");
  maxTempToday.innerHTML = "25ºC";
  let minTempToday = document.querySelector(".min-today");
  minTempToday.innerHTML = "12ºC";
  let minTempOne = document.querySelector("#min-day-one");
  minTempOne.innerHTML = "12ºC";
  let maxTempOne = document.querySelector("#max-day-one");
  maxTempOne.innerHTML = "22ºC";
  let minTempTwo = document.querySelector("#min-day-two");
  minTempTwo.innerHTML = "10ºC";
  let maxTempTwo = document.querySelector("#max-day-two");
  maxTempTwo.innerHTML = "18ºC";
  let minTempThree = document.querySelector("#min-day-three");
  minTempThree.innerHTML = "13ºC";
  let maxTempThree = document.querySelector("#max-day-three");
  maxTempThree.innerHTML = "21ºC";
  let minTempFour = document.querySelector("#min-day-four");
  minTempFour.innerHTML = "14ºC";
  let maxTempFour = document.querySelector("#max-day-four");
  maxTempFour.innerHTML = "23ºC";
  let minTempFive = document.querySelector("#min-day-five");
  minTempFive.innerHTML = "15ºC";
  let maxTempFive = document.querySelector("#max-day-five");
  maxTempFive.innerHTML = "25ºC";
}

let dateElement = document.querySelector("#today");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", handleSubmit);

let fahrenheitButton = document.querySelector("#fahrenheit-button");
fahrenheitButton.addEventListener("click", celsiusToFahrenheit);

let celsiusButton = document.querySelector("#celsius-button");
celsiusButton.addEventListener("click", fahrenheitToCelsius);

let currentLocationButton = document.querySelector("#location-icon");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Porto");
