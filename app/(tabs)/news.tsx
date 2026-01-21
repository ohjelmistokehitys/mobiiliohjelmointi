import { Container, Heading, Strong } from "@/components/ui/basic-components";
import { news } from "@/uutiset";
import { FlatList, Text, View } from "react-native";

type Article = {
    id: string,
    title: string,
    lead: string | null
}

export default function NewsScreen() {

    return <Container>
        <Heading>Uutiset ({news.length})</Heading>

        <FlatList
            data={news}
            renderItem={({ item }) => <ListArticle article={item} />}
            ItemSeparatorComponent={() => <Separator />}
        />
    </Container>;
}


function ListArticle({ article }: { article: Article }) {
    return <View>
        <Strong>{article.title}</Strong>
        {article.lead && <Text style={{ color: "white" }}>{article.lead}</Text>}
    </View>
}

function Separator() {
    return <View style={{ marginBottom: 20 }} />;
}
