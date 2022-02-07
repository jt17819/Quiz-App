const handleSubmit = async (e) => {
  e.preventDefault();

  resetGame();

  if (apiOptions.category) {
    setCurrentCategory(
      categories.find(
        (category) => category.id === parseInt(apiOptions.category)
      ).name
    );
  }

  const [loadingQuestions, setLoadingQuestions] = useState(false);

  setLoadingQuestions(true);
  try {
    const { data } = await axios({
      method: "GET",
      url: "https://opentdb.com/api.php?amount=10",
      // params: { ...apiOptions },
    });

    if (!data.results.length) {
      setError(
        "🙁 No questions found with the selected options. please try again!"
      );
      setLoadingQuestions(false);
      return;
    }

    setQuestionsBank(
      data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer);
        const wrongAnswers = [
          ...questionItem.incorrect_answers.map((a) => decodeString(a)),
          answer,
        ];
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: wrongAnswers.sort(() => Math.random() - 0.5),
        };
      })
    );
    setTotalQuestions(data.results.length);
    setQuizInProgress(true);
  } catch (error) {
    console.log(error);
    setError(
      "🙁 Error loading questions from the API. Please try again later."
    );
  }
  setLoadingQuestions(false);
};
