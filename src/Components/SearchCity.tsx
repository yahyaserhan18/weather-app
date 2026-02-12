import { useRef, useState } from 'react';
import type { CityData, cityDataApiResponse } from '../types/CityData';
import { useWeather } from '../context/WeatherContext';
import { SearchIcon } from './Icons';

export default function SearchCity() {
    const { handleAddCity } = useWeather();
    const [results, setResults] = useState<CityData[]>([]);
    const [query, setQuery] = useState('');
    const inputref = useRef<HTMLInputElement>(null);

    const fetchCityData = async (searchQuery: string) => {
        if(searchQuery.length < 3){
            setResults([]);
            return;
        }

        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}`);
        const data: cityDataApiResponse = await response.json();
        setResults(data.results ?? []);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        // Auto-search as user types
        fetchCityData(newQuery);
    }

    const handleSearchClick = () => {
        // Manual search when button is clicked
        fetchCityData(query);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    }

    const handleSelect = (city: CityData) => {
        handleAddCity({...city, updatedAt: new Date()});
        setResults([]);
        setQuery('');
        if(inputref.current){
            inputref.current.value = '';
        }
    }

    return (
        <>
        <div className="flex gap-2 sm:gap-3">
            <div className="relative flex-1">
                <input 
                    type="text" 
                    placeholder="Search for a city..."
                    className="border-2 border-slate-700 bg-slate-800 text-slate-100 rounded-lg p-3 pl-10 sm:pl-12 pr-3 w-full text-sm sm:text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    ref={inputref}
                    value={query}
                />
                <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
            <button 
                onClick={handleSearchClick}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 sm:px-6 py-3 font-medium transition-colors flex items-center gap-2 whitespace-nowrap"
            >
                <SearchIcon className="w-5 h-5" />
                <span className="hidden sm:inline">Search</span>
            </button>
        </div>
        {
            results.length > 0 && (
                <div className="flex flex-col gap-1 border-2 border-slate-700 bg-slate-800 rounded-lg p-2 shadow-xl max-h-64 sm:max-h-80 overflow-y-auto">
                    {results.map((result) => (
                        <div 
                            onClick={() => handleSelect(result)} 
                            className="hover:bg-slate-700 p-2 sm:p-3 rounded-lg cursor-pointer transition-colors text-slate-200" 
                            key={result.id}
                        >
                            <span className="font-medium text-sm sm:text-base">{result.name}</span>
                            <span className="text-slate-400 text-sm sm:text-base"> • {result.country}</span>
                        </div>
                    ))} 
                </div>
            )
        }
        </>
    )
}