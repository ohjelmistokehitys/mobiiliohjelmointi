import { PropsWithChildren } from "react";
import { View } from "react-native";
import styles from "./styles";

export default function MyContainer({ children }: PropsWithChildren) {
    return <View style={styles.container}>
        {children}
    </View>;
}

