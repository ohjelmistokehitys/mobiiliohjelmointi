import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
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
  );
}

//        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
