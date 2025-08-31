import Container from "@/components/Container";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function Index() {

  return (
    <Container style={styles.container}>
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
    </Container>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "silver",
    padding: 10,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  link: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5
  }
});
