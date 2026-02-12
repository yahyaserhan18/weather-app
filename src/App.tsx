import { useEffect } from 'react';
import Header from './Components/Header';
import type { cityDataApiResponse } from './types/CityData';
import type { WeatherData } from './types/WeatherData';
import SearchCity from './Components/SearchCity';



function App() {

  useEffect(()=>{
  const fetchCityData = async () => {
    const response = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=istanbul');
    const data: cityDataApiResponse = await response.json();
    console.log(data.results[1].name);
  }
  fetchCityData();
  })
  //https://api.open-meteo.com/v1/forecast?latitude=51.50853&longitude=-0.12574&current_weather=true

useEffect(()=>{
  const fetchWeatherData = async () => {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.50853&longitude=-0.12574&current_weather=true');
    const data: WeatherData = await response.json();
    console.log(data.current_weather.temperature);
  }
  fetchWeatherData();
})

  return (
    <div className="flex flex-col gap-4 p-8">
      <Header />
      <SearchCity />
    </div>
  )
}

export default App
