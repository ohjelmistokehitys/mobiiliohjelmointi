import MyContainer from '@/components/my-container';
import MyNumberInput from '@/components/my-number-input';
import MyText from '@/components/my-text';
import MyTextInput from '@/components/my-text-input';
import MyTitle from '@/components/my-title';
import { useCourses } from '@/hooks/use-courses';
import { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

export default function SqliteScreen() {
    // state variables for the input fields
    const [title, setTitle] = useState("");
    const [credits, setCredits] = useState(5);

    const { courses, saveCourse, deleteCourse } = useCourses();

    return (
        <MyContainer>
            <MyTitle>SQLite</MyTitle>

            <MyText>
                SQLite is light-weight SQL database and it is built into both Android and iOS devices. expo-sqlite is the library that gives an access to SQLite database on the device.
            </MyText>

            <MyTextInput
                placeholder='Course title'
                onChange={setTitle}
                value={title} />

            <MyNumberInput
                placeholder='Credits'
                onChange={setCredits}
                value={credits} />

            <Button onPress={() => saveCourse(credits, title)} title="Save" />

            <FlatList
                renderItem={({ item }) =>
                    <View>
                        <Text>{item.title}, {item.credits}</Text>
                        <Text style={{ color: '#ff0000' }} onPress={() => deleteCourse(item.id)}>Delete</Text>
                    </View>
                }
                data={courses}
                keyExtractor={course => course.id.toString()}
            />
        </MyContainer>
    );
}
