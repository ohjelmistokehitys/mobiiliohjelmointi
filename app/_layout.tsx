import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import CalculatorProvider from '@/contexts/CalculatorProvider';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { createContext } from 'react';

export const WeatherContext = createContext({ icon: '❓', temp: 16 });

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <WeatherContext value={{ icon: '🌦️', temp: 17 }}>
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
