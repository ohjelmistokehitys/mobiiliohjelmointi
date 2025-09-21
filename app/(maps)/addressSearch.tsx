import Container from '@/components/Container';
import { inputStyles } from '@/components/MyInput';
import { addressLookup, convertToMarker } from '@/networking/geocoding';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { useState } from 'react';
import { Alert, Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import MapView, { LatLng, MapMarkerProps, Marker } from 'react-native-maps';


export default function AddressSearch() {

    const [searchText, setSearchText] = useState("");
    const [marker, setMarker] = useState<MapMarkerProps>({
        coordinate: {
            latitude: 60.201373,
            longitude: 24.934041
        },
        title: "Haaga-Helia",
        description: "Ratapihantie 13"
    });


    async function locateUser() {
        try {
            const coordinate = await getUserLocation();
            setMarker({ coordinate, title: "Your location", description: "" });
        } catch (e) {
            console.error(e);
        }
    }

    async function search() {
        Keyboard.dismiss();
        try {
            const results = await addressLookup(searchText);
            if (results.length === 0) {
                Alert.alert("No results");
            }
            setMarker(convertToMarker(results[0]));

        } catch (e) {
            console.error(e);
        }
    }

    return <Container>
        <MapView
            style={styles.map}
            region={{
                ...marker.coordinate,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0221,
            }}>

            <Marker
                key={marker.title}
                {...marker}
            />
        </MapView>

        <View style={styles.searchForm}>
            <TextInput style={{ ...inputStyles.input, ...styles.searchInput }} value={searchText} onChangeText={setSearchText} onSubmitEditing={search} />
            <Pressable style={styles.searchButton} disabled={!searchText} onPress={search}><Text>🔍</Text></Pressable>
            <Pressable style={styles.searchButton} onPress={locateUser}><Text>GPS</Text></Pressable>
        </View>
    </Container>;
}


/** Uses expo-location to get the user's location. */
async function getUserLocation(): Promise<LatLng> {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
        Alert.alert(`Could not get permission. (${status})`);
    }
    const position = await getCurrentPositionAsync();
    return position.coords;
}


const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    },
    searchForm: {
        position: "absolute",
        top: 20,
        left: 20,
        right: 20,
        flexDirection: "row",
        gap: 10
    },
    searchInput: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        height: 40,
        flex: 1,
        color: "black"
    },
    searchButton: {
        backgroundColor: "white",
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "black",
    }
});

