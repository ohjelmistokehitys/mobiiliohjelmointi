import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import Title from "@/components/Title";
import { useCalculationHistory } from "@/contexts/calculatorContext";
import { useRouter } from "expo-router";
import { FlatList, Text } from "react-native";

export default function CalculatorHistory() {

    const { history, clear } = useCalculationHistory();
    const router = useRouter();

    return (
        <Container>
            <Title>Calculation history</Title>

            <FlatList
                data={history.toReversed()}
                style={{ flexGrow: 0 }}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text>{item.a} {item.operation} {item.b} = {item.result}</Text>
                )}
            />

            <MyButton onPress={() => router.back()}>Go back</MyButton>
            <MyButton onPress={clear} danger>Clear history</MyButton>

        </Container >
    );
}
