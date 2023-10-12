import React from "react";

export const FinishScreen = ({ dispatch, points, maxPoints, highScore }) => {
  const pointsPercentage = (points / maxPoints) * 100;
  return (
    <div className="finishScreen">
      <p>
        You finished with {points} / {maxPoints} (%{Math.ceil(pointsPercentage)}
        )
      </p>
      <p>Highscore: {highScore}</p>
      <button
        className="btn btn-finish"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart
      </button>
    </div>
  );
};
