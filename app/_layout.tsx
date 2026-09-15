import CalculatorProvider from '@/contexts/CalculatorProvider';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { getCurrentPositionAsync, LocationObject, requestForegroundPermissionsAsync } from 'expo-location';
import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import { StatusBar } from 'expo-status-bar';
import { createContext, useEffect, useState } from 'react';
import 'react-native-reanimated';

type Weather = {
    icon: string,
    temp: number
}

export const WeatherContext = createContext({ icon: '❓', temp: 0 });

export default function RootLayout() {
    const colorScheme = useColorScheme();

    const location = useLocation();
    const weather = useWeather(location);

    return (
        <WeatherContext value={weather}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <CalculatorProvider>
                    <Stack screenOptions={{
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}>
                        <Stack.Screen name="index" options={{
                            title: "Welcome"
                        }} />
                        <Stack.Screen name="news/index" options={{
                            title: "Latest news"
                        }} />
                    </Stack>
                    <StatusBar style="auto" />
                </CalculatorProvider>
            </ThemeProvider>
        </WeatherContext >
    );
}


function useLocation() {
    const [location, setLocation] = useState<LocationObject | null>(null);

    useEffect(() => {
        const getLocation = async () => {
            const { granted } = await requestForegroundPermissionsAsync();
            if (granted) {
                const pos = await getCurrentPositionAsync();
                setLocation(pos);
                console.log(pos);
            } else {
                console.error("Positioning permission not granted");
            }
        }

        getLocation();
    }, []);

    return location;
}


function useWeather(location: LocationObject | null) {
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
