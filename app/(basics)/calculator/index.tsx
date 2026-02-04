
import { Container, Heading, Paragraph, Strong } from '@/components/ui/basic-components';
import { styles } from '@/components/ui/styles';
import { useCalculationHistory } from '@/contexts/calculation-context';
import { Calculation } from '@/types/calculator';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';


export default function CalculatorScreen() {

    const [numA, setNumA] = useState("0");
    const [numB, setNumB] = useState("0");

    const { history, setHistory } = useCalculationHistory();

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

        {/* FIXME: "should contain identifiers and state, not actual data objects" */}
        <Link href="/calculator/history"><Paragraph>See history ({history.length})</Paragraph></Link>

        <Link href="/"><Paragraph>Back to start</Paragraph></Link>
    </Container>;
}
