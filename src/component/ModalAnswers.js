import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalAnswers = ({ onClose, results, data, show }) => {
  return (
    <>
      {/* Modal 1 */}

      <Modal size="lg" show={show}>
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>Jawaban anda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {results.map((result, i) => {
              return (
                <li key={i} className="mb-5">
                  <p>
                    <strong>{result.q}</strong>
                  </p>
                  <p className={result.a === data[i].answer ? "bg-success text-white p-2" : "bg-danger text-white p-2"}>Jawaban anda: {result.a}</p>
                  {result.a !== data[i].answer && <p className="bg-primary text-white p-2">Jawaban yang benar: {data[i].answer}</p>}
                </li>
              );
            })}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAnswers;
