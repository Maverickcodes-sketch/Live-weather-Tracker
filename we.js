document.getElementById('searchButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'b7eba44dd0bd8125f24147605a5e7ea2'; 
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
    
    });
}

