import { RepoSearchResultItem } from "@/networking/githubTypes";
import { StyleSheet, Text, View } from "react-native";


export default function Repository({ repo }: { repo: RepoSearchResultItem }) {
    return <View style={styles.view}>
        <Text>{repo.full_name}</Text>
        <View style={styles.repoDetails}>
            <Text>{repo.stargazers_count} ⭐</Text>
            <Text>{repo.watchers_count} 👁️</Text>
            <Text>{repo.forks_count} 🍴</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    view: {
        marginVertical: 5,
    },
    repoDetails: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
