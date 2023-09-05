// libs
import React from "react";

// local
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
// import PreviousGuesses from "../PreviousGuesses/previous-guesses";
import Guess from "../Guess/Guess";


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInput, setGuessInput] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      {/* <PreviousGuesses guesses={guesses} /> */}
      <Guess guesses={guesses} />
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

// Idea: I could set number of rows for the Guess component as 6-guesses (these are the previous guesses)
// then I'd display the previous guesses in a grid by mapping over each guess, and display an empty grid
// for however many of the 6 remaining guesses are left.