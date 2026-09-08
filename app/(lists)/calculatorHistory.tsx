import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyRow from "@/components/my-row";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { useCalculationHistory } from "@/hooks/history-context";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";

export default function CalculatorHistory() {

    const { history, setHistory } = useCalculationHistory();
    const router = useRouter();

    return (
        <MyContainer>
            <MyTitle>Calculator History</MyTitle>

            <FlatList
                data={history.toReversed()}
                renderItem={({ item }) => <MyText>{item.a} {item.op} {item.b} = {item.result}</MyText>}
                ListEmptyComponent={() => <MyText>No calculations yet.</MyText>}
                keyExtractor={(_, index) => index.toString()}
            />

            <MyRow>
                {/* back button is not really necessary, since the phone and the navigator already have one... */}
                <MyButton title="⬅️ Back" onPress={() => { router.back() }} />
                <MyButton title="🗑️ Clear history" onPress={() => { setHistory([]) }} />

            </MyRow>
        </MyContainer>
    );
}

