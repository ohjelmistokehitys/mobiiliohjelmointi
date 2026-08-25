import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import styles from "./styles";

type Props = {
    value: number,
    onChange: (value: number) => void
};

export default function MyNumberInput({ value, onChange }: Props) {

    const [text, setText] = useState(value.toString());
    const [error, setError] = useState(false);

    useEffect(() => {
        const num = +(text.replace(",", "."));
        onChange(num);
        setError(isNaN(num));
    }, [text]);

    useEffect(() => {
        if (value === 0) {
            setText(value.toString());
        }
    }, [value]);

    return <TextInput
        value={text}
        inputMode="numeric"
        onChangeText={setText}
        style={[
            styles.input,
            error ? styles.errorInput : {}
        ]} />;
}

