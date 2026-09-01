import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { news } from "@/news";
import { Stack, useLocalSearchParams } from "expo-router";

export default function ArticleScreen() {

    const { articleId } = useLocalSearchParams<{ articleId: string }>();
    const article = news.find(a => a.id === articleId)!;

    return <MyContainer>
        <Stack.Screen options={{ title: article.title }}></Stack.Screen>
        <MyTitle>{article.title}</MyTitle>
        <MyText>{article.lead}</MyText>
    </MyContainer>
}
