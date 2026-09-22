import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyNumberInput from "@/components/my-number-input";
import MyText from "@/components/my-text";
import MyTextInput from "@/components/my-text-input";
import MyTitle from "@/components/my-title";
import { auth } from "@/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { FlatList } from "react-native";

type Product = { title: string, amount: number };

export default function FirebaseScreen() {
    const { currentUser } = getAuth();

    // local copy of the items in the database, to be displayed in the FlatList
    const [items, setItems] = useState<Product[]>([]);

    // the current state of the input fields, to be saved to the database when the user presses the "Save" button
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(1);


    if (!currentUser) {
        throw new Error("User is not logged in. This screen should only be accessible to authenticated users.");
    }

    const handleSave = async () => {
        const product = { title, amount };

        // FIXME: This just saves the product locally, save it in Firebase instead
        setItems([...items, product]);
    }

    return <MyContainer>
        <MyTitle>Hello {currentUser.email}!</MyTitle>

        <MyButton onPress={() => signOut(auth)} title="Sign out" />

        <MyText>
            Firebase is a platform developed by Google that provides a variety of tools and services for building and managing mobile and web applications.
        </MyText>

        <MyTextInput
            placeholder="Product title"
            onChange={setTitle}
            value={title}
        />

        <MyNumberInput
            placeholder="Amount"
            onChange={setAmount}
            value={amount}
        />

        <MyButton onPress={handleSave} title="Save" />

        <FlatList
            renderItem={({ item }) =>
                <MyText>{item.title}, {item.amount}</MyText>
            }
            data={items}
        />
    </MyContainer>;
}
