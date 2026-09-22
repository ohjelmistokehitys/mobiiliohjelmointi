import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyRow from "@/components/my-row";
import MyText from "@/components/my-text";
import MyTextInput from "@/components/my-text-input";
import MyTitle from "@/components/my-title";
import { useState } from "react";

const STORAGE_KEY = "my-text-storage-key";

export default function AsyncStorageScreen() {
    // TODO: Make the text state persistent using AsyncStorage!
    const [text, setText] = useState("");

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

        <MyRow>
            <MyButton onPress={() => console.log("TODO: Save to AsyncStorage")} title="Save" />
            <MyButton onPress={() => console.log("TODO: Load from AsyncStorage")} title="Load" />
        </MyRow>
    </MyContainer>;
}
