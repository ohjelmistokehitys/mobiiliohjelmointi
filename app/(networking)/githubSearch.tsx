import { Container, Heading, Paragraph } from "@/components/ui/basic-components";
import { styles } from "@/components/ui/styles";
import { useRepositorySearch } from "@/hooks/use-repository-search";
import { useState } from "react";
import { ActivityIndicator, FlatList, TextInput } from "react-native";


export default function GitHubSearchScreen() {

    const [input, setInput] = useState("react");
    const { repositories, loading } = useRepositorySearch(input);

    return <Container>
        <Heading>GitHub search</Heading>

        <TextInput style={styles.input} value={input} onChangeText={setInput} />

        {loading && <ActivityIndicator />}

        <FlatList
            data={repositories}
            renderItem={({ item }) => <Paragraph>{item.full_name}</Paragraph>}
        />
    </Container>;
}
