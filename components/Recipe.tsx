import { RecipeType } from "@/types/recipetype";
import { Image, StyleSheet, Text, View } from "react-native";

type RecipeProps = {
    recipe: RecipeType
};

export function Recipe({ recipe }: RecipeProps) {
    return <View style={recipeStyles.recipeRow}>
        <Image
            source={{ uri: recipe.strMealThumb }}
            style={recipeStyles.recipeImage}
        />
        <Text>
            {recipe.strMeal}
        </Text>
    </View>
}


const recipeStyles = StyleSheet.create({
    recipeRow: {
        flexDirection: "row",
        gap: 20,
        paddingVertical: 20,
        alignItems: "center"
    },
    recipeImage: {
        width: 80,
        height: 80
    }
});
