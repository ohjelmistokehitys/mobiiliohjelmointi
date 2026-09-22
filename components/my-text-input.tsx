import { TextInput } from "react-native";
import styles from "./styles";

type Props = {
    value: string,
    placeholder?: string,
    onChange: (value: string) => void,
    password?: boolean,
    multiline?: boolean
};

export default function MyTextInput({ value, placeholder, onChange, password, multiline }: Props) {

    return <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={password}
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        style={[styles.input, multiline && styles.multiline]} />;
}

