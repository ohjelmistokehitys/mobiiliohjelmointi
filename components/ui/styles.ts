import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 50,
        alignItems: "center",
        gap: 20
    },
    heading: {
        fontSize: 40,
        color: "white"
    },
    strong: {
        fontWeight: "bold",
        color: "white"
    },
    paragraph: {
        fontSize: 20,
        color: "white"
    },
    input: {
        color: "white",
        padding: 5,
        borderColor: "white",
        borderWidth: 1,
        minWidth: 200
    },
    buttonGroup: {
        flexDirection: "row",
        gap: 20
    },
    button: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18
    }
});
