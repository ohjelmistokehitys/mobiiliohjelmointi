import { useCalculationHistory } from '@/contexts/calculation-context';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabLayout() {

    const { history } = useCalculationHistory();

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Calculator',
                    tabBarIcon: () => <Text>🧮</Text>,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: `History (${history.length})`,
                    tabBarIcon: () => <Text>🗒️</Text>,
                }}
            />
        </Tabs>
    );
}
