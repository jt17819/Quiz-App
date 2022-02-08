import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchQuiz } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [difficultySelection, setdifficultySelection] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [category, setCategory] = useState("9");
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let cancel;

    axios({
      method: "GET",
      url: "https://opentdb.com/api_category.php",
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then(({ data }) => {
        setCategories(data.trivia_categories);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        console.log(error);
      });
    return () => cancel();
  }, []);

  const numberOfQuestionsChange = (e) => {
    const { value } = e.target;
    console.log("changing number of questions", value);
    setNumberOfQuestions(value);
  };

  const changeDifficulty = (e) => {
    const { value } = e.target;
    setdifficultySelection(value);
  };

  const changeCategory = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiOptions = {
      //   players: e.target.players.value,
      amount: numberOfQuestions,
      category: parseInt(category),
      difficulty: difficultySelection,
    };
    const categoryName = categories.find((c) => {
      return c.id === parseInt(category);
    }).name;

    

    dispatch(fetchQuiz(apiOptions, categoryName));
    navigate("/lobby");
    console.log("hitting API");
  };
  let questionNumberOptions = [];
  for (let i = 1; i < 11; i++) {
    questionNumberOptions.push(i);
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="players">Players</label>
        <select id="players">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <label htmlFor="numOfQuestions">How many questions</label>
        <select id="numOfQuestions" onChange={numberOfQuestionsChange}>
          {questionNumberOptions.map((e, i) => {
            return <option value={e}>{parseInt(e)}</option>;
          })}
        </select>

        <label htmlFor="category">Category</label>
        <select id="category" onChange={changeCategory}>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <label htmlFor="difficulty">Difficulty</label>
        <select id="difficulty" onChange={changeDifficulty}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input
          type="submit"
          id="startQuiz"
          value="Start"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
