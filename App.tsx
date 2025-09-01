import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Article from './app/article/index';
import Articles from './app/articles';
import Calculator from './app/calculator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "blue", tabBarInactiveTintColor: "black" }}>
        <Tab.Screen name="Articles" component={ArticleStack} options={{ tabBarIcon: ({ color }) => <Ionicons name="newspaper" size={24} color={color} /> }} />
        <Tab.Screen name="Calculator" component={Calculator} options={{ tabBarIcon: ({ color }) => <Ionicons name="calculator" size={24} color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function ArticleStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Index" component={Articles} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}
