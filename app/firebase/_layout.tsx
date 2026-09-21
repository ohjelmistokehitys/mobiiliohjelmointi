import '@/firebase';
import { auth } from '@/firebase';
import { Stack } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function FirebaseLayout() {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, () => {
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

        <Stack.Protected guard={authenticated} >
            <Stack.Screen name="index" options={{
                title: "Firebase"
            }} />
        </Stack.Protected>
    </Stack>;
}
