import React from "react";

export const NextButton = ({ answer, dispatch, index, numberOfQuestions }) => {
  if (answer === null) return null;
  if (index === numberOfQuestions - 1) {
    return (
      <button
        className="btn btn-next"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }

  return (
    <button
      className="btn btn-next"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
};
