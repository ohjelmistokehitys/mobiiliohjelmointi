import { Alert, Pressable, StyleSheet, Text } from "react-native";


type MyButtonProps = {
    onPress: () => void;
    children: string;
    disabled?: boolean;
    danger?: boolean;
};

export default function MyButton({ onPress, children, disabled = false, danger = false }: MyButtonProps) {
    return (
        <Pressable
            onPress={() => danger ? confirm(onPress) : onPress()}
            style={[styles.button, disabled && styles.disabled, danger && styles.danger]}
            disabled={disabled}
        >
            <Text>{children}</Text>
        </Pressable>
    );
}

function confirm(onPress: MyButtonProps["onPress"]) {
    return Alert.alert(
        "Are you sure?",
        "This action cannot be undone.",
        [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "OK",
                style: "destructive",
                onPress,
            }
        ]
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
    },
    danger: {
        backgroundColor: "salmon"
    }
});
