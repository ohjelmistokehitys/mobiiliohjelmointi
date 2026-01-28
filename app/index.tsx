import { Container, Heading, Strong } from "@/components/ui/basic-components";
import { Link } from "expo-router";

export default function HomeScreen() {
    return <Container>
        <Heading>Home</Heading>

        <Link href="/shoppingList"><Strong>Shopping list</Strong></Link>

        <Link href="/calculator"><Strong>Calculator</Strong></Link>

        <Link href="/articles"><Strong>Articles</Strong></Link>

    </Container>;
}
