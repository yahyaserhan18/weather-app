/**
 * WMO Weather Interpretation Icons
 * Returns an icon component name for weather codes
 * Based on the WMO weather code standard used by Open-Meteo API
 */

export type WeatherIconType = 
  | 'sun' 
  | 'cloud-sun' 
  | 'cloud' 
  | 'cloud-fog' 
  | 'cloud-drizzle' 
  | 'cloud-rain' 
  | 'cloud-snow' 
  | 'cloud-lightning' 
  | 'thermometer';

const WEATHER_ICONS: Record<number, WeatherIconType> = {
  // Clear skies
  0: 'sun',
  
  // Cloudy conditions
  1: 'cloud-sun',
  2: 'cloud-sun',
  3: 'cloud',
  
  // Fog
  45: 'cloud-fog',
  48: 'cloud-fog',
  
  // Drizzle
  51: 'cloud-drizzle',
  53: 'cloud-drizzle',
  55: 'cloud-rain',
  
  // Freezing drizzle
  56: 'cloud-rain',
  57: 'cloud-rain',
  
  // Rain
  61: 'cloud-rain',
  63: 'cloud-rain',
  65: 'cloud-rain',
  
  // Freezing rain
  66: 'cloud-rain',
  67: 'cloud-rain',
  
  // Snow
  71: 'cloud-snow',
  73: 'cloud-snow',
  75: 'cloud-snow',
  77: 'cloud-snow',
  
  // Rain showers
  80: 'cloud-drizzle',
  81: 'cloud-rain',
  82: 'cloud-lightning',
  
  // Snow showers
  85: 'cloud-snow',
  86: 'cloud-snow',
  
  // Thunderstorms
  95: 'cloud-lightning',
  96: 'cloud-lightning',
  99: 'cloud-lightning',
};

export const GetWeatherCodeIcon = (weathercode: number): WeatherIconType => {
  return WEATHER_ICONS[weathercode] || 'thermometer';
};