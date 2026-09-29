import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import { CameraCapturedPicture, CameraView, useCameraPermissions } from "expo-camera";
import { Image } from "expo-image";
import { Stack } from "expo-router";
import { useRef, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";

export default function CameraScren() {
    const [permissions, requestPermissions] = useCameraPermissions();
    const [torchOn, setTorchOn] = useState(false);
    const [picture, setPicture] = useState<CameraCapturedPicture>();

    const cameraRef = useRef<CameraView>(null);

    if (!permissions) {
        return <MyContainer><ActivityIndicator /></MyContainer>;
    }

    if (!permissions.granted) {
        return <MyContainer>
            <MyText>Camera requires permissions</MyText>
            <MyButton title="Use camera" onPress={() => requestPermissions()} />
        </MyContainer>;
    }

    function toggleTorch() {
        setTorchOn(!torchOn);
    }

    async function takePicture() {
        const picture = await cameraRef.current!.takePictureAsync({ quality: 0.1 });
        setPicture(picture);
    }

    return <MyContainer>
        <CameraView style={StyleSheet.absoluteFill} enableTorch={torchOn} ref={cameraRef}>
        </CameraView>
        <View style={styles.buttonGrid}>
            <View
                style={styles.button}
            >
                <Image source={{ uri: picture?.uri }} style={{ width: "100%", height: "100%" }} />
            </View>
            <Pressable
                style={[styles.button, styles.shutterButton]}
                onPress={takePicture}
            >
                <Text>📷</Text>
            </Pressable>
            <Pressable
                style={[styles.button, torchOn && { backgroundColor: "yellow" }]}
                onPress={toggleTorch}
            >
                <Text>🔦</Text>
            </Pressable>
        </View>
        <Stack.Screen options={{ headerShown: false }} />
    </MyContainer>
}

const styles = StyleSheet.create({
    buttonGrid: {
        flexDirection: "row",
        gap: 20,
        position: "absolute",
        alignItems: "center",
        bottom: 80
    },
    button: {
        backgroundColor: "white",
        height: 60,
        width: 60,
        borderRadius: "50%",
        borderColor: "black",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    shutterButton: {
        height: 80,
        width: 80
    }
});
