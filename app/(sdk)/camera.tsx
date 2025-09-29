import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import MyButtonGroup from "@/components/MyButtonGroup";
import Title from "@/components/Title";
import { CameraCapturedPicture, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from "react";
import { FlatList, Image, StyleSheet } from "react-native";

export default function CameraScreen() {

    const [pictures, setPictures] = useState<CameraCapturedPicture[]>([]);
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const camera = useRef<CameraView>(null);

    if (!permission) {
        return <Container>
            <Title>Requesting camera permission...</Title>
        </Container>;
    }

    if (!permission.granted) {
        return (
            <Container>
                <Title>We need your permission to show the camera</Title>
                <MyButton onPress={requestPermission}>Grant permission</MyButton>
            </Container>
        );
    }

    async function takePhoto() {
        if (camera.current) {
            const picture = await camera.current.takePictureAsync();
            setPictures(prevPictures => [...prevPictures, picture]);
        }
    }

    function toggleFacing() {
        setFacing(facing === 'front' ? 'back' : 'front');
    }

    return <Container>
        <Title>Camera</Title>

        <CameraView style={styles.stretch} ref={camera} facing={facing} />

        <MyButtonGroup>
            <MyButton onPress={takePhoto}>📸 Take photo</MyButton>
            <MyButton onPress={toggleFacing}>↕️ Toggle facing</MyButton>
        </MyButtonGroup>

        <FlatList
            style={{ height: 100, flexGrow: 0 }}
            data={pictures}
            keyExtractor={(_, index) => index.toString()}
            horizontal={true}
            renderItem={({ item }) => (
                <Thumbnail picture={item} />
            )}
        />
    </Container>;
}


function Thumbnail({ picture }: { picture: CameraCapturedPicture }) {
    return <Image
        source={{ uri: picture.uri }}
        style={styles.thumbnail}
    />;
}


const styles = StyleSheet.create({
    thumbnail: {
        width: 100,
        height: 100,
        marginRight: 10
    },
    stretch: {
        flexGrow: 1,
        alignSelf: "stretch"
    }
});
