import { getCurrentPositionAsync, LocationObject, requestForegroundPermissionsAsync } from "expo-location";
import { useEffect, useState } from "react";

export function useLocation() {
    const [location, setLocation] = useState<LocationObject | null>(null);

    useEffect(() => {
        const getLocation = async () => {
            const { granted } = await requestForegroundPermissionsAsync();

            if (granted) {
                const pos = await getCurrentPositionAsync();
                setLocation(pos);
                console.log(pos);

            } else {
                console.error("Positioning permission not granted");
            }
        }

        getLocation();
    }, []);

    return location;
}
