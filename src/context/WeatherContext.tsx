import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { CityData } from '../types/CityData';

interface WeatherContextType {
  cities: CityData[];
  handleAddCity: (city: CityData) => void;
  handleRemoveCity: (id: number) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within WeatherProvider');
  }
  return context;
};

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
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
  };

  const handleRemoveCity = (id: number) => {
    setCities(prev => prev.filter(city => city.id !== id));
  };

  return (
    <WeatherContext.Provider value={{ cities, handleAddCity, handleRemoveCity }}>
      {children}
    </WeatherContext.Provider>
  );
};
