import type { CityData } from '../types/CityData';
import type { WeatherData } from '../types/WeatherData';
import { useEffect, useState } from 'react';
import { GetWeatherCodeDescription } from '../Utils/getWeatherCodeDescription';
import { GetWeatherCodeIcon, type WeatherIconType } from '../Utils/getWeatherCodeIcon';
import { useWeather } from '../context/WeatherContext';
import { 
    XIcon, 
    SunIcon, 
    CloudSunIcon, 
    CloudIcon, 
    CloudFogIcon, 
    CloudDrizzleIcon, 
    CloudRainIcon, 
    CloudSnowIcon, 
    CloudLightningIcon, 
    ThermometerIcon,
    WindIcon 
} from './Icons';

type props = {
    city: CityData;
}

const WeatherIcon = ({ type, className = "w-6 h-6" }: { type: WeatherIconType, className?: string }) => {
    switch(type) {
        case 'sun': return <SunIcon className={className} />;
        case 'cloud-sun': return <CloudSunIcon className={className} />;
        case 'cloud': return <CloudIcon className={className} />;
        case 'cloud-fog': return <CloudFogIcon className={className} />;
        case 'cloud-drizzle': return <CloudDrizzleIcon className={className} />;
        case 'cloud-rain': return <CloudRainIcon className={className} />;
        case 'cloud-snow': return <CloudSnowIcon className={className} />;
        case 'cloud-lightning': return <CloudLightningIcon className={className} />;
        case 'thermometer': return <ThermometerIcon className={className} />;
        default: return <ThermometerIcon className={className} />;
    }
}

export default function WeatherCard({city}: props) {
    const { handleRemoveCity } = useWeather();
    const[weather, setWeather] = useState<WeatherData | null>(null);
    const[lastUpdated, setLastUpdated] = useState<Date>(new Date());

    useEffect(()=>{
        // Fetch weather data when city or updatedAt changes
        const fetchWeatherData = async () => {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`);
            const data: WeatherData = await response.json();
            setWeather(data);
            setLastUpdated(new Date());
        }
        
        fetchWeatherData();
    },[city.latitude, city.longitude, city.updatedAt]);

    const weatherIcon = GetWeatherCodeIcon(weather?.current_weather?.weathercode ?? 0);

    return (
        <div className="flex flex-col gap-3 sm:gap-4 border-2 border-slate-700 bg-slate-800 rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
               <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-100 truncate">{city.name}</h1>
                <p className="text-xs sm:text-sm text-slate-400">{city.country}</p>
               </div>
                <button 
                    className="text-red-400 hover:text-red-300 hover:bg-slate-700 p-1.5 sm:p-2 rounded-lg transition-colors flex-shrink-0 ml-2 cursor-pointer"
                    onClick={() => handleRemoveCity(city.id)}
                    aria-label="Remove city"
                >
                    <XIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-blue-400 flex-shrink-0">
                    <WeatherIcon type={weatherIcon} className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <div>
                    <p className="text-4xl sm:text-5xl font-bold text-slate-100">
                        {Math.round(weather?.current_weather?.temperature ?? 0)}°
                        <span className="text-xl sm:text-2xl text-slate-400">{weather?.current_weather_units?.temperature}</span>
                    </p>
                </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                    <WeatherIcon type={weatherIcon} className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm truncate">{GetWeatherCodeDescription(weather?.current_weather?.weathercode ?? 0)}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                    <WindIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm">Wind: {weather?.current_weather?.windspeed ?? 0} {weather?.current_weather_units?.windspeed}</p>
                </div>
                <p className="text-xs text-slate-500 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-slate-700">
                    Updated: {lastUpdated.toLocaleDateString()} {lastUpdated.toLocaleTimeString()}
                </p>
            </div>
        </div>
    )
}