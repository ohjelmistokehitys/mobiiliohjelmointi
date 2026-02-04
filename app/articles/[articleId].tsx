import { Container, Heading, Paragraph } from "@/components/ui/basic-components";
import { news } from "@/uutiset";
import { Redirect, useLocalSearchParams, useRouter } from "expo-router";
import { Button } from "react-native";

export default function ArticleScreen() {
    const { articleId } = useLocalSearchParams();
    const router = useRouter();

    const article = news.find(article => article.id === articleId);

    if (!article) {
        console.error(`Article not found (id ${articleId})`);
        return <Redirect href="/articles" />;
    }

    return (
        <Container>
            <Heading>{article.title}</Heading>
            <Paragraph>{article.lead}</Paragraph>
            <Button onPress={() => router.back()} title="Go back" />
        </Container>
    );
}
