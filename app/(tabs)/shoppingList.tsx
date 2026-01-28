
import { Container, Heading, Paragraph } from '@/components/ui/basic-components';
import { styles } from '@/components/ui/styles';
import { useState } from 'react';
import { Alert, FlatList, Pressable, Text, TextInput, View } from 'react-native';

export default function ShoppingListScreen() {

    const [itemText, setItemText] = useState("");
    const [items, setItems] = useState<string[]>([]);

    const addItem = () => {
        setItems(items.concat(itemText));
        setItemText("");
    }

    const clear = () => {
        Alert.alert("Clear the list?",
            "Are you sure you want to clear the list?",
            [{ text: "Ok", onPress: () => setItems([]) }, { text: "Cancel" }]);
    }

    return <Container>
        <Heading>Shopping list 🛒</Heading>
        <TextInput
            value={itemText}
            onChangeText={text => setItemText(text)}
            style={styles.input}
            onSubmitEditing={addItem}
        />
        <View style={styles.buttonGroup}>
            <Pressable style={styles.button} onPress={addItem}><Text style={styles.buttonText}>Add</Text></Pressable>
            <Pressable style={styles.button} onPress={clear}><Text style={styles.buttonText}>Clear</Text></Pressable>
        </View>

        <FlatList
            data={items}
            ListEmptyComponent={<Paragraph>Add items to shopping list!</Paragraph>}
            renderItem={({ item }) => <Paragraph>{item}</Paragraph>}
        />

    </Container>;
}

