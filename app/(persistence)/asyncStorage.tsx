import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput";
import Title from "@/components/Title";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Alert, Text, View } from "react-native";

const key = "storage-key";

export default function StorageExample() {

    const [text, setText] = useState("");

    async function saveText() {
        await AsyncStorage.setItem(key, text);
        Alert.alert('Text saved');
    }

    async function loadText() {
        const storedValue = await AsyncStorage.getItem(key);
        if (storedValue) {
            setText(storedValue);
        }
    }

    useEffect(() => {
        loadText();
    }, []);

    return <Container>

        <Title>Async storage</Title>

        <Text>AsyncStorage is asynchronous and persistent key-value pair storage system. AsyncStorage is suitable for storing small data sets like user profiles, settings, or app state.</Text>

        <Text>Try the following field. It will persist the value between app restarts using async storage.</Text>

        <View style={{ gap: 20, padding: 10, borderWidth: 1, borderColor: "#ccc" }}>
            <MyInput value={text} onChangeText={setText} />
            <MyButton onPress={saveText}>Save text 💾</MyButton>
            <MyButton onPress={loadText}>Restore text ↖️</MyButton>
        </View>
    </Container>;
}
