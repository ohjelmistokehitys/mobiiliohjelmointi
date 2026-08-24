import MyButton from "@/components/my-button";
import MyContainer from "@/components/my-container";
import MyNumberInput from "@/components/my-number-input";
import MyRow from "@/components/my-row";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { useEffect, useState } from "react";


export default function GuesserScreen() {

    const [correct, setCorrect] = useState(0);
    const [guess, setGuess] = useState(0);
    const [guesses, setGuesses] = useState<number[]>([]);
    const [message, setMessage] = useState("Guess a number between 1 and 100");

    useEffect(() => restart(), []);

    function guessNumber() {
        if (Number.isNaN(guess)) {
            setMessage("Please enter a valid number.");
            return;
        }

        setGuesses([...guesses, guess]);
        if (guess === correct) {
            // fixme: the number of guesses is off by one
            setMessage(`You guessed it! The number was ${correct} and it took you ${guesses.length} guesses!`);
        }
        if (guess < correct) {
            setMessage(`Your guess of ${guess} is too low.`);
        }
        if (guess > correct) {
            setMessage(`Your guess of ${guess} is too high.`);
        }
    }

    function restart() {
        setCorrect(Math.floor(Math.random() * 100) + 1);
        setGuess(0);
        setGuesses([]);
        setMessage("Guess a number between 1 and 100");

        // fixme: why does this keep logging the wrong number?
        console.log("New correct number is", correct);
    }

    return (
        <MyContainer>
            <MyTitle>Guessing game</MyTitle>

            <MyText>{message}</MyText>

            <MyNumberInput value={guess} onChange={setGuess} />

            <MyRow>
                <MyButton title="Guess!" onPress={guessNumber} />
                <MyButton title="Restart" onPress={restart} />
            </MyRow>
        </MyContainer>
    );
}
