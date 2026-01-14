import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function DemoScreen() {

    const [name, setName] = useState("Teemu");

    return <View style={styles.container}>
        <Text style={styles.text}>Hello {name || "World"}!</Text>
        <TextInput
            value={name}
            onChangeText={text => setName(text)}
            style={styles.input}
        />
        <Button title="Ok" />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    text: {
        fontSize: 40,
        color: "white"
    },
    input: {
        color: "white",
        padding: 5,
        borderColor: "white",
        borderWidth: 1,
        minWidth: 200
    }
});
