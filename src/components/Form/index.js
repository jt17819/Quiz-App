import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchQuiz } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { CardContent, Card, Box } from "@material-ui/core";
import Question_Mark_Background from "../../images/Question_Mark_Background.png";

const Form = () => {
  const [difficultySelection, setdifficultySelection] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [category, setCategory] = useState("");
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
      category: category,
      difficulty: difficultySelection,
    };
    dispatch(fetchQuiz(apiOptions));
    navigate("/quiz");
    const categoryName = category
      ? categories.find((c) => {
          return c.id === parseInt(category);
        }).name
      : "Any Category";

    dispatch(fetchQuiz(apiOptions, categoryName));
    navigate("/lobby");
    console.log("hitting API");
  };
  let questionNumberOptions = [];
  for (let i = 1; i < 11; i++) {
    questionNumberOptions.push(i);
  }

  // Adding Material UI
  const useStyles = makeStyles({
    mainStyle: {
      backgroundImage: `url(${Question_Mark_Background})`,
      backgroundSize: "cover",
    },
    cardStyle: {
      backgroundColor: "#140100",
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90vh",
    },
    writing: {
      color: "white",
      fontSize: "20px",
      padding: "10px",
    },
    button: {
      backgroundColor: "#140100",
      color: "#61DBFB",
      marginTop: "10px",
      fontSize: "20px",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.mainStyle}>
      <Box className={classes.box}>
        <Card className={classes.cardStyle}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <ul>
                <label htmlFor="numOfQuestions" className={classes.writing}>
                  How many questions:
                </label>
                <select id="numOfQuestions" onChange={numberOfQuestionsChange}>
                  {questionNumberOptions.map((e, i) => {
                    return (
                      <option key={e} value={e}>
                        {parseInt(e)}
                      </option>
                    );
                  })}
                </select>
              </ul>

              <ul>
                <label htmlFor="category" className={classes.writing}>
                  Category:
                </label>
                <select id="category" onChange={changeCategory}>
                  <option value="" key="cat">
                    Any Category
                  </option>
                  {categories.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </ul>

              <ul>
                <label htmlFor="difficulty" className={classes.writing}>
                  Difficulty:
                </label>
                <select id="difficulty" onChange={changeDifficulty}>
                  <option value="">Any Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </ul>

              <ul>
                <input
                  type="submit"
                  id="startQuiz"
                  value="Start"
                  onClick={handleSubmit}
                  className={classes.button}
                />
              </ul>
            </form>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Form;
