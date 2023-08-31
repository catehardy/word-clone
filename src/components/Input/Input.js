import React from "react";

function handleSubmit(guessInput, setGuessInput, event) {
  event.preventDefault();
  console.log("guess input:", guessInput);
  setGuessInput("");
}

function Input() {
  const [guessInput, setGuessInput] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(guessInput, setGuessInput, event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessInput}
        minLength={5}
        maxLength={5}
        required
        onChange={(event) => {
          setGuessInput(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Input;

// The text input should be controlled by React state.

// When the form is submitted:
//  - The entered value should be logged to the console (for now).
//  - The input should be reset to an empty string.

// The user's input should be converted to ALL UPPERCASE. No lower-case letters allowed.

// The input should have a minimum and maximum length of 5.
// NOTE: The minLength validator is a bit funky; you may wish to use the pattern attribute instead. This is discussed in more detail on the Solution page.
