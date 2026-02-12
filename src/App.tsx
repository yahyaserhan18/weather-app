import Header from './Components/Header';
import SearchCity from './Components/SearchCity';
import { useState, useEffect } from 'react';
import type { CityData } from './types/CityData';
import WeatherCard from './Components/WeatherCard';

function App() {
const [cities, setCities] = useState<CityData[]>([]);

// Update all cities' updatedAt to trigger weather refresh
useEffect(() => {
  if (cities.length === 0) return;
  
  const interval = setInterval(() => {
    setCities(prev => 
      prev.map(city => ({
        ...city,
        updatedAt: new Date()
      }))
    );
  }, 15000);
  
  return () => clearInterval(interval);
}, [cities.length]);

const handleAddCity = (city: CityData) => {
  setCities(prev => {
    // Check if city already exists
    if (prev.some(c => c.id === city.id)) {
      return prev; // Don't add duplicate
    }
    return [...prev, { ...city, updatedAt: new Date() }];
  });
}

const handleRemoveCity = (id: number) => {
  setCities(prev => prev.filter(city => city.id !== id));
}
  return (
    <div className="flex flex-col gap-4 p-8">
      <Header />
      <SearchCity handleAddCity={handleAddCity}/>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map((city) => (
            <WeatherCard key={city.id} city={city} handleRemoveCity={handleRemoveCity} />
          ))}
     </div>
    </div>
  )
}

export default App
