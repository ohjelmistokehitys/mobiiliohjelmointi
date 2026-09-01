import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyRow from "@/components/my-row";
import MyText from "@/components/my-text";
import MyTextInput from "@/components/my-text-input";
import MyTitle from "@/components/my-title";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";


export default function ShoppingScreen() {

    const [items, setItems] = useState<string[]>(["milk", "bread", "eggs"]);
    const [text, setText] = useState("");

    const addItem = () => {
        if (text.trim() === "") {
            return;
        }

        setItems([...items, text]);
        setText("");
    };

    return <MyContainer>
        <MyTitle>Shopping List</MyTitle>

        <MyTextInput value={text} onChange={setText} />

        <MyRow>
            <MyButton title="Save" onPress={addItem} />
            <MyButton title="Clear all" onPress={() => setItems([])} />
        </MyRow>

        <FlatList
            style={{ alignSelf: "stretch" }}
            data={items.reverse()}
            renderItem={({ item }) => <ShoppingItem item={item} />}
            ListEmptyComponent={() => <MyTitle>No items yet.</MyTitle>} />
    </MyContainer>;
}

function ShoppingItem({ item }: { item: string }) {
    const [checked, setChecked] = useState(false);

    return <Pressable onPress={() => setChecked(!checked)} style={styles.itemContainer}>
        <MyText>
            {item}
        </MyText>
        <MyText>
            {checked ? "✅" : "⬜"}
        </MyText>
    </Pressable>;
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        padding: 15,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: "#bbb",
        justifyContent: "space-between",
    }
});
