import { StyleSheet, View, ViewProps } from "react-native";


export default function MyButtonGroup({ children }: ViewProps) {
    return (
        <View style={styles.buttonContainer}>
            {children}
        </View>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20
    }
});
