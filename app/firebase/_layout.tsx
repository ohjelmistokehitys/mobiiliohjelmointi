import '@/firebase';
import { Stack } from 'expo-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function FirebaseLayout() {

    const auth = getAuth();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        return onAuthStateChanged(auth, () => {
            setAuthenticated(!!auth.currentUser);
            console.log("Signed in as", auth.currentUser);
        });
    }, []);

    return <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={!authenticated}>
            <Stack.Screen name="login" options={{
                title: "Login"
            }} />
            <Stack.Screen name="register" options={{
                title: "Register"
            }} />
        </Stack.Protected>

        <Stack.Protected guard={authenticated}>
            <Stack.Screen name="index" options={{
                title: "Firebase"
            }} />
        </Stack.Protected>
    </Stack>;
}
