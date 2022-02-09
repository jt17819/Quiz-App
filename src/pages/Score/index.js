import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// import {ResultsBanner} from '../../components';
import { makeStyles } from '@material-ui/core';
import { CardContent, Card, Box } from '@material-ui/core';

const Score = () => {
  const username = useSelector((state) => state.user.user.username);
  const score = useSelector((state) => state.quizReducer.score); //get score from state
  const results = useSelector((state) => state.quizReducer.results);
  const [allScores, setAllScores] = useState("");
  //   const [players, setPlayers] = useState("");
  const room = useSelector((state) => state.user.room);
  const players = useSelector((state) => state.user.user.username);
  console.log(score, "hello");

   // Adding Material UI
   const useStyles = makeStyles({
    mainStyle: {
      backgroundColor: "#7f7e7a",
      color: "#61DBFB",
      fontSize: "20px"
    },
    cardStyle: {
      backgroundColor: "#140100"
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90vh"
    },
    writing: {
      color: "white",
      fontSize: "20px"
    }
  });

  const classes = useStyles();

  return (
    <div id="score-page" className={classes.mainStyle}>
        <Box className={classes.box}>
      <Card className={ classes.cardStyle }>
      <CardContent  className={classes.writing}>
      <div id="playerscore">
        {/* <h2>You scored: {score[0]} points</h2> */}
        {players.map((p, i) => (
          <p>
            {p} Score: {score[i]}
          </p>
        ))}
      </div>
      </CardContent>
      </Card>
      </Box>
    </div>
  );
};

export default Score;
