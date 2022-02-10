import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchQuiz } from "../../actions";
// import { socket } from "../../socket";
import "./style.css";
import { makeStyles } from "@material-ui/core";

const LobbyStatus = ({ host }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ready, setReady] = useState(false);
  const [category, setCategory] = useState(""); //useSelector((state) => state.config.config.subject) //need to change this back into words
  //   const [difficulty, setDifficulty] = useState(); //useSelector((state) => state.config.config.difficulty)
  //   const [numberOfQs, setNo] = useState("test"); //useSelector((state) => state.config.config.numberOfQs )
  const room = useSelector((state) => state.user.room);
  const categoryName = useSelector((state) => state.quizReducer.categoryName);
  const difficulty = useSelector((state) => state.quizReducer.difficulty);
  const numOfQs = useSelector((state) => state.quizReducer.numOfQs);
  const usertype = host; //useSelector((state) => state.user.user.type)
  // const usertype = "PLAYER"

  // useEffect(() => {
  //     socket.emit('get-questions', room, (res) => {
  //         console.log(res)
  //         setCategory(res.category);
  //         setDifficulty(res.difficulty);
  //         setNo(res.count)
  //     })
  //     socket.on('game-start', val =>  setReady(val))

  // }, [ready]);

  //   console.log(ready);

  const handleClick = (e) => {
    e.preventDefault();

    // socket.emit('game-start', room)

    navigate("/quiz");
  };

  const join = (e) => {
    e.preventDefault();
    // dispatch(fetchQuiz(numberOfQs, category, difficulty));
    navigate("/quiz");
  };

  // Using Material UI
  const useStyles = makeStyles({
    button: {
      backgroundColor: "#140100",
      color: "#61DBFB",
      marginTop: "10px",
      fontSize: "20px",
    },
  });

  const classes = useStyles();

  if (usertype === "HOST") {
    return (
      <>
        <p className={classes.button}>
          You will be answering
          <span style={{ color: "pink" }}> {numOfQs} </span>
          questions about
          <span style={{ color: "pink" }}> {categoryName} </span>
          at difficulty level
          <span style={{ color: "pink" }}> {difficulty} </span>
        </p>

        <button
          id="start-game"
          onClick={handleClick}
          className={classes.button}
        >
          Start Game
        </button>
      </>
      // onclick fetch questions and go to quiz page
    );
  } else {
    return (
      <>
        {ready ? (
          <button id="play-now" onClick={join}>
            Play Now!
          </button>
        ) : (
          <p>Waiting for host to start the game...</p>
        )}
      </>
    );
  }
};

export default LobbyStatus;
