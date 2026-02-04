import { Paragraph } from '@/components/ui/basic-components';
import { Calculation } from '@/types/calculator';
import { Tabs } from 'expo-router';
import { createContext, useState } from 'react';

export default function TabLayout() {

    const [history, setHistory] = useState<Calculation[]>([]);

    return (
        <HistoryContext.Provider value={{ history, setHistory }}>
            <Tabs screenOptions={{ headerShown: false }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Calculator',
                        tabBarIcon: ({ color }) => <Paragraph>🧮</Paragraph>,
                    }}
                />
                <Tabs.Screen
                    name="history"
                    options={{
                        title: `History (${history.length})`,
                        tabBarIcon: ({ color }) => <Paragraph>🗒️</Paragraph>,
                    }}
                />
            </Tabs>
        </HistoryContext.Provider>
    );
}

type HistoryProps = { history: Calculation[], setHistory: (history: Calculation[]) => void };

export const HistoryContext = createContext<HistoryProps>({ history: [], setHistory: () => { } });
