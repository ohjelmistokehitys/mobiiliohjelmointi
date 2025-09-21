import { Text, View } from "react-native";

export function Row({ children }: { children: React.ReactNode }) {
    return <View style={{ flexDirection: 'row', alignSelf: 'stretch', marginVertical: 10 }}>
        {children}
    </View>;
}

export function Cell({ children, width }: { children: string, width: number }) {
    return <View style={{ width: `${width * 100}%` }}>
        <Text>
            {children}
        </Text>
    </View>;
}
