import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

export type Course = {
    id: number,
    title: string,
    credits: number
}

export function useCourses() {
    const db = useSQLiteContext();

    // a local copy of the items in the database, to be displayed in the FlatList
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        const data = await db.getAllAsync<Course>("SELECT * FROM course");
        setCourses(data);
    };

    const saveCourse = async (credits: number, title: string) => {
        db.runAsync("INSERT INTO course (credits, title) VALUES (?, ?);", credits, title);
        loadCourses();
    };

    const deleteCourse = async (id: number) => {
        db.runAsync("DELETE FROM course WHERE id=?", id);
        loadCourses();
    };

    return {
        courses,
        loadCourses,
        saveCourse,
        deleteCourse
    };
}
