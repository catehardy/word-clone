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
  const nextGuesses = [...guesses, guessInput];
  setGuesses(nextGuesses);
  if (guessInput === answer) {
    setGameStatus("won");
  } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
    setGameStatus("lost");
  }
  setGuessInput("");
}

function Input({ guesses, setGuesses, gameStatus, setGameStatus, answer }) {
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
          disabled={gameStatus !== "current"}
        />
      </form>
    </>
  );
}

export default Input;
