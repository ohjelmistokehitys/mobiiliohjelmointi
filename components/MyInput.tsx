import { StyleSheet, TextInput } from "react-native";

type MyInputProps = {
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: "default" | "numeric";
    placeholder?: string,
    editable?: boolean
}

export default function MyInput({ value, onChangeText, keyboardType = "default", placeholder, editable = true }: MyInputProps) {
    return <TextInput
        value={value}
        style={inputStyles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        editable={editable}
        onChangeText={onChangeText}
    />;
}

export const inputStyles = StyleSheet.create({
    input: {
        borderColor: "black",
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "white"
    }
});
