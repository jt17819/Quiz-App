import React, { useState, useEffect } from "react";
import { LobbyStatus, PlayerBubble } from "../../components";
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core';
import { CardContent, Card, Box } from '@material-ui/core';

const Lobby = () => {
  // const players = ['player1', 'player2', 'player3']// this will come from redux
  const [players, setPlayers] = useState(["Amir"]);
  const room = useSelector((state) => state.user.room);
  const host = useSelector((state) => state.user.user.type);

  // Adding Material UI
  const useStyles = makeStyles({
    mainStyle: {
      backgroundColor: "#7f7e7a"
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
      fontSize: "20px",
      padding: "10px"
    },
    button: {
      backgroundColor: "#140100",
      color: "#61DBFB",
      marginTop: "10px",
      fontSize: "20px"
    }
  });

  const classes = useStyles();

  return (
    <div id="Lobby" className={classes.mainStyle}>
      <Box className={classes.box}>
      <Card className={ classes.cardStyle }>
      <CardContent>
      <h2 className={classes.writing}>Lobby</h2>

      <LobbyStatus host={host} />

      
      <div id="players">
        {players &&
          players.map((player) => (
            <PlayerBubble key={players.indexOf(player)} player={player} />
          ))}
      </div>
      </CardContent>
      </Card>
      </Box>
    </div>
  );
};

export default Lobby;
