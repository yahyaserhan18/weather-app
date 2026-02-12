/**
 * WMO Weather Interpretation Codes
 * Returns a human-readable description for weather codes
 * Based on the WMO weather code standard used by Open-Meteo API
 */

const WEATHER_DESCRIPTIONS: Record<number, string> = {
  // Clear skies
  0: 'Clear sky',
  
  // Cloudy conditions
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  
  // Fog
  45: 'Fog',
  48: 'Depositing rime fog',
  
  // Drizzle
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  
  // Freezing drizzle
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  
  // Rain
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  
  // Freezing rain
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  
  // Snow
  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy snow fall',
  77: 'Snow grains',
  
  // Rain showers
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  
  // Snow showers
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  
  // Thunderstorms
  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
};

export const GetWeatherCodeDescription = (weathercode: number): string => {
  return WEATHER_DESCRIPTIONS[weathercode] || 'Unknown weather condition';
};