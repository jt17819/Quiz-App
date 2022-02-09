import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import "./style.css";
import { useSelector } from "react-redux";
import { endQuestions, changeQuestion } from "../../actions";
import { useNavigate } from "react-router-dom";
import { moveToNextQuestion } from "../../actions";

const AnswerCard = (props) => {
  const dispatch = useDispatch();
  const nextQuestion = (answer) => dispatch(changeQuestion(answer));
  const endQuestion = (finalAnswer) => dispatch(endQuestions(finalAnswer));
  const results = useSelector((state) => state.quizReducer.results);
  const questionArrayLength = results.length;
  const players = useSelector((state) => state.user.user.username);
  let navigate = useNavigate();
  const playerTurn = useSelector((state) => state.quizReducer.playerTurn);
  // if (playerTurn === players.length) {
  //   dispatch(moveToNextQuestion);
  //   console.log("move to next question");
  // }
  // console.log(players);
  console.log("turn", playerTurn);

  const handleFinalAnswer = async () => {
    endQuestion([props.answer, props.playerTurn]);
    // navigate("/score");
    if (playerTurn === players.length - 1) {
      navigate("/score");
    }
  };

  function containsEncodedComponents(question) {
    const text = document.createElement("textarea");
    text.innerHTML = question;
    return text.value;
  }
  containsEncodedComponents(props.answer);

  let decodedAnswers = containsEncodedComponents(props.answer);
  console.log(props.index);

  if (props.index === questionArrayLength - 1) {
    return (
      <button id="answer-cards" onClick={handleFinalAnswer}>
        {decodedAnswers}
      </button>
    );
  } else {
    return (
      <button
        id="answer-cards"
        onClick={() => nextQuestion([props.answer, props.playerTurn])}
      >
        {decodedAnswers}
      </button>
    );
  }
};

export default AnswerCard;
