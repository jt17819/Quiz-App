import axios from "axios";

export const fetchQuiz = (apiOptions, categoryName) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://opentdb.com/api.php",
        params: { ...apiOptions },
      });
      console.log(apiOptions);
      console.log(data);
      let quizData = data.results.map((element, i) => ({
        id: i + 1,
        question: element.question,
        correct_answer: element.correct_answer,
        answers: [...element.incorrect_answers, element.correct_answer],
      }));

      dispatch({
        type: "LOAD_QUESTIONS",
        payload: [
          quizData,
          categoryName,
          apiOptions.difficulty,
          apiOptions.amount,
        ],
      });
    } catch (err) {
      console.warn(err.message);
      dispatch({
        type: "SET_ERROR",
        payload: err.message,
      });
    }
  };
};

export const changeQuestion = (answer) => ({
  type: "CHANGE_QUESTION",
  payload: answer,
});

export const endQuestions = (finalAnswer) => ({
  type: "END_QUESTIONS",
  payload: finalAnswer,
});

export const moveToNextQuestion = (nextQuestion) => ({
  type: "NEXT_QUESTION",
  payload: nextQuestion,
});

export const getScore = () => ({ type: "GET_SCORE" });
