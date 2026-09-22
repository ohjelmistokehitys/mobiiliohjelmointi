import CalculatorProvider from '@/contexts/CalculatorProvider';
import { useMeteoApi, WeatherContext } from '@/contexts/weather-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useLocation } from '@/hooks/use-location';
import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';

async function initDatabase(db: SQLiteDatabase) {
    await db.execAsync("CREATE TABLE IF NOT EXISTS course (id INTEGER PRIMARY KEY NOT NULL, credits INT, title TEXT);");
}

export default function RootLayout() {

    const colorScheme = useColorScheme();

    const { location } = useLocation();
    const weather = useMeteoApi(location);

    return (
        <SQLiteProvider databaseName="courses.sqlite" onInit={initDatabase}>
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
            </WeatherContext>
        </SQLiteProvider>
    );
}
