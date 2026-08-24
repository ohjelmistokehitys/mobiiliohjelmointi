import { PropsWithChildren } from "react";
import { Text } from "react-native";
import styles from "./styles";

export default function MyTitle({ children }: PropsWithChildren) {
    return <Text style={styles.title}>{children}</Text>;
}

