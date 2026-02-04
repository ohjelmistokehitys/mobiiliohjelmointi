import { Container, Heading, Strong } from "@/components/ui/basic-components";
import { useCalculationHistory } from "@/contexts/calculation-context";
import { Button, FlatList } from "react-native";


export default function CalculationHistory() {

    const { history, setHistory } = useCalculationHistory();

    return <Container>
        <Heading>Calculation history</Heading>

        <FlatList
            data={history}
            renderItem={({ item }) => <Strong>{item.toString()}</Strong>}
            ListEmptyComponent={<Strong>No history yet...</Strong>}
        />

        <Button title="Clear history" onPress={() => setHistory([])} />
    </Container>
}
