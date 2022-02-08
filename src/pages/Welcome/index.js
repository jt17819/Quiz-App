import React, { useEffect, useState } from "react";
import { setHost, setPlayer, setID } from "../../actions/userType";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [playerCount, setPlayerCount] = useState(0);
  const [userInput, setUsrInput] = useState(undefined);
  const [room, setRoom] = useState(undefined);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setError("");
    setUsrInput(e.target.value);
  };

  const handleRoomInput = (e) => {
    setError("");
    setRoom(e.target.value);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const player = userInput;

    if (player === undefined) {
      setError("Don't be rude, introduce yourself!");
    } else if (room === undefined) {
      setError("You need to create room or give an existing name");
    } else {
      setRoom(room);
      dispatch(setHost(player, room));
      navigate("/home");
    }
  };

  const handleJoin = (e) => {
    e.preventDefault();

    const player = userInput;
    if (player === undefined) {
      setError("Don't be rude, introduce yourself!");
    } else if (room === undefined) {
      setError("You need to create room or give an existing name");
    } else {
      setRoom(room);
      dispatch(setPlayer(player, room));
      navigate("/lobby");
    }
  };
  const renderJoin = () => {
    let tags = null;

    if (playerCount < 2) {
      tags = "disabled";
    }
    return (
      <>
        <input
          type="submit"
          className={tags}
          name="joinQuiz"
          value="Join"
          onClick={handleJoin}
        />
      </>
    );
  };

  return (
    <div id="welcome">
      <form autoComplete="off">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Choose your player name"
          value={userInput}
          onChange={handleInput}
        />

        <label htmlFor="roomName">Room Name</label>
        <input
          type="text"
          id="roomName"
          name="roomName"
          placeholder="Pick a room name (max 4 players)"
          value={room}
          onChange={handleRoomInput}
        />

        <input
          type="submit"
          name="newQuiz"
          value="New Game"
          onClick={handleCreate}
        />
        {renderJoin()}
      </form>
      <p>
        {playerCount <= 1
          ? "No Players Online"
          : `Total players online: ${playerCount - 1}`}
        {error && <div className="error">{error}</div>}
      </p>
    </div>
  );
};

export default Welcome;
