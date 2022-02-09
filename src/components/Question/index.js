import React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

const Question = (props) => {
  const results = useSelector((state) => state.quizReducer.results);
  console.log(results);

  const questionArrayLength = results.length;

  //console.log(questionArrayLength);
  //   function containsEncodedComponents(question) {
  //     return decodeURIComponent(question);
  //   }
  //   containsEncodedComponents(props.question);

  const containsEncodedComponents = (string) => {
    const text = document.createElement("textarea");
    text.innerHTML = string;
    return text.value;
  };

  containsEncodedComponents(props.question);

  let questionNumber = props.index + 1;

  return (
    <div role="question-container" id="question-container">
      <h3>
        <span id="question-num">
          Question {questionNumber} of {questionArrayLength}:
        </span>{" "}
        <br></br>
        {containsEncodedComponents(props.question)}
      </h3>
    </div>
  );
};

export default Question;
