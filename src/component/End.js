import React, { useState, useEffect } from "react";
import "../style/styleEnd.css";

import { formatTime } from "../utils";

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="px-5 ">
      <div className="card shadow-lg">
        <div className="card-content">
          <div className="content">
            <h3>Hasil Quiz</h3>
            <p>
              {correctAnswers} dari {data.length}
            </p>
            <p>
              <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
            </p>
            <p>
              <strong>Waktu anda: </strong>
              {formatTime(time)}
            </p>
            <button className="btn btn-info me-2" onClick={onAnswersCheck}>
              Lihat jawaban anda
            </button>
            <button className="btn btn-success" onClick={onReset}>
              Coba lagi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
