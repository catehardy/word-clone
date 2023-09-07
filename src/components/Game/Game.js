// libs
import React from "react";

// local
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import GuessResults from "../GuessResults/GuessResults";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("current");
  const numberOfGuesses = guesses.length;

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
        <WonBanner numberOfGuesses={numberOfGuesses} />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer}/>
      )}
    </>
  );
}

export default Game;
