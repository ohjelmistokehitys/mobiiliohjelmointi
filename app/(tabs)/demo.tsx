import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function DemoScreen() {

  const [name, setName] = useState("Anonymous");

  return (
    <View style={myStyles.container}>
      <Text style={myStyles.text}>
        Hello {name} 👋 🌍!
      </Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={myStyles.input} />
      <Button title="Ok" />
    </View>
  );
}

const myStyles = StyleSheet.create({
  container: {
    borderColor: "yellow",
    backgroundColor: "black",
    borderWidth: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15
  },
  text: {
    color: "white",
    fontSize: 20
  },
  input: {
    color: "white",
    borderColor: "white",
    borderWidth: 2,
    width: 150,
    padding: 5
  }
});
