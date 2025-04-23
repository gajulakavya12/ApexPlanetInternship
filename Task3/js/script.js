
// Weather API key and base URL
const API_KEY = 'a4d802b6472749202ea3eda3737347c1';  // Replace with your OpenWeatherMap API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Weather image sets based on temperature or condition
const weatherImages = {
  hot: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ],
  cold: [
    "https://images.unsplash.com/photo-1642490128141-376b8bd6f3f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ],
  rainy: [
    "https://images.unsplash.com/photo-1623567932970-576132e5d056",
  ],
  clear: [
    "https://plus.unsplash.com/premium_photo-1709912328718-3f26d778bee9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
};

let weatherInfo = {
    city: "Karimnagar",
    temp: 35.72,
    feelsLike: 35.28,
    humidity: 28,
    weather: "clear",
};

// Function to fetch weather data based on city
async function fetchWeather(city) {
    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            weatherInfo.city = data.name;
            weatherInfo.temp = data.main.temp;
            weatherInfo.feelsLike = data.main.feels_like;
            weatherInfo.humidity = data.main.humidity;
            weatherInfo.weather = data.weather[0].main.toLowerCase();
            
            updateWeatherInfo();
            setWeatherImage();
        } else {
            alert("City not found.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Update weather information on the page
function updateWeatherInfo() {
    document.getElementById("city").textContent = weatherInfo.city;
    document.getElementById("temp").textContent = `${weatherInfo.temp}°C`;
    document.getElementById("feels-like").textContent = `${weatherInfo.feelsLike}°C`;
    document.getElementById("humidity").textContent = `${weatherInfo.humidity}%`;
    document.getElementById("weather").textContent = weatherInfo.weather.charAt(0).toUpperCase() + weatherInfo.weather.slice(1);
}

// Set weather image based on temperature
function setWeatherImage() {
    let image = '';

    // Choose image based on temperature or condition
    if (weatherInfo.temp > 30) {
        image = weatherImages.hot[0];  // Hot weather image
    } else if (weatherInfo.temp < 20) {
        image = weatherImages.cold[0]; // Cold weather image
    } else if (weatherInfo.weather === 'rain') {
        image = weatherImages.rainy[0]; // Rainy weather image
    } else {
        image = weatherImages.clear[0]; // Clear weather image
    }

    document.getElementById("weather-image").src = image;
}

// Event listeners
document.getElementById("search-btn").addEventListener("click", () => {
    const cityName = document.getElementById("city-name").value;
    if (cityName) {
        fetchWeather(cityName);
    } else {
        alert("Please enter a city name.");
    }
});

// Default weather info on page load
fetchWeather(weatherInfo.city);



