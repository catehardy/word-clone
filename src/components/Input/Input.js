// libs
import React from "react";

// local
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function handleSubmit(
  guessInput,
  setGuessInput,
  event,
  guesses,
  setGuesses,
  setGameStatus,
  answer
) {
  event.preventDefault();
  if (guessInput.length < 5) {
    alert("Input must be at least 5 characters");
    return;
  }
  if (guessInput === answer) {
    setGameStatus("won");
    setGuessInput("");
    setGuesses([...guesses, guessInput]);
    return;
  }
  if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
    setGameStatus("lost");
  }
  setGuessInput("");
  setGuesses([...guesses, guessInput]);
}

function Input({ guesses, setGuesses, setGameStatus, answer }) {
  const [guessInput, setGuessInput] = React.useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) =>
          handleSubmit(
            guessInput,
            setGuessInput,
            event,
            guesses,
            setGuesses,
            setGameStatus,
            answer
          )
        }
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guessInput}
          maxLength={5}
          minLength={5}
          required
          onChange={(event) => {
            setGuessInput(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default Input;
