import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import MyButtonGroup from "@/components/MyButtonGroup";
import MyInput from "@/components/MyInput";
import Title from "@/components/Title";
import { useState } from "react";
import { Alert, FlatList, Text } from "react-native";

type Calculation = {
    a: number;
    b: number;
    operation: "+" | "-";
    result: number;
};

export default function Calculator() {
    const [a, setA] = useState("0");
    const [b, setB] = useState("0");
    const [calculations, setCalculations] = useState<Calculation[]>([]);

    function calculate(operation: "+" | "-") {
        const numA = +a;
        const numB = +b;

        const result = operation === "+" ? numA + numB : numA - numB;

        if (Number.isNaN(result)) {
            Alert.alert(`Please input a valid number`);
        } else {
            setCalculations([...calculations, { a: numA, b: numB, operation, result }]);
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

            <MyButtonGroup>
                <MyButton onPress={() => calculate("+")}>+</MyButton>
                <MyButton onPress={() => calculate("-")}>-</MyButton>
            </MyButtonGroup>

            <Text>Result(s):</Text>

            <FlatList
                data={calculations.toReversed()}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text>{item.a} {item.operation} {item.b} = {item.result}</Text>
                )}
            />

        </Container>
    );
}
