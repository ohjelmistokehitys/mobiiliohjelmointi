import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import MyButtonGroup from "@/components/MyButtonGroup";
import MyInput from "@/components/MyInput";
import Title from "@/components/Title";
import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text } from "react-native";


export default function ShoppingList() {

    const [text, setText] = useState("");
    const [items, setItems] = useState<string[]>([]);

    const addItem = () => {
        if (text) {
            setItems(items.concat(text));
            setText("");
        }
    };

    const clear = () => {
        Alert.alert("Clear List", "Are you sure you want to clear the list?", [
            { text: "Cancel", style: "cancel" },
            { text: "Clear the list", onPress: () => setItems([]), style: "destructive" },
        ]);
    };

    return (
        <Container>
            <Title>Shopping List</Title>

            <MyInput
                value={text}
                onChangeText={setText}
                placeholder="Item name"
            />

            <MyButtonGroup>
                <MyButton onPress={addItem}>Add</MyButton>
                <MyButton onPress={clear}>Clear</MyButton>
            </MyButtonGroup>

            <FlatList
                data={items}
                renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </Container>
    )
}


const styles = StyleSheet.create({
    listItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
});
