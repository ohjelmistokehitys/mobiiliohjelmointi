import { getCurrentPositionAsync, LocationObject, requestForegroundPermissionsAsync } from "expo-location";
import { useEffect, useState } from "react";

export function useLocation() {
    const [location, setLocation] = useState<LocationObject | null>(null);
    const [loading, setLoading] = useState(false);

    const updateLocation = async () => {
        const { granted } = await requestForegroundPermissionsAsync();
        setLoading(true);

        if (granted) {
            const pos = await getCurrentPositionAsync();
            setLocation(pos);
            console.log(pos);

        } else {
            console.error("Positioning permission not granted");
        }

        setLoading(false);
    }

    // on first render, request the location permission and get the current position
    useEffect(() => {
        updateLocation();
    }, []);

    return { location, updateLocation, loading };
}
