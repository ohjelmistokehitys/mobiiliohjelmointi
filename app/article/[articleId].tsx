/**
 * The square brackets in the file name indicate that this is a dynamic route.
 * The [articleId] part will be replaced with the actual article ID when the route is accessed.
 *
 * You can use the `useLocalSearchParams` hook to access the dynamic route parameters.
 *
 * https://docs.expo.dev/router/basics/notation/#square-brackets
 */

import Container from "@/components/Container";
import Title from "@/components/Title";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Button, StyleSheet, Text } from "react-native";
import articleJson from "../../articles.json";

export default function Article() {

    // The route parameters can be accessed using the useLocalSearchParams hook
    const { articleId } = useLocalSearchParams();

    // The navigation object can be used to navigate between screens programmatically
    const navigation = useNavigation();


    // Find the article with the matching ID from the static JSON file
    const article = articleJson.find(article => article.id === articleId);

    if (!article) {
        return <Text>Article not found</Text>;
    }

    return <Container>
        <Title>{article.title}</Title>

        <Text style={styles.lead}>{article.lead}</Text>

        <Text style={styles.body}>{article.body}</Text>

        <Button onPress={() => navigation.goBack()} title="Back to Articles" />
    </Container>;
}

const styles = StyleSheet.create({
    lead: {
        fontStyle: "italic",
        marginBottom: 20
    },
    body: {
        marginVertical: 10,
        lineHeight: 22
    }
});
