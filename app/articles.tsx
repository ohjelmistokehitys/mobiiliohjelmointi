import Container from "@/components/Container";
import Title from "@/components/Title";
import { useNavigation } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import articleJson from "../articles.json";

export default function Articles() {
    return <Container>
        <Title>Articles</Title>

        <FlatList
            data={articleJson}
            renderItem={({ item }) => <ListArticle article={item} />}
        />
    </Container>;
}

type ArticleProps = {
    article: typeof articleJson[number];
}

function ListArticle({ article }: ArticleProps) {
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(`Article`, { articleId: article.id })}>
            <View style={articleStyles.container}>
                <Text style={articleStyles.title}>{article.title}</Text>
                <Text style={articleStyles.lead}>{article.lead}</Text>
            </View>
        </TouchableOpacity>
    );
}

const articleStyles = StyleSheet.create({
    container: {
        paddingBottom: 15
    },
    title: {
        fontWeight: "bold"
    },
    lead: {
        color: "#666"
    }
});
