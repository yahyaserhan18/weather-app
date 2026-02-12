import { useState } from 'react';
import type { CityData, cityDataApiResponse } from '../types/CityData';

export default function SearchCity() {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<CityData[]>([]);
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{

        const newQuery = e.target.value;
        // console.log(e.target.value);
        setQuery(newQuery);

        if(e.target.value.length < 3){
            setResults([]);
            return;
        }

            //trigger api call to get cities that match the query
            const fetchCityData = async () => {
                const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${newQuery}`);
                const data: cityDataApiResponse = await response.json();
                // console.log(data.results);
                setResults(data.results??[]);
            }
            fetchCityData();
    }

    return (
        <>
        <div className="flex gap-2">
            <input type="text" placeholder="Search for a city"
             className="border-2 border-gray-300 rounded-md p-2 w-full"
             value={query}
             onChange={handleSearch}
             />

            <button className="bg-blue-500 text-white rounded-md p-2">Search</button>
        </div>
        <div className="flex flex-col gap-2">
                {results.map((result) => (
                    <div key={result.id}>{result.name} , {result.country}</div>
                ))}
        </div>
        </>
        
    )
}