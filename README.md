# API-INTEGRATION

*COMPANY*: CODETECH IT SOLUTIONS

*NAME*: KRUTHIKA N

*INTERN ID*: CT04DR804

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH KUMAR

*DESCRIPTION OF THE TASK*:

# Weather App

The **Weather App** is a simple and responsive web application that allows users to check real-time weather information for any city in the world. It uses the **OpenWeatherMap API** to fetch live data such as temperature, humidity, and weather conditions.

## ✅ Features

* 🌍 Search weather by city name
* 🌡 Displays real-time **temperature (°C)**
* 💧 Shows **humidity** and **weather condition**
* ⚠ Error message for invalid city names
* 📱 Responsive and easy-to-use interface
* 🌐 Fetches live data using **OpenWeatherMap API**

## 🛠 Technologies Used

| Technology             | Purpose                                     |
| ---------------------- | ------------------------------------------- |
| **HTML**               | Structure of the webpage                    |
| **CSS**                | Styling and layout                          |
| **JavaScript**         | Fetching API data & updating UI dynamically |
| **OpenWeatherMap API** | Source of live weather data                 |

## 🚀 How to Run the Project

### 1️⃣ Prerequisites

* Install **Visual Studio Code (VS Code)**
* Install **Live Server Extension** in VS Code
* Internet connection

### 2️⃣ Steps

1. Download or create a project folder (e.g., `WeatherApp`)
2. Add the files:

   * `index.html`
   * `style.css`
   * `script.js`
3. Get your **free API key** from [https://openweathermap.org](https://openweathermap.org)
4. Replace `"YOUR_API_KEY_HERE"` in `script.js` with your actual API key
5. Open `index.html` in VS Code
6. Right-click → **Open with Live Server**
7. Enter a city name and click **Get Weather**

## 📁 Project Structure

```
WeatherApp/
├── index.html     # Main webpage
├── style.css      # Styling file
└── script.js      # JavaScript + Weather API logic
```

## 📌 API Used

* **OpenWeatherMap API**
* Example endpoint format:

  ```
  https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric
  ```

## 📷 Output Example

**Input:** `London`
**Output:**
✅ City: London, GB
✅ Temperature: 15°C
✅ Humidity: 72%
✅ Weather: broken clouds

## 💡 Future Enhancements

* 🌤 Add weather icons
* 📍 Auto-detect user location
* 🕒 Add current date & time
* 🚀 Deploy on GitHub Pages or Netlify
