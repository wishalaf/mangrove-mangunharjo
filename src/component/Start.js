import React from "react";
import { Container } from "react-bootstrap";
import Quiz4 from "../asset/Quiz4.png";
import "../style/styleStart.css";
import iconQuiz1 from "../asset/iconQuiz1.png";

export const Start = ({ onQuizStart }) => {
  return (
    <>
      <Container className="mt-5 ">
        <div className="row justify-content-center d-flex">
          <div className="col-lg-6 col-sm-12 justify-content-center d-flex">
            <img src={Quiz4} alt="Quiz4" className="Quiz4" />
          </div>
          <div className="col-lg-6 col-sm-12 p-lg-5 judulQuiz1">
            <img src={iconQuiz1} className="iconQuiz1" />
            <h1 className="judulQuiz">
              <b>Quiz Time</b>
            </h1>
            <p>Bergabunglah dengan tantangan dari kami dan jawablah dengan benar</p>
            <button className="btn btn-warning rounded-pill px-3 tombol" onClick={onQuizStart}>
              MULAI
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};
