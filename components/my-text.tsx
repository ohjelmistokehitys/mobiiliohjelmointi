import { PropsWithChildren } from "react";
import { Text } from "react-native";
import styles from "./styles";

export default function MyText({ children }: PropsWithChildren) {
    return <Text style={styles.text}>{children}</Text>;
}
