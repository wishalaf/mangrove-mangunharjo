import React, { useState, useEffect, useRef } from "react";
import { FiBox } from "react-icons/fi";
import "../style/styleQuestion.css";

const Question = ({ data, onAnswerUpdate, numberOfQuestion, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [...prevState, { q: data.question, a: selected }]);
    setSelected("");
    if (activeQuestion < numberOfQuestion - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };
  return (
    <>
      {/* <FiBox /> */}
      <div className="px-5">
        <div className="card shadow-lg">
          <div className="card-content">
            <div className="content">
              <div className="mb-3">
                <FiBox style={{ width: 35, height: 35 }} /> <span style={{ fontSize: 20 }}>Quizz App</span>
              </div>

              <h3 className="mb-4">{data.question}</h3>
              <p>Pertanyaan {data.id}</p>
              <hr />
              <div className="control" ref={radiosWrapper}>
                {data.choices.map((choice, i) => (
                  <>
                    <label className="radio rounded-3" key={i}>
                      <h6>
                        <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                        {choice}
                      </h6>
                    </label>
                  </>
                ))}
              </div>
              {error && <div className="text-danger">{error}</div>}
              <button className="btn link btn-info w-50 mt-4 rounded-pill p-2 shadow-lg" onClick={nextClickHandler}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
