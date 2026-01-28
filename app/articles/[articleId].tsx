import { Container, Heading, Paragraph } from "@/components/ui/basic-components";
import { news } from "@/uutiset";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button } from "react-native";

export default function ArticleScreen() {
    const { articleId } = useLocalSearchParams();
    const router = useRouter();

    const article = news.find(article => article.id === articleId);

    if (!article) {
        throw new Error("Article not found (impossible)");
    }

    return <Container>
        <Heading>{article.title}</Heading>
        <Paragraph>{article.lead}</Paragraph>
        <Button onPress={() => router.back()} title="Go back" />
    </Container>;
}
