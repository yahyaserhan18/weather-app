import Header from './Components/Header';
import SearchCity from './Components/SearchCity';
import WeatherCard from './Components/WeatherCard';
import { useWeather } from './context/WeatherContext';

function App() {
  const { cities } = useWeather();

  return (
    <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 min-h-screen bg-slate-900">
      <Header />
      <SearchCity />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {cities.map((city) => (
          <WeatherCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  )
}

export default App
