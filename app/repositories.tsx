import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput";
import Repository from "@/components/Repository";
import Title from "@/components/Title";
import { RepoSearchResultItem } from "@/networking/githubTypes";
import { searchRepositories } from "@/networking/repositorySearch";
import { useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";

export default function RepositorySearch() {

    const { repositories, loading, search } = useRepositorySearch();
    const [keyword, setKeyword] = useState("");

    return <Container>
        <Title>Repository search</Title>

        <MyInput onChangeText={setKeyword} value={keyword} />
        <MyButton onPress={() => search(keyword)}>Search 🔍</MyButton>

        {loading ?
            <ActivityIndicator size={40} />
            :
            <FlatList
                ListEmptyComponent={<Text>No results</Text>}
                data={loading ? [] : repositories}
                renderItem={({ item }) => <Repository repo={item} />}
            />
        }
    </Container>
}


function useRepositorySearch(): { loading: boolean, repositories: RepoSearchResultItem[], search: (kw: string) => void } {

    const [loading, setLoading] = useState(false);
    const [repositories, setRepositories] = useState<RepoSearchResultItem[]>([]);

    const search = async (kw: string) => {
        setLoading(true);
        try {
            const response = await searchRepositories(kw);
            setRepositories(response.items);
        } finally {
            setLoading(false);
        }
    }

    return { loading, repositories, search };
}
