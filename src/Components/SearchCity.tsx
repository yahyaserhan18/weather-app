import { useRef, useState } from 'react';
import type { CityData, cityDataApiResponse } from '../types/CityData';

type props = {
    handleAddCity: (city: CityData) => void;
}

export default function SearchCity({handleAddCity}: props) {

    const [results, setResults] = useState<CityData[]>([]);
    const inputref = useRef<HTMLInputElement>(null);

    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{

        const newQuery = e.target.value;
        // console.log(e.target.value);

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

    const handleSelect = (city: CityData) => {
        handleAddCity({...city,updatedAt: new Date()});
        setResults([]);
        if(inputref.current){
            inputref.current.value = '';
        }
    }

    return (
        <>
        <div className="flex gap-2">
            <input type="text" placeholder="Search for a city"
             className="border-2 border-gray-300 rounded-md p-2 w-full"
             onChange={handleSearch}
             ref={inputref}
             />

            <button className="bg-blue-500 text-white rounded-md p-2">Search</button>
        </div>
       {
       results.length > 0?
                <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-2">
                {results.map((result) => (
                    <div onClick={()=>handleSelect(result)} className="hover:bg-gray-100 p-2 rounded-md cursor-pointer" key={result.id}>{result.name} , {result.country}</div>
                    // <div className="hover:bg-gray-100 p-2 rounded-md cursor-pointer" key={result.id}>{result.name} , {result.country}</div>
                ))} 
                </div>
                
                :null}
        </>
        
    )
}