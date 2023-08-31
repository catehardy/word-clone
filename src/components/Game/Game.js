// libs
import React from "react";

// local
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import PreviousGuesses from "../PreviousGuesses/previous-guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInput, setGuessInput] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <PreviousGuesses guesses={guesses} />
      <Input
        guessInput={guessInput}
        setGuessInput={setGuessInput}
        guesses={guesses}
        setGuesses={setGuesses}
      />
    </>
  );
}

export default Game;
