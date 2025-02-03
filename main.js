// 🌍 Function to Fetch Weather by City Name
async function fetchWeatherByCity() {
    const apiKey = "c704715ed40a3d29fcfcc533f0c06b85"; // 🔴 Replace with your real API key
    const city = document.getElementById("city-input").value;
    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey};

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            // Extract weather details
            const temp = Math.round(data.main.temp);
            const condition = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = https://openweathermap.org/img/wn/${iconCode}@2x.png;

            // Update HTML elements
            document.getElementById("weather-city").innerText = Weather in ${data.name};
            document.getElementById("weather-text").innerText = ${temp}°C - ${condition};
            document.getElementById("weather-icon").src = iconUrl;
        } else {
            document.getElementById("weather-text").innerText = "City not found. Try again.";
            document.getElementById("weather-icon").src = "";
        }
    } catch (error) {
        console.error("Weather fetch failed:", error);
        document.getElementById("weather-text").innerText = "Weather unavailable.";
    }
}

// 🟢 Attach event to search button
document.getElementById("weather-button").addEventListener("click", fetchWeatherByCity);