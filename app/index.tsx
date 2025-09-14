import Container from "@/components/Container";
import { Link, Stack } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Index() {

  return (
    <ScrollView>
      <Container>
        <Stack.Screen options={{ title: "Home" }} />

        <Text>Week 1</Text>
        <Link href="/hello" style={styles.link}>Hello World!</Link>
        <Link href="/calculator" style={styles.link}>Calculator</Link>
        <Link href="/guess" style={styles.link}>Guessing game</Link>

        <Text>Week 2</Text>
        <Link href="/articles" style={styles.link}>Articles</Link>
        <Link href="/calculator" style={styles.link}>Calculator with history</Link>
        <Link href="/shopping" style={styles.link}>Shopping list</Link>

        <Text>Week 3</Text>
        <Link href="/articles" style={styles.link}>Articles with navigation</Link>
        <Link href="/icons" style={styles.link}>Icons</Link>

        <Text>Week 4</Text>
        <Link href="/calculator" style={styles.link}>Calculator with navigation</Link>

        <Text>Week 5</Text>
        <Link href="/repositories" style={styles.link}>Repository search</Link>
        <Link href="/recipes" style={styles.link}>Recipes</Link>
        <Link href="/currencies" style={styles.link}>Currency converter</Link>

        <Text>Week 6</Text>
        <Link href="/" style={styles.link}>Maps</Link>
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
