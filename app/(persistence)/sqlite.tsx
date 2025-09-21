import Container from '@/components/Container';
import MyButton from '@/components/MyButton';
import MyInput from '@/components/MyInput';
import { Cell, Row } from '@/components/MyTable';
import Title from '@/components/Title';
import { openDatabaseSync } from 'expo-sqlite';
import React, { useEffect, useState } from "react";
import { Alert, FlatList, Pressable, Text } from "react-native";

const db = openDatabaseSync('coursedb');

const initializeDb = async () => {
    try {
        await db.execAsync(`CREATE TABLE IF NOT EXISTS course (id INTEGER PRIMARY KEY NOT NULL, credits INT, title TEXT);`);
    } catch (error) {
        console.error('Could not open database', error);
    }
}

type Course = {
    id: number,
    title: string,
    credits: string
}

export default function SQLiteExample() {
    const [credit, setCredit] = useState('');
    const [title, setTitle] = useState('');
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        initializeDb();
        updateList();
    }, []);

    const saveItem = async () => {
        try {
            await db.runAsync('INSERT INTO course (title, credits) VALUES (?, ?)', title, credit);
        } catch (error) {
            console.error('Could not add item', error);
        }
        updateList();
    };

    const updateList = async () => {
        try {
            const list = await db.getAllAsync('SELECT * from course');
            setCourses(list as Course[]);
        } catch (error) {
            console.error('Could not get items', error);
        }
    }

    const deleteItem = async (id: number) => {
        Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'OK', onPress: () => confirmDelete(id) }
        ]);

        const confirmDelete = async (id: number) => {
            try {
                await db.runAsync('DELETE FROM course WHERE id=?', id);
                await updateList();
            }
            catch (error) {
                console.error('Could not delete item', error);
            }
        }
    }


    return (
        <Container>
            <Title>SQLite</Title>
            <Text>
                SQLite is light-weight SQL database and it is built into both Android and iOS devices.expo-sqlite is the library that gives an access to SQLite database on the device.
            </Text>

            <MyInput
                placeholder='Title'
                onChangeText={setTitle}
                value={title} />
            <MyInput
                placeholder='Credits'
                keyboardType='numeric'
                onChangeText={setCredit}
                value={credit} />
            <MyButton onPress={saveItem}>Save</MyButton>

            <FlatList
                data={courses}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={<Header />}
                renderItem={({ item }) =>
                    <CourseRow course={item} onDelete={deleteItem} />
                }
            />
        </Container >
    );
}

function Header() {
    return (
        <Row>
            <Cell width={1 / 3}>Title</Cell>
            <Cell width={1 / 3}>Credits</Cell>
            <Cell width={1 / 3}>Action</Cell>
        </Row>
    );
}

function CourseRow({ course, onDelete }: { course: Course, onDelete: (id: number) => void }) {
    return (
        <Row>
            <Cell width={1 / 3}>{course.title}</Cell>
            <Cell width={1 / 3}>{course.credits}</Cell>
            <Pressable onPress={() => onDelete(course.id)}>
                <Text>Delete</Text>
            </Pressable>
        </Row>
    );
}


