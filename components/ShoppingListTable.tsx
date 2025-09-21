import { ShoppingItem } from "@/types/shopping";
import { FlatList, Pressable, Text } from "react-native";
import { Cell, Row } from "./MyTable";

type TableProps = { items: ShoppingItem[], removeItem: (x: ShoppingItem) => void };

export function ShoppingListTable({ items, removeItem }: TableProps) {
    return <>
        <Row>
            <Cell width={1 / 3}>Title</Cell>
            <Cell width={1 / 3}>Amount</Cell>
            <Cell width={1 / 3}>Action</Cell>
        </Row>
        <FlatList
            data={items}
            renderItem={({ item }) => <ShoppingListRow key={item.id} item={item} remove={removeItem} />}
        />
    </>
}

type RowProps = {
    item: ShoppingItem,
    remove: (x: ShoppingItem) => void
}

export function ShoppingListRow({ item, remove }: RowProps) {
    return <Row>
        <Cell width={1 / 3}>{item.title}</Cell>
        <Cell width={1 / 3}>{item.amount}</Cell>
        <Pressable
            onPress={() => remove(item)}>
            <Text>🗑️</Text>
        </Pressable>
    </Row>
}
