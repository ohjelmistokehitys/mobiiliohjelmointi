import Container from "@/components/Container";
import Title from "@/components/Title";
import { FlatList, Text, View } from "react-native";
import articleJson from "../articles.json";

export default function Articles() {
    return <Container>
        <Title>Yle news</Title>

        <FlatList
            data={articleJson}
            renderItem={({ item }) => <Article article={item} />}
        />
    </Container>;
}

type ArticleProps = {
    article: typeof articleJson[number];
}

function Article({ article }: ArticleProps) {
    return <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{article.title}</Text>
        <Text>{article.lead}</Text>
    </View>;
}
