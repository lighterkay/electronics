const API_KEY = "478fe7c2e6077e977b40469c9be08172"; 

const weatherButton = document.getElementById('weather-button');

weatherButton.addEventListener('click', async event => {
    const searchTerm = document.getElementById('city-input').value;
    const weatherCity = document.getElementById('weather-city');
    const weatherDescription = document.getElementById('weather-text')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.weather) {
            weatherDescription.innerHTML = `${data.weather[0].description}`
            weatherCity.innerHTML = `${data.name}`

            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            document.getElementById("weather-icon").src = iconUrl;
        } else {
            alert(`No weather found. Please try a different search.`);
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
});

