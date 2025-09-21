import { database } from "@/firebaseConfig";
import { ShoppingItem } from "@/types/shopping";
import { onValue, push, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";

export function useFirebaseShoppingList() {
    const [items, setItems] = useState<ShoppingItem[]>([]);

    const handleSave = (item: ShoppingItem) => {
        push(ref(database, "items/"), item);
    }

    const removeItem = (item: ShoppingItem) => {
        remove(ref(database, "items/" + item.id));
    }

    useEffect(() => {
        return onValue(ref(database, "items/"), (snapshot) => {
            const data = snapshot.val() as Record<string, ShoppingItem>;

            if (data) {
                // add an id in each object, so they can be later used to delete items:
                const itemsWithId = Object.entries(data).map(([id, item]) => ({ ...item, id }));
                setItems(itemsWithId);
            } else {
                setItems([]);
            }

        });
    }, []);

    return {
        items, handleSave, removeItem
    }
}
