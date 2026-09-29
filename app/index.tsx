import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { CalculatorContext } from "@/contexts/CalculatorProvider";
import { useWeather } from "@/contexts/weather-context";
import { Link } from "expo-router";
import { PropsWithChildren, useContext } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";


export default function HomeScreen() {
    const { history: calculations } = useContext(CalculatorContext);
    const { icon, temp } = useWeather();

    return <MyContainer>

        <MyTitle>Welcome!</MyTitle>
        <MyText>{icon} {temp} &deg;C</MyText>

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollList}>
            <Link href="/camera" style={styles.button}>
                <MyLink>Camera</MyLink>
            </Link>

            <Link href="/contacts" style={styles.button}>
                <MyLink>Contacts</MyLink>
            </Link>

            <Link href="/asyncStorage" style={styles.button}>
                <MyLink>Async Storage</MyLink>
            </Link>

            <Link href="/sqlite" style={styles.button}>
                <MyLink>SQLite</MyLink>
            </Link>

            <Link href="/firebase" style={styles.button}>
                <MyLink>Firebase demo</MyLink>
            </Link>

            <Link href="/location" style={styles.button}>
                <MyLink>GPS location</MyLink>
            </Link>

            <Link href="/courseSearch" style={styles.button}>
                <MyLink>Course search</MyLink>
            </Link>

            <Link href="/guesser" style={styles.button}>
                <MyLink>Guesser</MyLink>
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
        </ScrollView>
    </MyContainer>;
}


function MyLink({ children }: PropsWithChildren) {
    return <Text style={styles.buttonText}>{children}</Text>
}

const styles = StyleSheet.create({
    button: {
        color: "blue",
        padding: 15,
        borderColor: "#222",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 15,
        alignSelf: "stretch"
    },
    scrollView: {
        alignSelf: "stretch",
    },
    scrollList: {
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10
    },
    buttonText: {
        color: "black",
        alignSelf: "center",
        textAlign: "center",
        fontSize: 16
    }
});
