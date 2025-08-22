import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {

  return <View style={styles.container}>
    <Text>Week 1</Text>
    <Link href="/hello" style={styles.link}>Hello World!</Link>
    <Link href="/calculator" style={styles.link}>Calculator</Link>
    <Link href="/" style={styles.link}>Guessing game</Link>
  </View>;
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