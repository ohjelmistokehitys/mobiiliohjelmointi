import Container from "@/components/Container";
import Title from "@/components/Title";
import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable, Text, View } from "react-native";

const exampleIcons = ["home", "person", "star", "heart", "settings", "camera", "chatbubble", "alarm", "cloud", "calendar", "cart", "search", "lock-closed", "mail", "call", "bookmark", "globe", "musical-notes", "notifications", "trash", "push", "map", "filter", "at", "link", "image", "text", "alert", "checkbox", "menu", "radio", "timer", "close", "book", "pause", "laptop", "save", "eye", "enter", "calculator", "download", "play", "barcode", "hourglass", "key", "flag", "car", "man", "gift", "wallet", "woman", "earth", "wifi"];

export default function Icons() {
    return (
        <Container>
            <Title>Icons</Title>

            <Text>Tap an icon to see its name</Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {exampleIcons.map(iconName => (
                    <Pressable key={iconName} onPress={() => Alert.alert(iconName)}>
                        <Ionicons name={iconName as any} size={32} style={{ margin: 5 }} />
                    </Pressable>
                ))}
            </View>
        </Container>
    )
}
