function getWeather() {
    const city = document.getElementById('city').value.trim();  // Get the city entered by the user and remove spaces
    if (!city) {
        document.getElementById('weather-info').innerHTML = 'Please enter a city!';
        return;
    }

    const apiKey = 'a47ece8f434f477b8f6135809252504';  // Replace with your actual API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    // Clear previous weather info
    document.getElementById('weather-info').innerHTML = '';

    // Fetch data from the API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or problem with API request');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.current.temp_c;  // Temperature in Celsius
            const description = data.current.condition.text;  // Weather description
            const humidity = data.current.humidity;  // Humidity percentage
            const airQuality = data.current.air_quality.pm2_5;  // PM2.5 air quality

            // Construct the weather info HTML
            const weatherHTML = `
                <h3>${city}</h3>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <p>Humidity: ${humidity}%</p>
                <p>PM2.5 Air Quality: ${airQuality} µg/m³</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherHTML;
        })
        .catch(error => {
            // Show error message if something goes wrong
            document.getElementById('weather-info').innerHTML = `Error: ${error.message}`;
            console.error('Error:', error);
        });
}
