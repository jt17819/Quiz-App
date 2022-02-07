import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
export const apiContext = React.createContext();

const Home = ({ categories }) => {
  const [apiData, setApiData] = useState({ amount: 10 });
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiOptions = {
      //   players: e.target.players.value,
      amount: 10,
      category: parseInt(e.target.category.value),
      difficulty: e.target.difficulty.value,
    };

    navigate("/quiz");
    console.log(apiOptions);
    setApiData(apiOptions);
  };

  return (
    <apiContext.Provider value={{ apiData }}>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="players">Players</label>
          <select id="players">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>

          <label htmlFor="category">Category</label>
          <select id="category">
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <label htmlFor="difficulty">Difficulty</label>
          <select id="difficulty">
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <input type="submit" id="startQuiz" value="Start" />
        </form>
      </div>
      <Question />
    </apiContext.Provider>
  );
};

export default Home;
