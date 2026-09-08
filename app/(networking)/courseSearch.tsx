import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTextInput from "@/components/my-text-input";
import MyTitle from "@/components/my-title";
import styles from "@/components/styles";
import { useState } from "react";
import { ActivityIndicator, Alert, FlatList, StyleSheet, View } from "react-native";

type Course = {
    name: string,
    code: string
};

export default function CourseSearchScreen() {
    const [keyword, setKeyword] = useState("");
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(false);

    const search = async () => {
        setCourses([]);

        if (!keyword) {
            return;
        }


        try {
            console.log(`searching... ${keyword}`);
            const params = { "target": "realization", "type": "name", "text": keyword, "dateFrom": "", "dateTo": "", "filters": [], "show": true };
            setLoading(true);

            const response = await fetch("https://lukkarit.haaga-helia.fi/rest/realizations", {
                method: "POST",
                body: JSON.stringify(params)
            });

            if (!response.ok) {
                Alert.alert(`HTTP error: ${response.statusText}`);
                return;
            }
            const json = await response.json();
            setCourses(json.data);
        } catch (e) {
        } finally {
            setLoading(false);
        }
    }

    return <MyContainer>
        <MyTitle>Course search ({courses.length})</MyTitle>
        <MyTextInput placeholder="Enter course name..." value={keyword} onChange={setKeyword} />
        <MyButton title="🔍 Search" onPress={search} />

        {loading && <ActivityIndicator size={40} />}
        <FlatList
            style={styles.flatList}
            data={courses}
            renderItem={({ item }) => <CourseRow course={item} />}
        />
    </MyContainer>
}


function CourseRow({ course }: { course: Course }) {
    return <View style={courseStyles.courseRow}>
        <MyText italic>{course.code}</MyText>
        <MyText bold>{course.name}</MyText>
    </View>;
}

const courseStyles = StyleSheet.create({
    courseRow: {
        marginBottom: 20,
        alignItems: "flex-start"
    }
});
