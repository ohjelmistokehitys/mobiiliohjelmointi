import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput";
import Title from "@/components/Title";
import { useState } from "react";

export default function Hello() {
    const [temp, setTemp] = useState("");
    const [name, setName] = useState("stranger");

    return <Container>
        <Title>{`Hello ${name}`}</Title>
        <MyInput
            value={temp}
            placeholder="Enter your name"
            onChangeText={text => setTemp(text)}
        />
        <MyButton onPress={() => setName(temp)}>Ok</MyButton>
    </Container>;
}

