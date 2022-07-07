import React, { useState, useEffect } from "react";
import { Start } from "./Start";
import "../style/styleQuiz.css";
import Question from "./Question";
import quizData from "../data/quiz.json";
import End from "./End";
import ModalAnswers from "./ModalAnswers";

let interval;

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  });

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="quiz">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question data={quizData.data[activeQuestion]} onAnswerUpdate={setAnswers} numberOfQuestion={quizData.data.length} activeQuestion={activeQuestion} onSetActiveQuestion={setActiveQuestion} onSetStep={setStep} />}
      {step === 3 && <End results={answers} data={quizData.data} onReset={resetClickHandler} onAnswersCheck={handleShow} time={time} />}
      {showModal && <ModalAnswers onClose={handleClose} results={answers} data={quizData.data} show={showModal} />}
    </div>
  );
}
