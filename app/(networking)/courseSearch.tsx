import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTextInput from "@/components/my-text-input";
import MyTitle from "@/components/my-title";
import styles from "@/components/styles";
import { useState } from "react";
import { ActivityIndicator, Alert, FlatList } from "react-native";

const ENDPOINT_URL = "https://lukkarit.haaga-helia.fi/rest/realizations";

export default function CourseSearch() {

    const [keyword, setKeyword] = useState("");
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(false);

    const handleFetch = async () => {
        if (!keyword) {
            return;
        }

        setCourses([]);
        setLoading(true);

        try {
            const params = { "target": "realization", "type": "name", "text": keyword };
            const response = await fetch(ENDPOINT_URL, {
                method: "POST",
                body: JSON.stringify(params)
            });

            if (!response.ok) {
                Alert.alert(`HTTP error ${response.status}, ${response.statusText}`);
            }

            const data = (await response.json()).data as Course[];
            setCourses(data);
        }
        finally {
            setLoading(false);
        }
    }

    return <MyContainer>
        <MyTitle>Course search</MyTitle>
        <MyTextInput placeholder="Enter keyword..." value={keyword} onChange={setKeyword} />
        <MyButton title="🔍 Search" onPress={handleFetch} />

        {loading && <ActivityIndicator size={60} />}
        <FlatList
            data={courses}
            style={styles.flatList}
            keyExtractor={c => c.code}
            renderItem={({ item }) => <MyText>{item.name}</MyText>}
        />
    </MyContainer>;
}


type Course = {
    name: string,
    code: string,
    teaching_language: string,
    scope_amount: number
}
