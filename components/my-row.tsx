import { PropsWithChildren } from "react";
import { View } from "react-native";
import styles from "./styles";

export default function MyRow({ children }: PropsWithChildren) {
    return <View style={styles.row}>
        {children}
    </View>;
}
