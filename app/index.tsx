import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { Link } from "expo-router";
import { PropsWithChildren } from "react";
import { Text } from "react-native";

export default function WelcomeScreen() {
    return <MyContainer>
        <MyTitle>Welcome to the app! </MyTitle>

        <MyText>
            This is a simple React Native app built with Expo and TypeScript.
        </MyText>

        <MyText>Basics</MyText>

        <Link href="/guesser">
            <MyLinkText>Guessing game</MyLinkText>
        </Link>

        <MyText>Lists</MyText>

        <Link href="/calculator">
            <MyLinkText>Calculator</MyLinkText>
        </Link>

        <Link href="/news/list">
            <MyLinkText>News</MyLinkText>
        </Link>
    </MyContainer>;
}


function MyLinkText({ children }: PropsWithChildren) {
    return <Text style={{ color: "blue", fontSize: 20, padding: 10, textDecorationLine: "underline" }}>
        {children}
    </Text>;
}
