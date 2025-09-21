import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import MyButtonGroup from "@/components/MyButtonGroup";
import MyInput from "@/components/MyInput";
import Title from "@/components/Title";
import { useEffect, useState } from "react";
import { Text } from "react-native";


export default function GuessingGame() {

  const [gameOn, setGameOn] = useState(false); // Whether the game is active
  const [correct, setCorrect] = useState(0);  // The correct answer
  const [guesses, setGuesses] = useState(0);  // Number of guesses made
  const [input, setInput] = useState("");     // User input
  const [message, setMessage] = useState(""); // Feedback message

  function newGame() {
    const random = 1 + Math.floor(Math.random() * 100);
    console.log("Correct answer is " + random);

    setCorrect(random);
    setGuesses(0);
    setInput("");
    setMessage("");
    setGameOn(true);
  }

  function makeGuess() {
    debugger
    const guess = +input;

    if (isNaN(guess)) {
      setMessage("Please enter a valid number.");
      return;
    }

    setGuesses(guesses + 1);

    if (guess === correct) {
      // fixme: wrong number of guesses shown
      setMessage(`Correct! It took you ${guesses} guesses.`);
      setGameOn(false);
    } else {
      setMessage(guess < correct ? "Higher!" : "Lower!");
    }
  }

  useEffect(() => newGame(), []);

  return <Container>
    <Title>Guessing Game</Title>

    <MyInput
      value={input}
      onChangeText={setInput}
      keyboardType="numeric"
      placeholder="Guess a number between 1-100!"
      editable={gameOn}
    />

    <MyButtonGroup>
      <MyButton onPress={makeGuess} disabled={!gameOn}>Guess!</MyButton>
      <MyButton onPress={newGame}>Start a new game</MyButton>
    </MyButtonGroup>

    <Text>Guesses: {guesses}</Text>
    <Text>{message}</Text>

  </Container>;
}
