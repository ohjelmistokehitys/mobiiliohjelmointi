import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTextInput from "@/components/my-text-input";
import MyTitle from "@/components/my-title";
import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "my-text-storage-key";

export default function AsyncStorageScreen() {
    // TODO: Make the text state persistent using AsyncStorage!
    const [text, setText] = useState("");

    // when component mounts, load potential previous text
    useEffect(() => {
        loadText();
    }, []);

    useEffect(() => {
        if (text) {
            saveText(text);
        }
    }, [text]);

    function saveText(t: string) {
        AsyncStorage.setItem(STORAGE_KEY, t);
        console.log(`saved text ${text} to async storage`);
    }

    async function loadText() {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved !== null) {
            console.log(`loaded text ${saved}`);
            setText(saved);
        }
    }

    return <MyContainer>
        <MyTitle>Async Storage</MyTitle>

        <MyText>AsyncStorage is asynchronous and persistent key-value pair storage system. AsyncStorage is suitable for storing small data sets like user profiles, settings, or app state.</MyText>

        <MyText>Try the following field. It will presist the value between app restarts using async storage:</MyText>

        <MyTextInput
            placeholder="Type something here"
            value={text}
            onChange={setText}
            multiline={true}
        />
    </MyContainer>;
}
