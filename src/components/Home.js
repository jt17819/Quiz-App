import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

// export default Home;
