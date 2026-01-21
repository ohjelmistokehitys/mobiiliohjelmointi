import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function GuessingGameScreen() {

    const [correct, setCorrect] = useState(-1);
    const [guess, setGuess] = useState("");
    const [guesses, setGuesses] = useState(0);
    const [message, setMessage] = useState("");

    // randomizes a value between 1 - 100:
    const newGame = () => {
        setCorrect(1 + Math.trunc(Math.random() * 100));
        setGuesses(0);
        setGuess("");
        setMessage("Guess a number between 0 - 100");
    };

    const makeGuess = () => {
        setGuesses(guesses + 1);

        const g = +guess;
        if (g === correct) {
            setMessage(`Correct! It took you ${guesses} guesses.`); // TODO: does this work?
        }
        if (g < correct) {
            setMessage(`${g} is too low`);
        }
        if (g > correct) {
            setMessage(`${g} is too high`);
        }
        if (Number.isNaN(g)) {
            setMessage(`Invalid input`);
        }
    }

    useEffect(newGame, []);

    return <View style={styles.container}>
        <Text style={styles.heading}>Guess a number</Text>
        <TextInput
            value={String(guess)}
            onChangeText={value => setGuess(value)}
            style={styles.input}
        />
        <View style={styles.buttonGroup}>
            <Pressable style={styles.button} onPress={makeGuess}><Text style={styles.buttonText}>Guess</Text></Pressable>
            <Pressable style={styles.button} onPress={newGame}><Text style={styles.buttonText}>New game</Text></Pressable>
        </View >

        <Text style={styles.paragraph}>{message}</Text>
    </View >;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "flex-start",
        marginTop: 50,
        alignItems: "center",
        gap: 20
    },
    heading: {
        fontSize: 40,
        color: "white",
        textAlign: "center"
    },
    paragraph: {
        fontSize: 20,
        color: "white"
    },
    input: {
        color: "white",
        padding: 5,
        borderColor: "white",
        borderWidth: 1,
        minWidth: 200
    },
    buttonGroup: {
        flexDirection: "row",
        gap: 20
    },
    button: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18
    }
});
