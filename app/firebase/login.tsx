import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTextInput from "@/components/my-text-input";
import MyTitle from "@/components/my-title";
import { Link, useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert } from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function login() {
        // see https://firebase.google.com/docs/auth/web/start#sign_in_existing_users
        const auth = getAuth();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("logged in", user);

            router.navigate("/firebase");

        } catch (error: any) {
            console.error(error);
            Alert.alert(error.message);
        }
    }

    return <MyContainer>
        <MyTitle>Log in</MyTitle>

        <MyTextInput placeholder="email@example.com" value={email} onChange={setEmail} />

        <MyTextInput placeholder="password" value={password} onChange={setPassword} password={true} />

        <MyButton title="Log in" onPress={login} />

        <Link href="/firebase/register">
            <MyText>New user? Sign up!</MyText>
        </Link>
    </MyContainer>;
}
