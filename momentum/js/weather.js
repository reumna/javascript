
const API_KEY = "bc37411dca674c3c67d9389eaeaf6e23";



function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}  ${data.main.temp}'C`; 
    });

}
function onGeoError () {
    alert("Can't find you. No Weather for you.");

}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);