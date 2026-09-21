import { LocationObject } from 'expo-location';
import { createContext, useContext, useEffect, useState } from 'react';

type Weather = {
    icon: string,
    temp: number
}

export const WeatherContext = createContext({ icon: '❓', temp: 0 });

export function useMeteoApi(location: LocationObject | null) {
    const [weather, setWeather] = useState<Weather>({ icon: '❓', temp: 0 });

    useEffect(() => {
        async function getWeather() {
            if (!location || !location.coords.latitude || !location.coords.longitude) {
                return;
            }
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&current=temperature_2m,weather_code`

            const response = await fetch(weatherUrl)
            if (!response.ok) {
                throw new Error(`Error getting weather: ${response.statusText}`);
            }
            const json = await response.json() as { current: { temperature_2m: number, weather_code: number } };
            console.log(json);

            setWeather({ temp: json.current.temperature_2m, icon: weatherCode(json.current.weather_code) });
        }

        getWeather();
    }, [location]);

    return weather;
}

export function useWeather() {
    return useContext(WeatherContext);
}

function weatherCode(code: number) {
    const weatherDescriptions: Record<string, string> = {
        "0": "☀️",
        "1": "🌤️",
        "2": "⛅",
        "3": "☁️",
        "45": "🌫️",
        "48": "🌫️❄️",
        "51": "🌦️",
        "53": "🌦️",
        "55": "🌧️",
        "56": "🌧️❄️",
        "57": "🌧️❄️",
        "61": "🌧️",
        "63": "🌧️",
        "65": "🌧️💧",
        "66": "🌧️❄️",
        "67": "🌧️❄️",
        "71": "🌨️",
        "73": "❄️",
        "75": "❄️❄️",
        "77": "🌨️",
        "80": "🌦️",
        "81": "🌧️",
        "82": "🌧️💧",
        "85": "🌨️",
        "86": "❄️🌨️",
        "95": "⛈️",
        "96": "⛈️🧊",
        "99": "⛈️🧊"
    };

    return weatherDescriptions[String(code)] ?? "❓";
}
