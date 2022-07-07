import React from "react";
import { Modal } from "react-bootstrap";

const ModalAnswers = ({ onClose, results, data, show }) => {
  return (
    <>
      {/* Modal 1 */}

      <Modal size="lg" show={show}>
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>Your Answer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {results.map((result, i) => {
              <li key={i} className="mb-5">
                <p>
                  <strong>{result.q}</strong>
                </p>
                <p className={result.a === data[i].answer ? "bg-success text-white p-2" : "bg-danger text-white p-2"}>Your Answer: {result.a}</p>
                {result.a !== data[i].answer && <p className="bg-primary text-white p-2">Correct Answer: {data[i].answer}</p>}
              </li>;
            })}
          </ul>
        </Modal.Body>
      </Modal>

      {/* Modal 2 */}
      {/* <div className="modal-active ms-5">
        <div className="modal-background" onClick={onClose}></div>
        <div className="modal-content">
          <header className="modal-header justify-between">
            <h5 className="modal-title">Your Answer</h5>
            <button className="delete btn btn-outline-danger close" onClick={onClose}>
              <span>x</span>
            </button>
          </header>
          <section className="modal-body ">
            <h5>hello world</h5>
            <ul>
              {results.map((result, i) => {
                <li key={i} className="mb-5">
                  <p>
                    <strong>{result.q}</strong>
                  </p>
                  <p className={result.a === data[i].answer ? "bg-success text-white p-2" : "bg-danger text-white p-2"}>Your Answer: {result.a}</p>
                  {result.a !== data[i].answer && <p className="bg-primary text-white p-2">Correct Answer: {data[i].answer}</p>}
                </li>;
              })}
            </ul>
          </section>
        </div>
      </div> */}
    </>
  );
};

export default ModalAnswers;
