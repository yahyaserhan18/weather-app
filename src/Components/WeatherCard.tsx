import type { CityData } from '../types/CityData';
import type { WeatherData } from '../types/WeatherData';
import { useEffect, useState } from 'react';
import { GetWeatherCodeDescription } from '../Utils/getWeatherCodeDescription';
import { GetWeatherCodeIcon } from '../Utils/getWeatherCodeIcon';


type props = {
    city: CityData;
    handleRemoveCity: (id: number) => void;
}

export default function WeatherCard({city, handleRemoveCity}: props) {

    const[weather,setWeather] = useState<WeatherData | null>(null);
    const[lastUpdated, setLastUpdated] = useState<Date>(new Date());


    const fetchWeatherData = async () => {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`);
        const data: WeatherData = await response.json();
        // console.log('data fetched for city', city.name,data);
        setWeather(data);
        setLastUpdated(new Date());
    }
    
    useEffect(()=>{
        // Fetch weather data when city or updatedAt changes
        fetchWeatherData();
    },[city.latitude, city.longitude, city.updatedAt]);


    return (
        <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-2">
            <div className="flex justify-between items-center">
               <div>
                <h1 className="text-2xl font-bold text-gray-700">{city.name}</h1>
                <p className="text-sm text-gray-500">{city.country}</p>
               </div>
                <div className="text-red-500 text-2xl bg-gray-100  p-2 rounded cursor-pointer"
                onClick={()=>handleRemoveCity(city.id)}>🗶</div>
            </div>
            <div>
                <p className="text-4xl font-bold ">{Math.round(weather?.current_weather?.temperature ?? 0)} {weather?.current_weather_units?.temperature}</p>
                <p className="text-sm text-gray-500">{GetWeatherCodeDescription(weather?.current_weather?.weathercode ?? 0)} {GetWeatherCodeIcon(weather?.current_weather?.weathercode ?? 0)}</p>
                <p className="text-sm text-gray-500">Wind: {weather?.current_weather?.windspeed ?? 0} {weather?.current_weather_units?.windspeed}</p>
                <p className="text-xs text-gray-400 mt-2">Updated: {lastUpdated.toLocaleDateString()} {lastUpdated.toLocaleTimeString()}</p>
            </div>

        </div>
    )
}