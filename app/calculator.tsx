import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


export default function Calculator() {
  const [a, setA] = useState("0");
  const [b, setB] = useState("0");
  const [output, setOutput] = useState("");

  function calculate(operation: "+" | "-") {
    const numA = +a;
    const numB = +b;

    const result = operation === "+" ? numA + numB : numA - numB;

    if (Number.isNaN(result)) {
      setOutput(`Please input a valid number`);
    } else {
      setOutput(`${a} ${operation} ${b} = ${result}`);
    }
  }

  return <View style={styles.container}>
    <Text>Calculator</Text>
    <TextInput
      value={a}
      style={styles.input}
      placeholder="Enter a number"
      keyboardType="numeric"
      onChangeText={text => setA(text)}
    />
    <TextInput
      value={b}
      style={styles.input}
      placeholder="Enter a number"
      keyboardType="numeric"
      onChangeText={text => setB(text)}
    />

    <View style={styles.buttonContainer}>
      <Button title="+" onPress={() => calculate("+")} />
      <Button title="-" onPress={() => calculate("-")} />
    </View>
    <Text>Result: {output}</Text>

  </View>;
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "silver",
    padding: 10,
    gap: 10,
    justifyContent: "center",
    flex: 1
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20
  }
});