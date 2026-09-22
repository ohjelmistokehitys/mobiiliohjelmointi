import MyContainer from '@/components/my-container';
import MyNumberInput from '@/components/my-number-input';
import MyText from '@/components/my-text';
import MyTextInput from '@/components/my-text-input';
import MyTitle from '@/components/my-title';
import * as SQLite from 'expo-sqlite';
import { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

type Course = {
    id: number,
    title: string,
    credits: string
}

// TODO: not the best idea to use a global variable and synchronous database access
const db = SQLite.openDatabaseSync("course.sqlite");

export default function CourseList() {
    // state variables for the input fields
    const [title, setTitle] = useState("");
    const [credit, setCredit] = useState(5);

    // a local copy of the items in the database, to be displayed in the FlatList
    const [courses, setCourses] = useState<Course[]>([]);

    const saveCourse = async () => {
    };

    const deleteCourse = async (id: number) => {
    };

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
                onChange={setCredit}
                value={credit} />

            <Button onPress={saveCourse} title="Save" />

            <FlatList
                renderItem={({ item }) =>
                    <View>
                        <Text>{item.title}, {item.credits}</Text>
                        <Text style={{ color: '#ff0000' }} onPress={() => deleteCourse(item.id)}>Delete</Text>
                    </View>
                }
                data={courses}
            />
        </MyContainer>
    );
}
