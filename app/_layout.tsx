import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { HistoryProvider } from '@/hooks/history-context';
import { useColorScheme } from '@/hooks/use-color-scheme';


export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <HistoryProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
      </ThemeProvider>
    </HistoryProvider>
  );
}
