import { TextInput } from "react-native";
import styles from "./styles";

type Props = {
    value: string,
    onChange: (value: string) => void
};

export default function MyTextInput({ value, onChange }: Props) {

    return <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input} />;
}

