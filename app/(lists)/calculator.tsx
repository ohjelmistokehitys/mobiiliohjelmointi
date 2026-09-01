import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyNumberInput from "@/components/my-number-input";
import MyRow from "@/components/my-row";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { useState } from "react";
import { FlatList, View } from "react-native";


export default function CalculatorScreen() {

    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    const [message, setMessage] = useState("");
    const [history, setHistory] = useState<Calculation[]>([]);

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

            <MyNumberInput value={a} onChange={setA} />

            <MyNumberInput value={b} onChange={setB} />

            <MyRow>
                <MyButton title="+" onPress={() => calculate("+")} />
                <MyButton title="-" onPress={() => calculate("-")} />
                <MyButton title="Clear history" onPress={() => setHistory([])} />
            </MyRow>

            <MyTitle>{message}</MyTitle>

            <CalculatorHistory history={history} />
        </MyContainer>
    );
}

function CalculatorHistory({ history }: { history: Calculation[] }) {
    return <View style={{ flexShrink: 1, alignSelf: "stretch" }}>
        <MyTitle>History</MyTitle>
        <FlatList
            data={history.reverse()}
            renderItem={({ item }) => <MyText>{item.a} {item.op} {item.b} = {item.result}</MyText>}
            ListEmptyComponent={() => <MyText>No calculations yet.</MyText>}
            keyExtractor={(_, index) => index.toString()}
        />
    </View>;
}

type Calculation = {
    a: number;
    b: number;
    op: "+" | "-";
    result: number;
}
