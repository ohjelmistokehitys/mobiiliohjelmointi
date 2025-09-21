import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import MyButtonGroup from "@/components/MyButtonGroup";
import MyInput from "@/components/MyInput";
import Title from "@/components/Title";
import { useCalculationHistory } from "@/contexts/calculatorContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text } from "react-native";


export default function Calculator() {
    const [a, setA] = useState("0");
    const [b, setB] = useState("0");

    const { history, add } = useCalculationHistory();
    const router = useRouter();

    const result = history.at(-1);

    function calculate(operation: "+" | "-") {
        const numA = +a;
        const numB = +b;

        const result = operation === "+" ? numA + numB : numA - numB;

        if (Number.isNaN(result)) {
            Alert.alert(`Please input a valid number`);
        } else {
            add({ a: numA, b: numB, operation, result });
        }
    }

    return (
        <Container>
            <Title>Calculator</Title>
            <MyInput
                value={a}
                placeholder="Enter a number"
                keyboardType="numeric"
                onChangeText={text => setA(text)}
            />
            <MyInput
                value={b}
                placeholder="Enter a number"
                keyboardType="numeric"
                onChangeText={text => setB(text)}
            />

            {result ? (
                <>
                    <Text>Result:</Text>
                    <Text>{result.a} {result.operation} {result.b} = {result.result}</Text>
                </>
            ) : (
                <Text>No calculations yet</Text>
            )}

            <MyButtonGroup>
                <MyButton onPress={() => calculate("+")}>+</MyButton>
                <MyButton onPress={() => calculate("-")}>-</MyButton>
                <MyButton onPress={() => router.navigate("/calculatorHistory")}>See history</MyButton>
            </MyButtonGroup>
        </Container>
    );
}
