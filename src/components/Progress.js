import React from "react";

export const Progress = ({ numberOfQuestions, index, points, maxPoints }) => {
  return (
    <div className="progress">
      <progress max={maxPoints} value={points} />
      <div className="progress-text">
        <p>
          Question {index + 1} / {numberOfQuestions}
        </p>
        <p>
          {points} / {maxPoints}
        </p>
      </div>
    </div>
  );
};
