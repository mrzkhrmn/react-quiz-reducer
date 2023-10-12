import React from "react";
import { Options } from "./Options";

export const Question = ({ questions, dispatch, answer }) => {
  return (
    <div>
      <h1>{questions.question}</h1>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
};
