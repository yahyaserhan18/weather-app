type WeatherDataUnits = {
    time: string;
    interval: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    is_day: string;
    weathercode: string;
}

type CurrentWeather = {
    time: string;
    interval: number;
    temperature: number;
    windspeed: number;
    winddirection: number;
    is_day: number;
    weathercode: number;
}

/*
weather codes mapping
0: Clear sky
1: Mainly clear
2: Partly cloudy
3: Overcast
4: Fog and depositing rime fog
5: Light drizzle
6: Moderate drizzle
7: Dense drizzle
8: Light freezing drizzle
*/


export type WeatherData = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_weather_units: WeatherDataUnits;
    current_weather: CurrentWeather;
}
