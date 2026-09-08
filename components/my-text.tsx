import { PropsWithChildren } from "react";
import { Text } from "react-native";
import styles from "./styles";

type Props = PropsWithChildren & {
    bold?: boolean,
    italic?: boolean
};

export default function MyText({ children, bold, italic }: Props) {
    return <Text style={[
        styles.text,
        bold ? { fontWeight: "bold" } : {},
        italic ? { fontStyle: "italic" } : {}
    ]}>{children}</Text>;
}
