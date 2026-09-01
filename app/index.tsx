import MyContainer from "@/components/my-container";
import MyTitle from "@/components/my-title";
import { Link } from "expo-router";
import { PropsWithChildren } from "react";
import { Text } from "react-native";


export default function HomeScreen() {
    return <MyContainer>
        <MyTitle>Welcome!</MyTitle>

        <Link href="/guesser">
            <MyLink>Guesser</MyLink>
        </Link>

        <Link href="/home">
            <MyLink>Home (expo template)</MyLink>
        </Link>

        <Link href="/calculator">
            <MyLink>Calculator</MyLink>
        </Link>

        <Link href="/shopping">
            <MyLink>Shopping list</MyLink>
        </Link>

        <Link href="/news">
            <MyLink>News</MyLink>
        </Link>

    </MyContainer>;
}


function MyLink({ children }: PropsWithChildren) {
    return <Text style={
        {
            color: "blue",
            textDecorationLine: "underline"
        }
    }>{children}</Text>
}
