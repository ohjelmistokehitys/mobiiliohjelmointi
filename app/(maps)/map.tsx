import MyContainer from "@/components/my-container";
import MapView from 'react-native-maps';

export default function MapScreen() {

    return <MyContainer>
        <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
                latitude: 60.200692,
                longitude: 24.934302,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0221,
            }}
        />
    </MyContainer>
}
