import { Container, Heading, Paragraph } from '@/components/ui/basic-components';
import { styles } from '@/components/ui/styles';
import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

export default function GuessingGameScreen() {

    const [correct, setCorrect] = useState(-1);
    const [guess, setGuess] = useState("");
    const guesses = useRef(0);
    const [message, setMessage] = useState("");

    console.log({
        correct, guess, guesses, message
    });

    const newGame = () => {
        // randomizes a value between 1 - 100:
        setCorrect(1 + Math.trunc(Math.random() * 100));
        guesses.current = 0;
        setGuess("");
        setMessage("Guess a number between 0 - 100");
    };

    const makeGuess = () => {
        guesses.current++;

        const g = +guess;
        if (g === correct) {
            setMessage(`Correct! It took you ${guesses.current} guesses.`);
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

    return <Container>
        <Heading>Guess a number</Heading>
        <TextInput
            value={String(guess)}
            onChangeText={value => setGuess(value)}
            style={styles.input}
            inputMode="numeric"
        />
        <View style={styles.buttonGroup}>
            <Pressable style={styles.button} onPress={makeGuess}><Text style={styles.buttonText}>Guess</Text></Pressable>
            <Pressable style={styles.button} onPress={newGame}><Text style={styles.buttonText}>New game</Text></Pressable>
        </View >

        <Paragraph>{message}</Paragraph>
    </Container>;
}
