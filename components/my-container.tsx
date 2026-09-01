import { PropsWithChildren } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";

export default function MyContainer({ children }: PropsWithChildren) {
    return <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView >;
}

