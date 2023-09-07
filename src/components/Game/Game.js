// libs
import React from "react";

// local
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("current");
  const numberOfGuesses = guesses.length

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <Input
        guesses={guesses}
        setGuesses={setGuesses}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        answer={answer}
      />
      {gameStatus === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{` ${numberOfGuesses} ${numberOfGuesses === 1 ? "guess" : "guesses"}`}</strong>.
          </p>
        </div>
      )}
      {gameStatus === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
