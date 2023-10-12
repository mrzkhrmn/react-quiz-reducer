import React from "react";

export const Progress = ({ numberOfQuestions, index, points, maxPoints }) => {
  return (
    <div className="progress">
      <p>
        {points} / {maxPoints}
      </p>
      <progress max={maxPoints} value={points} />

      <p>
        Question {index + 1} / {numberOfQuestions}
      </p>
    </div>
  );
};
