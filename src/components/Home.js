import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Question from "./Question";
import axios from "axios";
export const apiContext = React.createContext();



// const Home = ({ categories }) => {
//   const [apiData, setApiData] = useState({ amount: 10 });
//   const [questions, setQuestions] = useState([]);
//   const [difficultySelection, setdifficultySelection] = useState();
//   const [category, setCategory] = useState();
//   const [numberOfQuestions, setNumberOfQuestions] = useState(1);

//   let navigate = useNavigate();

//   let questionNUmberOprions = [];
//   for (let i = 0; i < 20; i++) {
//     questionNUmberOprions.push(i);
//   }

//   const htmlEntitiesEncoding = (str) => {
//     return String(str)
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;")
//       .replace(/"/g, "&quot;");
//   };

  

//   return (
//     <apiContext.Provider value={{ apiData }}>
//       <div className="formContainer">
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="players">Players</label>
//           <select id="players">
//             <option value="1">1</option>
//             <option value="2">2</option>
//           </select>

//           <label htmlFor="numOfQuestions">How many questions</label>
//           <select id="numOfQuestions" onChange={numberOfQuestionsChange}>
//             {questionNUmberOprions.map((e, i) => {
//               return <option value={e}>{parseInt(e)}</option>;
//             })}
//           </select>

//           <label htmlFor="category">Category</label>
//           <select id="category" onChange={chnageCategory}>
//             {categories.map((category) => (
//               <option value={category.id} key={category.id}>
//                 {category.name}
//               </option>
//             ))}
//           </select>

//           <label htmlFor="difficulty">Difficulty</label>
//           <select id="difficulty" onChange={chnageDifficulty}>
//             <option value="">Any Difficulty</option>
//             <option value="easy">Easy</option>
//             <option value="medium">Medium</option>
//             <option value="hard">Hard</option>
//           </select>
//           <input
//             type="submit"
//             id="startQuiz"
//             value="Start"
//             onClick={handleSubmit}
//           />
//         </form>
//       </div>
//       <br></br>
//       {/* <Question difficulty={ }/> */}
//       <div
//         style={{
//           textAlign: "left",
//           justifyContent: "center",
//           marginLeft: "20em",
//         }}
//       >
//         <ul>
//           {questions?.map((e) => {
//             return (
//               <div>
//                 {" "}
//                 <li>{e}</li> <br></br>{" "}
//               </div>
//             );
//           })}
//         </ul>
//       </div>
//     </apiContext.Provider>
//   );
// };

      let questionsApiData = [];

      for (let i = 0; i < numberOfQuestions; i++) {
        console.log("element", data?.results[i]?.question);
        questionsApiData.push(data?.results[i]?.question);
      }

      console.log(questionsApiData);

      //   const questionData = data.results.map((questionItem, index) => {
      //     const options = [
      //       ...questionItem.incorrect_answers,
      //       questionItem.correct_answer,
      //     ];
      //     return {
      //       id: `${index}-${Date.now()}`,
      //       question: questionItem.question,
      //       answer: questionItem.correct_answer,
      //       options: options.sort(() => Math.random() - 0.5),
      //     };
      //   });

      //   console.log("formated question data", questionData);

      setQuestions(questionsApiData);
    } catch (err) {
      console.log("error", err);
    }

    //navigate("/quiz");

    setApiData(apiOptions);
  };

  const useStyles = makeStyles({
    style: {
      backgroundColor: "#140100",
    },
    writing: {
      color: "white"
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90vh"
    }
  })

  const classes = useStyles();

  return (
    <apiContext.Provider value={{ apiData }}>
      <div className="formContainer">
        <Box className={classes.box}>
        <Card className={ classes.style }>
        <CardContent >
        <form onSubmit={handleSubmit}>
          <ul>
          <label htmlFor="players" className={classes.writing}>Players</label>
          <select id="players">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          </ul>

          <ul>
          <label htmlFor="numOfQuestions" className={classes.writing}>How many questions</label>
          <select id="numOfQuestions" onChange={numberOfQuestionsChange}>
            {questionNUmberOprions.map((e, i) => {
              return <option value={e}>{parseInt(e)}</option>;
            })}
          </select>
          </ul>

          <ul>
          <label htmlFor="category" className={classes.writing}>Category</label>
          <select id="category" onChange={chnageCategory}>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          </ul>

          <ul>
          <label htmlFor="difficulty" className={classes.writing}>Difficulty</label>
          <select id="difficulty" onChange={chnageDifficulty}>
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
          />
          </ul>
        </form>
        </CardContent>
        </Card>
        </Box>
      </div>
      <br></br>
      {/* <Question difficulty={ }/> */}
      <div
        style={{
          textAlign: "left",
          justifyContent: "center",
          marginLeft: "20em",
        }}
      >
        <ul>
          {questions?.map((e) => {
            return (
              <div>
                {" "}
                <li>{e}</li> <br></br>{" "}
              </div>
            );
          })}
        </ul>
      </div>
    </apiContext.Provider>
  );
};

export default Home;
// export default Home;
