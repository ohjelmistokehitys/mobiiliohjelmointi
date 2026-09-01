import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        backgroundColor: "white",
        borderColor: "black",
        alignItems: "center",
    },
    text: {
        color: "black",
        fontSize: 15,
        textAlign: "center"
    },
    container: {
        padding: 10,
        paddingTop: 40,
        backgroundColor: "#f0f0f0",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
        padding: 10,
        fontSize: 15,
        width: "100%"
    },
    errorInput: {
        borderColor: "red",
        backgroundColor: "#ffcccc"
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        gap: 10
    },
    title: {
        fontSize: 25,
        textAlign: "center"
    }
});
