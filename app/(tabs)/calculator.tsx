import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CalculatorScreen() {

    const [numA, setNumA] = useState("0");
    const [numB, setNumB] = useState("0");
    const [result, setResult] = useState(0);

    const calculate = (operation: "+" | "-") => {
        const a = +numA;
        const b = +numB;

        if (Number.isNaN(a) || Number.isNaN(b)) {
            Alert.alert(`Please enter numbers only`);
            return;
        }

        setResult(operation === "+" ? a + b : a - b);
    }

    return <View style={styles.container}>
        <Text style={styles.heading}>Calculator</Text>
        <TextInput
            value={numA}
            onChangeText={value => setNumA(value)}
            style={styles.input}
        />
        <TextInput
            value={numB}
            onChangeText={value => setNumB(value)}
            style={styles.input}
        />
        <View style={styles.buttonGroup}>
            <Pressable style={styles.button} onPress={() => calculate("+")}><Text style={styles.buttonText}>+</Text></Pressable>
            <Pressable style={styles.button} onPress={() => calculate("-")}><Text style={styles.buttonText}>-</Text></Pressable>
        </View >

        <Text style={styles.paragraph}>Result: {result}</Text>
    </View >;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "flex-start",
        marginTop: 50,
        alignItems: "center",
        gap: 20
    },
    heading: {
        fontSize: 40,
        color: "white"
    },
    paragraph: {
        fontSize: 20,
        color: "white"
    },
    input: {
        color: "white",
        padding: 5,
        borderColor: "white",
        borderWidth: 1,
        minWidth: 200
    },
    buttonGroup: {
        flexDirection: "row",
        gap: 20
    },
    button: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18
    }
});
