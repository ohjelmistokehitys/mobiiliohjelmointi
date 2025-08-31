import { Pressable, StyleSheet, Text } from "react-native";


type MyButtonProps = {
    onPress: () => void;
    children: string;
    disabled?: boolean;
};

export default function MyButton({ onPress, children, disabled = false }: MyButtonProps) {
    return (
        <Pressable onPress={onPress} style={[styles.button, disabled && styles.disabled]} disabled={disabled}>
            <Text>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "lightblue",
        padding: 20,
        borderRadius: 10,
        alignItems: "center"
    },
    disabled: {
        backgroundColor: "lightgray"
    }
});
