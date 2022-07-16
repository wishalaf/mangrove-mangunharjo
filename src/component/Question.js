import React, { useState, useEffect, useRef } from "react";

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
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p>Question {data.id}</p>
          <h3 className="mb-4">{data.question}</h3>
          <hr />
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <>
                <label className="radio bg-light" key={i}>
                  <h6>
                    <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                    {choice}
                  </h6>
                </label>
              </>
            ))}
          </div>
          {error && <div className="text-danger">{error}</div>}

          <button className="btn link btn-primary w-100 mt-4 " onClick={nextClickHandler}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
