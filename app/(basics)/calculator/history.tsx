import { Container, Heading, Strong } from "@/components/ui/basic-components";
import { useContext } from "react";
import { FlatList } from "react-native";
import { HistoryContext } from "./_layout";


export default function CalculationHistory() {

    const { history } = useContext(HistoryContext);

    return <Container>
        <Heading>Calculation history</Heading>

        <FlatList
            data={history}
            renderItem={({ item }) => <Strong>{item.toString()}</Strong>}
        />
    </Container>
}
