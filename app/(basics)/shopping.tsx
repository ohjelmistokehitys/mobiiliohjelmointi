import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyRow from "@/components/my-row";
import MyText from "@/components/my-text";
import MyTextInput from "@/components/my-text-input";
import MyTitle from "@/components/my-title";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";

type ShoppingItem = {
    name: string,
    checked: boolean,
    key: number
}

export default function ShoppingScreen() {

    const [items, setItems] = useState<ShoppingItem[]>([
        { name: "milk", checked: false, key: 0 },
        { name: "bread", checked: false, key: 1 },
        { name: "eggs", checked: false, key: 2 }
    ]);

    const [text, setText] = useState("");

    const setChecked = (check: ShoppingItem) => {
        setItems(items.map(current => current === check ? { ...current, checked: !current.checked } : current));
    }

    const addItem = () => {
        if (text.trim() === "") {
            return;
        }

        setItems([...items, {
            name: text,
            checked: false,
            key: Math.random()
        }]);

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
            data={items.toReversed()}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ item }) => <ShoppingComponent item={item} toggleCheck={() => setChecked(item)} />}
            ListEmptyComponent={() => <MyText>No items yet.</MyText>}
        />
    </MyContainer>;
}

function ShoppingComponent({ item, toggleCheck }: { item: ShoppingItem, toggleCheck: () => void }) {
    return <Pressable onPress={toggleCheck} style={styles.itemContainer}>
        <MyText>
            {item.name}
        </MyText>
        <MyText>
            {item.checked ? "✅" : "⬜"}
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
