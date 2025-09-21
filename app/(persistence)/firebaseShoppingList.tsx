import Container from "@/components/Container";
import { CreateItemForm } from "@/components/ShoppingItemForm";
import { ShoppingListTable } from "@/components/ShoppingListTable";
import Title from "@/components/Title";
import { useFirebaseShoppingList } from "@/hooks/firebaseHooks";


export default function FirebaseShoppingList() {
    const { items, handleSave, removeItem } = useFirebaseShoppingList();

    return (
        <Container>
            <Title>Firebase shopping list</Title>

            <CreateItemForm addItem={handleSave} />

            <ShoppingListTable items={items} removeItem={removeItem} />
        </Container>
    );
}
