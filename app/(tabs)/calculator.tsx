import { styles } from '@/components/ui/styles';
import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';

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
            inputMode="numeric"
        />
        <TextInput
            value={numB}
            onChangeText={value => setNumB(value)}
            style={styles.input}
            inputMode="numeric"
        />
        <View style={styles.buttonGroup}>
            <Pressable style={styles.button} onPress={() => calculate("+")}><Text style={styles.buttonText}>+</Text></Pressable>
            <Pressable style={styles.button} onPress={() => calculate("-")}><Text style={styles.buttonText}>-</Text></Pressable>
        </View>

        <Text style={styles.paragraph}>Result: {result}</Text>
    </View >;
}
