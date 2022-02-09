import React, { useState, useEffect } from "react";
import { LobbyStatus, PlayerBubble } from "../../components";
import { useSelector } from "react-redux";

const Lobby = () => {
  // const players = ['player1', 'player2', 'player3']// this will come from redux
  //   const [players, setPlayers] = useState(["Amir"]);
  const room = useSelector((state) => state.user.room);
  const host = useSelector((state) => state.user.user.type);
  const players = useSelector((state) => state.user.user.username);

  return (
    <div id="Lobby">
      <h2>Lobby</h2>

      <LobbyStatus host={host} />

      <div id="players">
        {players &&
          players.map((player) => (
            <PlayerBubble key={players.indexOf(player)} player={player} />
          ))}
      </div>
    </div>
  );
};

export default Lobby;
