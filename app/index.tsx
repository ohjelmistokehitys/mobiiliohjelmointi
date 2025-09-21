import Container from "@/components/Container";
import { Link, Stack } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Index() {

  return (
    <ScrollView>
      <Container>
        <Stack.Screen options={{ title: "Home" }} />

        <Text>Basics</Text>
        <Link href="/hello" style={styles.link}>Hello World!</Link>
        <Link href="/calculator" style={styles.link}>Calculator</Link>
        <Link href="/guess" style={styles.link}>Guessing game</Link>

        <Text>Lists</Text>
        <Link href="/articles" style={styles.link}>Articles</Link>
        <Link href="/calculator" style={styles.link}>Calculator with history</Link>
        <Link href="/shopping" style={styles.link}>Shopping list</Link>

        <Text>Navigation</Text>
        <Link href="/articles" style={styles.link}>Articles with navigation</Link>
        <Link href="/icons" style={styles.link}>Icons</Link>
        <Link href="/calculator" style={styles.link}>Calculator with navigation</Link>

        <Text>Networking</Text>
        <Link href="/repositories" style={styles.link}>Repository search</Link>
        <Link href="/recipes" style={styles.link}>Recipes</Link>
        <Link href="/currencies" style={styles.link}>Currency converter</Link>

        <Text>Maps</Text>
        <Link href="/citybikes" style={styles.link}>City bikes</Link>
        <Link href="/addressSearch" style={styles.link}>Address search</Link>
      </Container>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  link: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5
  }
});
