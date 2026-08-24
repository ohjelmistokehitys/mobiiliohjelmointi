import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyNumberInput from "@/components/my-number-input";
import MyRow from "@/components/my-row";
import MyTitle from "@/components/my-title";
import { useState } from "react";
import { Text } from "react-native";


export default function CalculatorScreen() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState("");

    function calculate(op: "+" | "-") {
        if (Number.isNaN(a) || Number.isNaN(b)) {
            setResult("Please enter valid numbers for both inputs.");
            return;
        }
        if (op === "+") {
            setResult(`${a} + ${b} = ${a + b}`);
        }
        if (op === "-") {
            setResult(`${a} - ${b} = ${a - b}`);
        }
        console.log(a, b, result);
    }

    return (
        <MyContainer>
            <MyTitle>Calculator</MyTitle>

            <MyNumberInput value={a} onChange={setA} />

            <MyNumberInput value={b} onChange={setB} />

            <MyRow>
                <MyButton title="+" onPress={() => calculate("+")} />
                <MyButton title="-" onPress={() => calculate("-")} />
            </MyRow>

            <Text>{result}</Text>
        </MyContainer>
    );
}
