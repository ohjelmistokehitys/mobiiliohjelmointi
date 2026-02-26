import { Container, Heading, Strong } from "@/components/ui/basic-components";
import { Link } from "expo-router";
import { ScrollView } from "react-native";

export default function HomeScreen() {
    return <ScrollView>
        <Container>

            <Heading>Home</Heading>

            <Link href="/mapScreen"><Strong>Map</Strong></Link>

            <Link href="/githubSearch"><Strong>GitHub search</Strong></Link>

            <Link href="/shoppingList"><Strong>Shopping list</Strong></Link>

            <Link href="/guesser"><Strong>Guesser</Strong></Link>

            <Link href="/calculator"><Strong>Calculator</Strong></Link>

            <Link href="/articles"><Strong>Articles</Strong></Link>

        </Container>
    </ScrollView>;
}
