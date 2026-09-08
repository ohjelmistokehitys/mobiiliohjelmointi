import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyNumberInput from "@/components/my-number-input";
import MyRow from "@/components/my-row";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { Link } from "expo-router";
import { useContext, useState } from "react";
import { CalculatorContext } from "../../contexts/CalculatorProvider";


export default function CalculatorScreen() {

    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    const [message, setMessage] = useState("");

    const { history, setHistory } = useContext(CalculatorContext);

    function calculate(op: "+" | "-") {
        if (Number.isNaN(a) || Number.isNaN(b)) {
            setMessage("Please enter valid numbers for both inputs.");
            return;
        }

        const calc = {
            a, b, op, result: op === "+" ? a + b : a - b
        };

        setMessage(`${a} ${op} ${b} = ${calc.result}`);

        setHistory([...history, calc]);
    }

    return (
        <MyContainer>
            <MyTitle>Calculator</MyTitle>

            <MyNumberInput value={a} onChange={setA} onSubmit={() => calculate("+")} />

            <MyNumberInput value={b} onChange={setB} onSubmit={() => calculate("+")} />

            <MyRow>
                <MyButton title="+" onPress={() => calculate("+")} />
                <MyButton title="-" onPress={() => calculate("-")} />
            </MyRow>

            <MyTitle>{message}</MyTitle>

            <Link href="/calculatorHistory"><MyText>See history ({history.length})</MyText></Link>

        </MyContainer>
    );
}

export type Calculation = {
    a: number;
    b: number;
    op: "+" | "-";
    result: number;
}
