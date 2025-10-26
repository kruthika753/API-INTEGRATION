const apiKey = "9859d0ea356e70af1b2d5eda071e2186"; // Replace with your actual API key

async function getWeather() {
    const city = document.getElementById('city').value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        document.getElementById('result').innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>🌡 Temperature: ${data.main.temp}°C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById('result').innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}
