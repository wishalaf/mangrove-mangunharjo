import React from "react";
import { Container } from "react-bootstrap";
import { SiDpd } from "react-icons/si";
import Quiz4 from "../asset/Quiz4.png";
import "../style/styleStart.css";

export const Start = ({ onQuizStart }) => {
  return (
    <>
      <Container className="mt-5 ">
        <div class="row justify-content-center d-flex">
          <div class="col-lg-6 col-sm-12 justify-content-center d-flex">
            {/* <div className="d-flex justify-content-center mb-5">
              <SiDpd style={{ height: 40, width: 40, color: "#34cceb" }} className="me-3" />
              <h1>Test Pengetahuan Mangrove Anda!</h1>
            </div> */}
            <img src={Quiz4} alt="Quiz4" className="Quiz4" />
          </div>
          <div class="col-lg-6 col-sm-12 p-lg-5">
            <h1 className="judulQuiz">Quiz Time</h1>
            <p>Good luck!</p>
            <button className="btn btn-warning rounded-pill px-3 tombol" onClick={onQuizStart}>
              Get Start
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};
