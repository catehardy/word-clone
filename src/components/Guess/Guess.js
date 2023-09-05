import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({guesses, answer}) {
  let numRows = NUM_OF_GUESSES_ALLOWED;
  let numCols = 5;

  return (
    <div className="guess-results">
      {range(numRows).map((rowIndex) => (
        <p className="guess" key={rowIndex}>
          {range(numCols).map((colIndex) => {
            let letter = "";
            let checkedGuess = [];
            let status = "";
            if (guesses[rowIndex] && guesses[rowIndex][colIndex]) {
              letter = guesses[rowIndex][colIndex];
              checkedGuess = checkGuess(guesses[rowIndex], answer);
              status = checkedGuess[colIndex].status
            }
            return (
              <span className={`cell ${status}`} key={`${rowIndex}-${colIndex}`}>
                {letter}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

export default Guess;
