# 🌤️ Weather App

A modern, responsive weather application built with React, TypeScript, and Tailwind CSS. Track real-time weather conditions for multiple cities around the world with auto-refreshing data and a beautiful dark-themed UI.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?style=flat&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=flat&logo=vite)

## ✨ Features

- **🔍 City Search**: Search for any city worldwide using the geocoding API
- **🌡️ Real-time Weather**: Get current temperature, weather conditions, and wind speed
- **♻️ Auto-refresh**: Weather data automatically updates every 15 seconds
- **🗂️ Multiple Cities**: Track weather for multiple cities simultaneously
- **📱 Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **🎨 Modern UI**: Beautiful dark-themed interface with smooth animations
- **🌈 Weather Icons**: Custom icons for different weather conditions (sunny, cloudy, rainy, snowy, etc.)
- **❌ Easy Management**: Add or remove cities with a single click

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.18
- **Build Tool**: Vite 7.3.1
- **State Management**: React Context API
- **API**: Open-Meteo API (free weather & geocoding data)

## 🌐 APIs Used

This application uses the [Open-Meteo API](https://open-meteo.com/), a free weather API that provides:

- **Weather Data API**: `https://api.open-meteo.com/v1/forecast`
  - Current weather conditions
  - Temperature in Celsius
  - Wind speed
  - Weather codes for different conditions

- **Geocoding API**: `https://geocoding-api.open-meteo.com/v1/search`
  - City name search
  - Coordinates (latitude/longitude)
  - Country information

*No API key required!*

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── Components/
│   │   ├── Header.tsx          # App header component
│   │   ├── SearchCity.tsx      # City search with autocomplete
│   │   ├── WeatherCard.tsx     # Weather display card
│   │   └── Icons.tsx           # Custom weather icons
│   ├── context/
│   │   └── WeatherContext.tsx  # Global state management
│   ├── types/
│   │   ├── CityData.ts         # City data type definitions
│   │   └── WeatherData.ts      # Weather data type definitions
│   ├── Utils/
│   │   ├── getWeatherCodeDescription.ts  # Weather code to description
│   │   └── getWeatherCodeIcon.ts         # Weather code to icon mapping
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 How It Works

1. **Search for a City**: Type at least 3 characters in the search box to get city suggestions
2. **Select a City**: Click on a city from the dropdown to add it to your dashboard
3. **View Weather**: Each city card displays:
   - Current temperature
   - Weather condition (clear, cloudy, rainy, etc.)
   - Wind speed
   - Last update time
4. **Auto-refresh**: Weather data automatically updates every 15 seconds
5. **Remove Cities**: Click the X button on any card to remove that city

## 🎨 Weather Conditions Supported

- ☀️ Clear sky
- 🌤️ Partly cloudy
- ☁️ Cloudy/Overcast
- 🌫️ Fog
- 🌧️ Rain (light, moderate, heavy)
- 🌨️ Snow
- ⛈️ Thunderstorm
- 💨 Wind conditions

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Created with ❤️ by [Yahya Elserhan]

## 🙏 Acknowledgments

- Weather data provided by [Open-Meteo API](https://open-meteo.com/)
- Icons and UI design inspired by modern weather applications
- Built with React, TypeScript, and Tailwind CSS

---

**Enjoy tracking the weather! 🌈**
