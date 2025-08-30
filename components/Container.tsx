import { StyleSheet, View, ViewProps } from "react-native";


export default function Container({ children }: ViewProps) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eeeeee",
        padding: 10,
        gap: 10,
        justifyContent: "flex-start",
        flex: 1
    },
})
