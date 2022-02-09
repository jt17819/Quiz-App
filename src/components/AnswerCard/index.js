import React, {useState} from "react";
import { useDispatch } from "react-redux";
// import "./style.css";
import {useSelector} from 'react-redux'
import { endQuestions, changeQuestion} from "../../actions";
import {useNavigate} from 'react-router-dom';
import { makeStyles } from "@material-ui/core";

const AnswerCard = (props) => {

    const dispatch = useDispatch();
    const nextQuestion = (answer) => dispatch(changeQuestion(answer));
    const endQuestion =(finalAnswer) => dispatch(endQuestions(finalAnswer))
    const results = useSelector((state) => state.quizReducer.results)
    const questionArrayLength = results.length
    let navigate = useNavigate()
  
  
   
    const handleFinalAnswer = async () => {
          endQuestion(props.answer)
          navigate('/score')
  }

  function containsEncodedComponents(question) {
    const text = document.createElement('textarea')
	  text.innerHTML = question
	  return text.value;
  }
  containsEncodedComponents(props.answer);

  let decodedAnswers = containsEncodedComponents(props.answer)
  console.log(props.index)

  const useStyles = makeStyles({
    button: {
      backgroundColor: "#140100",
      color: "#61DBFB",
      marginTop: "10px",
      fontSize: "20px",
      margin: "10px"
    }
  });

  const classes = useStyles();

if (props.index === questionArrayLength-1){
 return(
     <button id="answer-cards" onClick = {handleFinalAnswer} className={classes.button}>{decodedAnswers}</button>

 )


}else{
   return (
     <button id="answer-cards" onClick={() => nextQuestion(props.answer)} className={classes.button}>{decodedAnswers}</button>
 );
}
};

export default AnswerCard;