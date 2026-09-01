import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { news } from "@/news";
import { useLocalSearchParams } from "expo-router";


export default function ArticleScreen() {
    const { articleId } = useLocalSearchParams();

    const article = news.find(article => article.id === articleId)!;

    return <MyContainer>
        <MyTitle>{article.title}</MyTitle>

        <MyText>{article.lead}</MyText>
    </MyContainer>
}
