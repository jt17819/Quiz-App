import { apiContext } from "./Home";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const Question = () => {
  const [questionBank, setQuestionsBank] = useState([]);
  const { apiData } = useContext(apiContext);
  console.log(apiData);
  useEffect(() => {
    const getQuestions = async (apiData) => {
      try {
        const { data } = await axios({
          method: "GET",
          url: `https://opentdb.com/api.php`,
          params: { ...apiData },
        });

        setQuestionsBank(
          await data.results.map((questionItem, index) => {
            const options = [
              ...questionItem.incorrect_answers,
              questionItem.correct_answer,
            ];
            return {
              id: `${index}-${Date.now()}`,
              question: questionItem.question,
              answer: questionItem.correct_answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
        console.log(questionBank);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestions(apiData);
  }, [apiData, questionBank]);

  return <div>hello</div>;
};

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   resetGame();

//   if (apiOptions.category) {
//     setCurrentCategory(
//       categories.find(
//         (category) => category.id === parseInt(apiOptions.category)
//       ).name
//     );
//   }

//   const [loadingQuestions, setLoadingQuestions] = useState(false);

//   setLoadingQuestions(true);
//   try {
//     const { data } = await axios({
//       method: "GET",
//       url: "https://opentdb.com/api.php?amount=10",
//       // params: { ...apiOptions },
//     });

//     if (!data.results.length) {
//       setError(
//         "🙁 No questions found with the selected options. please try again!"
//       );
//       setLoadingQuestions(false);
//       return;
//     }

//     setQuestionsBank(
//       data.results.map((questionItem, index) => {
//         const answer = decodeString(questionItem.correct_answer);
//         const wrongAnswers = [
//           ...questionItem.incorrect_answers.map((a) => decodeString(a)),
//           answer,
//         ];
//         return {
//           id: `${index}-${Date.now()}`,
//           question: decodeString(questionItem.question),
//           answer: answer,
//           options: wrongAnswers.sort(() => Math.random() - 0.5),
//         };
//       })
//     );
//     setTotalQuestions(data.results.length);
//     setQuizInProgress(true);
//   } catch (error) {
//     console.log(error);
//     setError(
//       "🙁 Error loading questions from the API. Please try again later."
//     );
//   }
//   setLoadingQuestions(false);
// };

export default Question;
