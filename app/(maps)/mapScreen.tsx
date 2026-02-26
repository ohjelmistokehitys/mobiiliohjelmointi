import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";

// initially center the map and marker to the campus
const CAMPUS = {
    latitude: 60.201373,
    longitude: 24.934041
};

export default function MapScreen() {

    const [myLocation, setMyLocation] = useState(CAMPUS);

    useEffect(() => {
        // simulate location updates by changing the coordinates every 500ms
        const id = setInterval(() => {
            setMyLocation(prev => ({
                latitude: prev.latitude + 0.0001,
                longitude: prev.longitude + 0.0001
            }));
        }, 500);

        // return a function to stop updating when the component unmounts or refreshes
        return () => clearInterval(id);
    }, []);

    return <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
            ...CAMPUS,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221,
        }}>

        <Marker coordinate={myLocation} />
    </MapView>;
}
