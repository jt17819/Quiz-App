import React from "react";

const LeaderboardScore = ({ data }) => {
  console.log(data);
  const categoryName = data.category ? data.category : "Any Category";

  return (
    <p role="leaderboardScore" className="leaderboard-score">
      <span>{categoryName}</span>
      {/* <span>{data.players[0].name}</span>
      <span>{data.players[0].score}</span> */}
      {/* <span> : </span>  */}
      {/* <ul className="noBullets"> */}
      {data.players.map((p) => {
        return (
          <div>
            <p>
              {p.name}: {p.score}
            </p>
          </div>
        );
      })}
      {/* </ul> */}
    </p>
  );
};

export default LeaderboardScore;
