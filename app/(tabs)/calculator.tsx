
import { Container, Heading, Paragraph } from '@/components/ui/basic-components';
import { styles } from '@/components/ui/styles';
import { useState } from 'react';
import { Alert, FlatList, Pressable, Text, TextInput, View } from 'react-native';



export default function CalculatorScreen() {

    const [numA, setNumA] = useState("0");
    const [numB, setNumB] = useState("0");
    const [history, setHistory] = useState<readonly Calculation[]>([]);

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

        <FlatList
            data={history.toReversed()}
            ListEmptyComponent={<Paragraph>Let&apos;s do math!</Paragraph>}
            renderItem={({ item }) => <Paragraph>{item.toString()}</Paragraph>}
        />

    </Container>;
}

class Calculation {
    constructor(
        readonly numA: number,
        readonly numB: number,
        readonly op: "+" | "-") {
    }

    get result() {
        return this.op === "+" ? this.numA + this.numB : this.numA - this.numB;
    }

    toString() {
        return `${this.numA} ${this.op} ${this.numB} = ${this.result}`;
    }
}
