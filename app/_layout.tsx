import CalculatorProvider from '@/contexts/CalculatorProvider';
import { useMeteoApi, WeatherContext } from '@/contexts/weather-context';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useLocation } from '@/hooks/use-location';
import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {

    const colorScheme = useColorScheme();

    const { location } = useLocation();
    const weather = useMeteoApi(location);

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
