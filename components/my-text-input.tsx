import { TextInput } from "react-native";
import styles from "./styles";

type Props = {
    value: string,
    placeholder?: string,
    onChange: (value: string) => void
};

export default function MyTextInput({ value, placeholder, onChange }: Props) {

    return <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        style={styles.input} />;
}

