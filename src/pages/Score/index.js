import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// import {ResultsBanner} from '../../components';
import { makeStyles } from '@material-ui/core';
import { CardContent, Card, Box } from '@material-ui/core';
import Question_Mark_Background from '../../images/Question_Mark_Background.png';

const Score = () => {
  const username = useSelector((state) => state.user.user.username);
  const score = useSelector((state) => state.quizReducer.score); //get score from state
  const results = useSelector((state) => state.quizReducer.results);
  const [allScores, setAllScores] = useState("");
  //   const [players, setPlayers] = useState("");
  const room = useSelector((state) => state.user.room);
  const players = useSelector((state) => state.user.user.username);
  const categoryName = useSelector((state) => state.quizReducer.categoryName);
  console.log(score, "hello");

  const sendResults = (categoryName, playerName, playerScore) => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          headers: { 'Content-Type': 'application/json' },
          body: {
            "category": categoryName,
            "name": playerName,
            "score": playerScore
          }
        }
        // const body = {
        //   "category": categoryName,
        //   "name": playerName,
        //   "score": playerScore
        // }
        console.log(results);
        const { data } = await axios.post(`http://localhost:5000/leaderboard`, options)

        if (data.err) {
          throw Error(data.err)
        }
        resolve('Scores sent to leaderboard!')
      } catch (err) {
        reject(`Can't send results: ${err}`);
      }
    })
  }


  useEffect(() => {
    console.log('catname',categoryName)
    players.forEach((player, i) => {
      sendResults(categoryName, player, score[i])
    })
  }, [categoryName, score, players])

  // Adding Material UI
  const useStyles = makeStyles({
    mainStyle: {
      backgroundImage: `url(${Question_Mark_Background})`,
      backgroundSize: "cover"
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
        <Card className={classes.cardStyle}>
          <CardContent className={classes.writing}>
            <div id="playerscore">
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
