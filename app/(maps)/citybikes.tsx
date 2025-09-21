import Container from "@/components/Container";
import Title from "@/components/Title";
import { convertToMarker, getCityBikes } from "@/networking/geocoding";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";


const HAAGA_HELIA = {
    latitude: 60.201667,
    longitude: 24.933889
};

export default function CityBikes() {

    const [bikeStops, setBikeStops] = useState<GeoJSON.Feature<GeoJSON.Point>[]>([]);

    useEffect(() => {
        getCityBikes()
            .then(json => {
                setBikeStops(json)
                console.log(json);
            });
    }, []);

    return <Container>
        <Title>City bikes</Title>

        <MapView
            style={mapStyles.map}
            initialRegion={{
                ...HAAGA_HELIA,
                latitudeDelta: 0.03,
                longitudeDelta: 0.02
            }}>
            <Marker coordinate={HAAGA_HELIA} />

            {
                bikeStops.map(stop => <Marker
                    key={stop.id}
                    {...convertToMarker(stop)}
                />)
            }
        </MapView>
    </Container>
}


const mapStyles = StyleSheet.create({
    map: {
        alignItems: "stretch",
        flex: 1
    }
})
