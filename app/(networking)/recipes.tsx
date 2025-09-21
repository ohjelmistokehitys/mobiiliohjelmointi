import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput";
import { Recipe } from "@/components/Recipe";
import Title from "@/components/Title";
import { RecipeType } from "@/types/recipetype";
import { useState } from "react";
import { ActivityIndicator, Alert, FlatList, Text } from "react-native";

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';

export default function RecipeSearch() {
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState<RecipeType[]>([]);


    const search = async () => {
        try {
            setLoading(true);

            let response = await fetch(URL + encodeURIComponent(keyword));

            if (!response.ok) {
                console.error(response);
                throw new Error(`Error in search: ${response.status}`);
            }

            let json = await response.json();
            setRecipes(json.meals ?? []);
        } catch (e) {
            Alert.alert(`Search failed`)
        } finally {
            setLoading(false);
        }
    }

    return <Container>
        <Title>Recipe search</Title>

        <MyInput value={keyword} onChangeText={setKeyword} placeholder="Search by ingredient..." />

        <MyButton onPress={() => search()}>Search 🔍</MyButton>

        {loading && <ActivityIndicator size="large" />}

        <Text>{recipes.length} results:</Text>

        <FlatList
            data={loading ? [] : recipes}
            renderItem={({ item }) => <Recipe recipe={item} />}
            keyExtractor={(recipe) => recipe.idMeal}
        />
    </Container>;
}
