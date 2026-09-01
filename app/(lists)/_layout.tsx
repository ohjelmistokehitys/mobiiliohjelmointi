import { Tabs } from "expo-router";
import { Text } from "react-native";



export default function ListScreensTabLayout() {
    return <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
            name="calculator"
            options={{
                title: "Calculator",
                tabBarIcon: () => <Text>🧮</Text>
            }}
        />
        <Tabs.Screen
            name="shopping"
            options={{
                title: "Shopping list",
                tabBarIcon: () => <Text>🛒</Text>
            }}
        />
    </Tabs>;
}
