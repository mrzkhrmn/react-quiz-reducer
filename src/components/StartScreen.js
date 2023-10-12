import React from "react";

export const StartScreen = ({ numberOfQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>You have {numberOfQuestions} number of questions to answer</h2>
      <h3>Press start when you ready </h3>
      <button
        className="btn btn-start"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
};
