import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { CalculatorContext } from "@/contexts/CalculatorProvider";
import { Link } from "expo-router";
import { PropsWithChildren, useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { WeatherContext } from "./_layout";


export default function HomeScreen() {
    const { history: calculations } = useContext(CalculatorContext);
    const { icon, temp } = useContext(WeatherContext);

    return <MyContainer>
        <MyTitle>Welcome!</MyTitle>
        <MyText>{icon} {temp} &deg;C</MyText>

        <Link href="/map" style={styles.button}>
            <MyLink>Map</MyLink>
        </Link>

        <Link href="/courseSearch" style={styles.button}>
            <MyLink>Course search</MyLink>
        </Link>

        <Link href="/guesser" style={styles.button}>
            <MyLink>Guesser</MyLink>
        </Link>

        <Link href="/home" style={styles.button}>
            <MyLink>Home (expo template)</MyLink>
        </Link>

        <Link href="/calculator" style={styles.button}>
            <MyLink>Calculator ({calculations.length})</MyLink>
        </Link>

        <Link href="/shopping" style={styles.button}>
            <MyLink>Shopping list</MyLink>
        </Link>

        <Link href="/news" style={styles.button}>
            <MyLink>News</MyLink>
        </Link>

    </MyContainer>;
}


function MyLink({ children }: PropsWithChildren) {
    return <Text style={styles.buttonText}>{children}</Text>
}

const styles = StyleSheet.create({
    button: {
        color: "blue",
        padding: 15,
        borderColor: "black",
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 15,
        alignSelf: "stretch"
    },
    buttonText: {
        color: "black",
        alignSelf: "center",
        textAlign: "center",
        fontSize: 16
    }
});
