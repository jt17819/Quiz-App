import React, { useEffect, useState } from "react";
import { setHost, setPlayer, setID } from "../../actions/userType";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [playerCount, setPlayerCount] = useState([0]);
  const [userInput, setUserInput] = useState([""]);
  const [room, setRoom] = useState(1);
  const [error, setError] = useState("");

  const handleInput = (p) => {
    return function (e) {
      const value = e.target.value;
      setError("");
      setUserInput(userInput.map((user, i) => (p === i ? value : user)));
      
    };
  };

  //   const handleRoomInput = (e) => {
  //     setError("");
  //     setRoom(e.target.value);
  //   };

  const handleCreate = (e) => {
    e.preventDefault();
    const player = userInput;

    if (player === undefined) {
      setError("Don't be rude, introduce yourself!");
    } else if (room === undefined) {
      setError("You need to create room or give an existing name");
    } else if (userInput.includes("")) {
      setError("Please Give All Players A Name");
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
  //   const renderJoin = () => {
  //     let tags = null;

  //     if (playerCount < 2) {
  //       tags = "disabled";
  //     }
  //     return (
  //       <>
  //         <input
  //           type="submit"
  //           className={tags}
  //           name="joinQuiz"
  //           value="Join"
  //           onClick={handleJoin}
  //         />
  //       </>
  //     );
  //   };

  const changeNumPlayers = (e) => {
    const { value } = e.target;
    let numPlayers = [];
    let users = [];
    for (let i = 0; i < value; i++) {
      numPlayers.push(i);
      users.push("");
    }
    setPlayerCount(numPlayers);
    setUserInput(users);
    console.log(playerCount);
  };

  return (
    <div id="welcome">
      <form autoComplete="off">
        <label htmlFor="players">Players</label>
        <select id="players" onChange={changeNumPlayers}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        {playerCount.map((p) => {
          return (
            <div key={"username" + p + 1}>
              <label htmlFor={"username" + p + 1}>Player {p + 1}</label>
              <input
                type="text"
                id={"username" + p + 1}
                name={"username" + p + 1}
                placeholder="Choose your player name"
                value={userInput[p]}
                onChange={handleInput(p)}
              />
            </div>
          );
        })}

        {/* <label htmlFor="roomName">Room Name</label>
        <input
          type="text"
          id="roomName"
          name="roomName"
          placeholder="Pick a room name (max 4 players)"
          value={room}
          onChange={handleRoomInput}
        /> */}

        <input
          type="submit"
          name="newQuiz"
          value="New Game"
          onClick={handleCreate}
        />
        {/* {renderJoin()} */}
      </form>
      <div>
        {playerCount <= 1
          ? "No Players Online"
          : `Total players online: ${playerCount.length}`}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Welcome;
