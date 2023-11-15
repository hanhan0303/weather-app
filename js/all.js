const apiKey = '4f4e7c0abd74406a5581f288b4f31931';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


function checkWeather(city) {
  axios.get(apiUrl + city + `&appid=${apiKey}`)
  .then(function (response) {
    var data = response.data;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =
    Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'images/clouds.png';
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'images/clear.png';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'images/rain.png';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'images/drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'images/mist.png';
    }
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';

  })
  .catch(function (error) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  })
}


searchBtn.addEventListener("click", (e) => {
  if (searchBox.value.trim() == "") {
    alert("please input the city name!");
    return;
  } else {
    let cityName = searchBox.value.trim();
    checkWeather(cityName);
    searchBox.value = "";
  }
});
