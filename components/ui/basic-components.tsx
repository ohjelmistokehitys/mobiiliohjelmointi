import { Text, TextProps, View, ViewProps } from "react-native";
import { styles } from "./styles";

export function Container(props: ViewProps) {
    return <View style={styles.container}>
        {props.children}
    </View>;
}

export function Heading(props: TextProps) {
    return <Text style={styles.heading}>{props.children}</Text>;
}

export function Strong(props: TextProps) {
    return <Text style={styles.strong}>{props.children}</Text>;
}

export function Paragraph(props: TextProps) {
    return <Text style={styles.paragraph}>{props.children}</Text>;
}
