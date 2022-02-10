const init = {
  loading: false,
  results: [{ question: "", correct_answer: "", answers: [] }],
  current_question_index: 0,
  score: [],
  playerTurn: 0,
};

const quizReducer = (state = init, action) => {
  //when refering to index, I mean index of the question in the array
  const chosenAnswer = action.payload ? action.payload[0] : "";
  const playerTurn = action.payload ? action.payload[1] : 0;
  // const chosenAnswer = action.payload;
  // const playerTurn = 0;
  const currentQuestionIndex = state.current_question_index;
  const correctAnswer = state.results[currentQuestionIndex].correct_answer;
  const nextQuestionIndex = state.current_question_index + 1;
  // const score = state.score;

  switch (action.type) {
    case "LOAD_QUESTIONS":
      console.log(action.payload[0]);
      return {
        ...state,
        results: action.payload[0],
        categoryName: action.payload[1],
        difficulty: action.payload[2] ? action.payload[2] : "Any Difficulty",
        numOfQs: action.payload[3],
        playerTurn: 0,
        score: [],
        current_question_index: 0,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "CHANGE_QUESTION":
      console.log(action.payload);
      //at this point when change question, we want to know whether the answer they clicked was correct
      // if chosenAnswer and correct answer are the same move to next question but also add one to the score
      if (chosenAnswer === correctAnswer) {
        const scoreArray = [...state.score];
        const newScore = state.score[playerTurn]
          ? state.score[playerTurn] + 1
          : 1;
        scoreArray[playerTurn] = newScore;
        return {
          ...state,
          // current_question_index: nextQuestionIndex,
          score: scoreArray,
          playerTurn: playerTurn + 1,
        };
      } else {
        const scoreArray = [...state.score];
        const newScore = state.score[playerTurn] ? state.score[playerTurn] : 0;
        scoreArray[playerTurn] = newScore;
        // return { ...state, current_question_index: nextQuestionIndex };
        return { ...state, score: scoreArray, playerTurn: playerTurn + 1 };
      }

    case "END_QUESTIONS":
      console.log(action.payload);
      if (chosenAnswer === correctAnswer) {
        const scoreArray = [...state.score];
        const newScore = state.score[playerTurn]
          ? state.score[playerTurn] + 1
          : 1;
        scoreArray[playerTurn] = newScore;
        return { ...state, score: scoreArray, playerTurn: playerTurn + 1 };
      } else {
        const scoreArray = [...state.score];
        const newScore = state.score[playerTurn] ? state.score[playerTurn] : 0;
        scoreArray[playerTurn] = newScore;
        return { ...state, score: scoreArray, playerTurn: playerTurn + 1 };
      }

    case "NEXT_QUESTION":
      console.log(action.payload);
      console.log("next question");
      return {
        ...state,
        current_question_index: nextQuestionIndex,
        playerTurn: playerTurn,
      };

    case "GET_SCORE":
      return { ...state };
    default:
      return state;
  }
};
export default quizReducer;
