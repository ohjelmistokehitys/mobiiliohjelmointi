import Container from "@/components/Container";
import Title from "@/components/Title";
import { convertToMarker, getCityBikes } from "@/networking/geocoding";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const API_URL = "https://services1.arcgis.com/sswNXkUiRoWtrx0t/arcgis/rest/services/Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat_avoin/FeatureServer/0/query?where=1%3D1&objectIds=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&collation=&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnTrueCurves=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=";

const HAAGA_HELIA = {
    latitude: 60.201667,
    longitude: 24.933889
};

export default function CityBikes() {

    const [bikeStops, setBikeStops] = useState<GeoJSON.Feature[]>([]);

    useEffect(() => {
        getCityBikes().then(json => {
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
