import { Container, Heading } from '@/components/ui/basic-components';
import { CameraCapturedPicture, CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function CameraScreen() {

    const [permissions, requestPermissions] = useCameraPermissions();
    const [torchOn, setTorchOn] = useState(false);
    const [picture, setPicture] = useState<CameraCapturedPicture | null>(null);
    const cameraRef = useRef<CameraView | null>(null);

    if (!permissions) {
        return <Container><Heading>Loading</Heading></Container>
    }

    if (!permissions.granted) {
        requestPermissions();
    }

    async function takePicture() {
        const pic = await cameraRef.current!.takePictureAsync();
        setPicture(pic);
    }

    return <View style={StyleSheet.absoluteFillObject}>
        <CameraView style={StyleSheet.absoluteFillObject} enableTorch={torchOn} ref={cameraRef} />

        <View style={styles.buttonGroup}>
            <Image style={[styles.baseButton, styles.thumbnail]} src={picture?.uri} />
            <Pressable style={[styles.baseButton, styles.pictureButton]} onPress={() => takePicture()}><Text>📷</Text></Pressable>
            <Pressable style={[styles.baseButton, torchOn && { backgroundColor: "yellow" }]} onPress={() => setTorchOn(!torchOn)}><Text>🔦</Text></Pressable>
        </View>
    </View>;
}


const styles = StyleSheet.create({
    baseButton: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderRadius: 25,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    pictureButton: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    thumbnail: {
    },
    buttonGroup: {
        position: "absolute",
        bottom: 100,
        flexDirection: "row",
        gap: 20,
        justifyContent: "center",
        left: 0,
        right: 0,
        alignItems: "center"
    }
});
