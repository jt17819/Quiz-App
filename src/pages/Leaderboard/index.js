import React from "react";
// import "./style.css";
import { LeaderboardTable } from "../../components";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { CardContent, Card, Box } from '@material-ui/core';

function Leaderboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

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
      },
      button: {
        backgroundColor: "#140100",
        color: "#61DBFB",
        marginTop: "10px",
        fontSize: "20px",
      }
    });
  
    const classes = useStyles();

  return (
    <div id="Leaderboard-page" className={classes.mainStyle}>
      <Box className={classes.box}>
      <Card className={ classes.cardStyle }>
      <CardContent  className={classes.writing}>
      <h2>Leaderboard</h2>
      <LeaderboardTable />
      <button id="start-again" onClick={handleClick} className={classes.button}>
        Start Again
      </button>
      </CardContent>
      </Card>
      </Box>
    </div>
  );
}
export default Leaderboard;
