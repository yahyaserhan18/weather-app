/**
 * WMO Weather Interpretation Icons
 * Returns an emoji icon for weather codes
 * Based on the WMO weather code standard used by Open-Meteo API
 */

const WEATHER_ICONS: Record<number, string> = {
  // Clear skies
  0: '☀️',
  
  // Cloudy conditions
  1: '🌤️',
  2: '⛅',
  3: '☁️',
  
  // Fog
  45: '🌫️',
  48: '🌫️',
  
  // Drizzle
  51: '🌦️',
  53: '🌦️',
  55: '🌧️',
  
  // Freezing drizzle
  56: '🌧️',
  57: '🌧️',
  
  // Rain
  61: '🌧️',
  63: '🌧️',
  65: '🌧️',
  
  // Freezing rain
  66: '🌧️',
  67: '🌧️',
  
  // Snow
  71: '🌨️',
  73: '🌨️',
  75: '❄️',
  77: '🌨️',
  
  // Rain showers
  80: '🌦️',
  81: '🌧️',
  82: '⛈️',
  
  // Snow showers
  85: '🌨️',
  86: '❄️',
  
  // Thunderstorms
  95: '⛈️',
  96: '⛈️',
  99: '⛈️',
};

export const GetWeatherCodeIcon = (weathercode: number): string => {
  return WEATHER_ICONS[weathercode] || '🌡️';
};