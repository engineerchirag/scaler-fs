// const weatherData = {
//   location: {
//     name: "Milan",
//     region: "Lombardia",
//     country: "Italy",
//     lat: 45.47,
//     lon: 9.2,
//     tz_id: "Europe/Rome",
//     localtime_epoch: 1688486330,
//     localtime: "2023-07-04 17:58",
//   },
//   current: {
//     last_updated_epoch: 1688485500,
//     last_updated: "2023-07-04 17:45",
//     temp_c: 29.0,
//     temp_f: 84.2,
//     is_day: 1,
//     condition: {
//       text: "Partly cloudy",
//       icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
//       code: 1003,
//     },
//     wind_mph: 4.3,
//     wind_kph: 6.8,
//     wind_degree: 160,
//     wind_dir: "SSE",
//     pressure_mb: 1013.0,
//     pressure_in: 29.91,
//     precip_mm: 0.1,
//     precip_in: 0.0,
//     humidity: 45,
//     cloud: 25,
//     feelslike_c: 34.0,
//     feelslike_f: 93.3,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     uv: 6.0,
//     gust_mph: 4.0,
//     gust_kph: 6.5,
//   },
// };

const tempRef = document.querySelector('.temp');
const locationRef = document.querySelector('.time_location p');
const timeLocationRef = document.querySelector('.time_location span');
const imgRef = document.querySelector('.weather_condition p img');
const conditionRef = document.querySelector('.weather_condition span');

function renderWeatherData(weatherData) {
    tempRef.innerText = weatherData.current.temp_c;
    locationRef.innerText = weatherData.location.name;
    timeLocationRef.innerText = locationDetail(weatherData.current.last_updated, weatherData.current.is_day);
    conditionRef.innerText = weatherData.current.condition.text;
    imgRef.src = weatherData.current.condition.icon;
}


function locationDetail(time, day) {
    const timeArr = time.split(' ');
    const result = timeArr[1] + ' ' + day + ' ' + timeArr[0]; // TODO: Update day
    return result;
}

const formRef = document.querySelector('nav form');
formRef.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputRef = document.querySelector('input.searchField');
    const inputValue = inputRef.value;
    console.log(inputValue);
    fetchWeatherData(inputValue);
});

function fetchWeatherData(location) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${location}&aqi=no`)
        .then((res) => res.json())
        .then((data) => renderWeatherData(weatherData))
        .catch((err) => console.log('Error ', err));
}
