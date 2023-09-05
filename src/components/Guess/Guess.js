import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({guesses}) {
  let numRows = NUM_OF_GUESSES_ALLOWED;
  let numCols = 5;

  return (
    <div className="guess-results">
      {range(numRows).map((rowIndex) => (
        <p className="guess" key={rowIndex}>
          {range(numCols).map((colIndex) => {
            let letter = "";
            if (guesses[rowIndex] && guesses[rowIndex][colIndex]) {
              letter = guesses[rowIndex][colIndex];
            }
            return (
              <span className="cell" key={`${rowIndex}-${colIndex}`}>
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

// Create a new Guess component. 6 instances should be rendered at all times, no matter how many guesses have been submitted.

// The Guess component should render 5 spans, each with the class of cell.

// Each cell should contain a letter, if the Guess instance has been given a value. If not, the cell should be blank.

// Use the NUM_OF_GUESSES_ALLOWED constant, when needed.

// No key warnings in the console.
