import { TextInput } from "react-native";
import styles from "./styles";

type Props = {
    value: string,
    placeholder?: string,
    onChange: (value: string) => void,
    password?: boolean
};

export default function MyTextInput({ value, placeholder, onChange, password }: Props) {

    return <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={password}
        style={styles.input} />;
}

