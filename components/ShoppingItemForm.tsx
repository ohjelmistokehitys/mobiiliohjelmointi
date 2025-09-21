import { ShoppingItem } from "@/types/shopping";
import { useState } from "react";
import { Alert } from "react-native";
import MyButton from "./MyButton";
import MyInput from "./MyInput";

type FormProps = {
    addItem: (x: ShoppingItem) => void
};

export function CreateItemForm({ addItem }: FormProps) {
    const [inputs, setInputs] = useState<ShoppingItem>({ title: "", amount: "" });

    const save = () => {
        if (!inputs.amount || !inputs.title) {
            Alert.alert("Title and amount are required!");
            return;
        }
        addItem(inputs);
        setInputs({ title: "", amount: "" });
    }
    return <>
        <MyInput
            placeholder="Item title"
            value={inputs.title}
            onChangeText={title => setInputs({ ...inputs, title })} />

        <MyInput
            placeholder="Amount"
            value={inputs.amount}
            onChangeText={amount => setInputs({ ...inputs, amount })} />

        <MyButton onPress={() => save()}>Save</MyButton>
    </>;
}
