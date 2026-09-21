import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTextInput from "@/components/my-text-input";
import MyTitle from "@/components/my-title";
import { Link, useRouter } from "expo-router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Alert } from "react-native";

export default function RegisterScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function register() {
        // see https://firebase.google.com/docs/auth/web/start#sign_up_new_users
        const auth = getAuth();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            Alert.alert(`Welcome ${user.email}!`);
            router.navigate("/firebase");

        } catch (error: any) {
            console.error(error);
            Alert.alert(error.message);
        }
    }

    return <MyContainer>
        <MyTitle>Register</MyTitle>

        <MyTextInput placeholder="email@example.com" value={email} onChange={setEmail} />

        <MyTextInput placeholder="password" value={password} onChange={setPassword} password={true} />

        <MyButton title="Sign up" onPress={register} />

        <Link href="/firebase/login">
            <MyText>Existing user? Log in!</MyText>
        </Link>
    </MyContainer>;
}
