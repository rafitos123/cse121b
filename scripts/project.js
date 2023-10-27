
import getYear from "./exportProject.js";



const year = document.querySelector('#year');
const input = document.querySelector("input");
const button = document.querySelector("button");
const place = document.querySelector("#place");
const degrees = document.querySelector("#degrees");
const img = document.querySelector("img");
const wind = document.querySelector("#wind");
const content = document.querySelector(".content");
const welcome = document.querySelector("#welcome")

getYear(year);



button.addEventListener("click", () => {
  if (!input.value) return;

  getDataApi();
});

async function getDataApi() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
    input.value
  )}&units=metric&appid=29dbdb5b52394d31fb0823709d986fb3`;

  try {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.cod && data.cod === "404") {
          return alert("Place not found!");
        }

        loadData(data);
      });
  } catch (error) {
    alert(error);
  }
}


function loadData(data) {
 const user = document.getElementById("name").value;

  place.innerHTML = `${data.name}, ${data.sys.country}`;
  degrees.innerHTML = `Temperature: ${Math.floor(data.main.temp)}° C`;
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  wind.innerHTML = `Wind: ${data.wind.speed} km/h`;
  welcome.innerHTML = `Hello ${user}, enjoy your day!`;
  content.style.display = "flex";
}





