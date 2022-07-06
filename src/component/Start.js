import React from "react";

export const Start = ({ onQuizStart }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Start The Quiz</h1>
          <p>Good luck!</p>
          <button className="btn btn-info" onClick={onQuizStart}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};
