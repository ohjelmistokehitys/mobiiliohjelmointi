import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import styles from "./styles";

type Props = {
    value: number,
    onChange: (value: number) => void,
    placeholder?: string,
    onSubmit?: () => void
};

export default function MyNumberInput({ value, onChange, onSubmit, placeholder }: Props) {

    const [text, setText] = useState(value.toString());
    const [error, setError] = useState(false);

    useEffect(() => {
        const num = +(text.replace(",", "."));
        onChange(num);
        setError(isNaN(num));
    }, [text, onChange]);

    useEffect(() => {
        if (value === 0) {
            setText(value.toString());
        }
    }, [value]);

    return <TextInput
        value={text}
        inputMode="numeric"
        onChangeText={setText}
        placeholder={placeholder}
        onSubmitEditing={() => onSubmit && onSubmit()}
        style={[
            styles.input,
            error ? styles.errorInput : {}
        ]} />;
}

