let search = document.getElementById("input");
search.addEventListener("keypress", cl);
function cl(e) {
  if (e.keyCode == 13) {
    getdata(search.value);
    document.getElementById("web").style.display = "flex";
  }
}
function getdata(value) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      value +
      "&appid=e48296f0ffff24bd845ae0edbf37eeff"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (weather) {
      document.getElementById("city").innerText = weather.name;
      document.getElementById("temp").innerText = Math.round(weather.main.temp);
      document.getElementById("c").innerText = "°C";
      document.getElementById("weather").innerText = weather.weather[0].main;
      document.getElementById("min").innerText =
        "Min. " + weather.main.temp_min;
      document.getElementById("max").innerText =
        "Max. " + weather.main.temp_max;
    })
    .catch(function (err) {
      console.log(err);
      document.getElementById("city").innerText = weather.name;
      document.getElementById("temp").innerText = Math.round(weather.main.temp);
      document.getElementById("c").innerText = "°C";
      document.getElementById("weather").innerText = weather.weather[0].main;
      document.getElementById("min").innerText =
        "Min. " + weather.main.temp_min;
      document.getElementById("max").innerText =
        "Max. " + weather.main.temp_max;
    });
}
