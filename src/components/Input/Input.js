import React from "react";

function handleSubmit(guessInput, setGuessInput, event, guesses, setGuesses) {
  event.preventDefault();
  if (guessInput.length < 5) {
    alert('Input must be at least 5 characters');
    return;
  }
  console.log("Guess:", guessInput);
  setGuessInput("");
  setGuesses([...guesses, guessInput]);
}

function Input({ guessInput, setGuessInput, guesses, setGuesses }) {
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) =>
          handleSubmit(guessInput, setGuessInput, event, guesses, setGuesses)
        }
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guessInput}
          maxLength={5}
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
