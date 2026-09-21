import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export default function FirebaseScreen() {
    const { currentUser } = auth;

    return <MyContainer>
        <MyTitle>Firebase demo</MyTitle>

        <MyText>Hello {currentUser?.email}</MyText>
        <MyButton onPress={() => signOut(auth)} title="Sign out" />
    </MyContainer>;
}
