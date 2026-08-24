import { Pressable, Text } from "react-native";
import styles from "./styles";

export default function MyButton({ title, onPress }: { title: string; onPress: () => void }) {
    return <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
}

