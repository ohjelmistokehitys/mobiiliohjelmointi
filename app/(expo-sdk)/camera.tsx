import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import { CameraCapturedPicture, CameraView, useCameraPermissions } from "expo-camera";
import { Image } from "expo-image";
import { useRef, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, View } from "react-native";

export default function CameraScreen() {

    const [torchOn, setTorchOn] = useState(false);
    const [picture, setPicture] = useState<CameraCapturedPicture | null>(null);

    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<CameraView>(null);

    if (!permission) {
        return <MyContainer><ActivityIndicator /></MyContainer>;
    }

    if (!permission.granted) {
        return <MyContainer>
            <MyText>Camera permission required.</MyText>
            <MyButton title="Use camera" onPress={() => requestPermission()} />
        </MyContainer>;
    }

    async function takePhoto() {
        const picture = await cameraRef.current!.takePictureAsync();
        setPicture(picture);
    }

    return <MyContainer>
        <CameraView
            enableTorch={torchOn}
            style={StyleSheet.absoluteFill}
            ref={cameraRef}
        />

        <View style={styles.buttonRow}>
            <Pressable style={styles.button}><Image source={{ uri: picture?.uri }} style={{ width: "100%", height: "100%" }} /></Pressable>
            <Pressable style={[styles.button, styles.takePicButton]} onPress={takePhoto}><MyText>📷</MyText></Pressable>
            <Pressable style={[styles.button, torchOn && { backgroundColor: "yellow" }]} onPress={() => setTorchOn(!torchOn)}><MyText>🔦</MyText></Pressable>
        </View>

    </MyContainer>;
}

const styles = StyleSheet.create({
    buttonRow: {
        position: "absolute",
        bottom: 60,
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    button: {
        backgroundColor: "white",
        width: 60,
        height: 60,
        borderRadius: "50%",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 1,
        overflow: "hidden"
    },
    takePicButton: {
        width: 80,
        height: 80
    }
})
