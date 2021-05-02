const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

getWeather = async (lat, long) => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            const weatherCondition = res?.weather[0]?.main;
            const temp = res?.main?.temp;
            const maxTemp = res?.main?.temp_max;
            const minTemp = res?.main?.temp_min;
            const humidity = res?.main?.humidity;
            const feelTemp = res?.main?.feels_like;
            const place = res?.name;

            weather.innerText = `기온 ${temp}˚ / 체감 ${feelTemp}˚
                                최대 ${maxTemp}˚ / 최소 ${minTemp}˚
                                날씨 ${weatherCondition} / 습도 ${humidity}
                                위치 ${place}
                                `;
        });
};

saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
};

handleGeoError = () => {
    console.log("Can't access my location");
};

askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if (!loadedCoords) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
};

initWeather = () => {
    loadCoords();
};

initWeather();
