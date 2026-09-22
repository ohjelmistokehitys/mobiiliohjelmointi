import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { useLocation } from "@/hooks/use-location";
import { ActivityIndicator } from "react-native";


export default function LocationScreen() {
    const { location, updateLocation, loading } = useLocation();

    return <MyContainer>
        <MyTitle>Location</MyTitle>

        {loading && <ActivityIndicator size="large" />}

        {!loading && !location && <MyText>Location not available.</MyText>}

        {!loading && location && <MyText>Your location is: {location.coords.latitude}, {location.coords.longitude}</MyText>}

        <MyButton onPress={updateLocation} title="Refresh location" />
    </MyContainer>;
}
