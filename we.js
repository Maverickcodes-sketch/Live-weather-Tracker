document.getElementById('searchButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'b7eba44dd0bd8125f24147605a5e7ea2'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => updateWeatherInfo(data))
        .catch(error => console.error('Error fetching weather data:', error));
});

function updateWeatherInfo(data) {
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const cloudiness = data.clouds.all;

    document.getElementById('temperature').innerText = `${temperature}°C`;
    document.getElementById('humidity').innerText = `${humidity}%`;
    document.getElementById('wind-speed').innerText = `${windSpeed} km/h`;
    document.getElementById('cloudiness').innerText = `${cloudiness}%`;
    
    const weeklyForecast = data.daily.slice(1, 8);
    const forecastContainer = document.querySelector('.week-forecast');
    forecastContainer.innerHTML = '';
    weeklyForecast.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        const dayHeader = document.createElement('h3');
        dayHeader.innerText = day.dt_txt.split(' ')[0];
        dayElement.appendChild(dayHeader);
        const dayWeather = document.createElement('p');
        dayWeather.innerText = `${day.temp.day}°C | <i class="fa-solid fa-${day.weather[0].icon}"></i> ${day.weather[0].description}`;
        dayElement.appendChild(dayWeather);
        forecastContainer.appendChild(dayElement);
    });
}

