import Container from "@/components/Container";
import MyInput from "@/components/MyInput";
import Title from "@/components/Title";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Text, View } from "react-native";

export default function StorageExample() {

    const [firstName, setFirstName] = usePersistentState("", "key-first-name");
    const [lastName, setLastName] = usePersistentState("", "key-last-name");

    return <Container>

        <Title>Async storage</Title>

        <Text>AsyncStorage is asynchronous and persistent key-value pair storage system. AsyncStorage is suitable for storing small data sets like user profiles, settings, or app state.</Text>

        <Text>Try the following field. It will persist the value between app restarts using async storage.</Text>

        <View style={{ gap: 20, padding: 10, borderWidth: 1, borderColor: "#ccc" }}>
            <MyInput value={firstName} onChangeText={setFirstName} />
            <MyInput value={lastName} onChangeText={setLastName} />
        </View>
    </Container>;
}

function usePersistentState(initial: string, key: string): [string, (x: string) => void] {
    const [text, setText] = useState("");

    useEffect(() => {
        AsyncStorage
            .getItem(key)
            .then(oldText => {
                if (oldText) {
                    setText(oldText);
                }
            });
    }, [key]);

    return [text, (newText) => {
        AsyncStorage.setItem(key, newText);
        setText(newText);
        console.log(`stored ${newText} in ${key}`)
    }]
}
