import MyContainer from "@/components/my-container";
import MyTitle from "@/components/my-title";
import { news } from "@/news";
import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function NewsScreen() {
    return <MyContainer>
        <MyTitle>News ({news.length})</MyTitle>

        <FlatList
            data={news}
            renderItem={({ item }) => <Article article={item} />}
            ItemSeparatorComponent={Separator}
            style={{ alignSelf: "stretch" }}
        />
    </MyContainer>;
}

type ArticleProps = {
    article: typeof news[number]
};

function Article({ article }: ArticleProps) {
    return <View
        style={styles.articleContainer}
    >
        <View style={{ flexShrink: 1 }}>
            <Link href={{
                pathname: "/news/[articleId]",
                params: { articleId: article.id }
            }}>
                <Text>
                    {article.title}
                </Text>
            </Link>
        </View>
        <ArticleThumbnail article={article} />
    </View>;
}

function ArticleThumbnail({ article }: ArticleProps) {
    if (!article.picture) {
        return <></>;
    }

    return <Image
        source={{ uri: article.picture }}
        style={styles.articleThumbnail} />;
}

function Separator() {
    return <View style={{
        paddingBottom: 15,
        marginBottom: 15,
        borderBottomWidth: 2,
        borderColor: "#bbb"
    }}></View>
}

const styles = StyleSheet.create({
    articleContainer: {
        flexDirection: "row",
        gap: 15,
        flex: 1,
        justifyContent: "space-between"
    },
    articleThumbnail: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: "white"
    }
});
