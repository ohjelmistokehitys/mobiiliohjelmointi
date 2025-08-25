import { StyleSheet, Text } from "react-native";

type TitleProps = {
    children: string
}

export default function Title({ children }: TitleProps) {
    return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25
    }
});