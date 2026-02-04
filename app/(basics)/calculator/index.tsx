
import { Container, Heading, Paragraph, Strong } from '@/components/ui/basic-components';
import { styles } from '@/components/ui/styles';
import { Calculation } from '@/types/calculator';
import { Link } from 'expo-router';
import { useContext, useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { HistoryContext } from './_layout';

export default function CalculatorScreen() {

    const [numA, setNumA] = useState("0");
    const [numB, setNumB] = useState("0");

    const { history, setHistory } = useContext(HistoryContext);

    const calculate = (operation: "+" | "-") => {
        const a = +numA;
        const b = +numB;

        if (Number.isNaN(a) || Number.isNaN(b)) {
            Alert.alert(`Please enter numbers only`);
            return;
        }
        setHistory([...history, new Calculation(a, b, operation)]);
    }

    return <Container>
        <Heading>Calculator 🧮</Heading>
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

        <Strong>{history.at(-1)?.toString() ?? "Let's do math!"}</Strong>

        {
            history.length > 0 &&
            <Link href={{ pathname: "/calculator/history", params: { history: JSON.stringify(history) } }}><Paragraph>See history</Paragraph></Link>
        }
    </Container>;
}
