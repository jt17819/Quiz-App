import React from "react";
// import "./style.css";
import { LeaderboardTable } from "../../components";
import { useNavigate } from "react-router-dom";

function Leaderboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div id="Leaderboard-page">
      <h2>Leaderboard </h2>
      <LeaderboardTable />
      <button id="start-again" onClick={handleClick}>
        Start Again
      </button>
    </div>
  );
}
export default Leaderboard;
