import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { LeaderboardScore } from "..";

const LeaderboardTable = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      try {
        let { data } = await axios.get(`http://localhost:5000/leaderboard`);
        console.log(data);
        // data.sort((a, b) => b.score - a.score);
        setData(data);
      } catch (err) {
        setError(err.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="score-container">
        {data ? (
          data.map((data, i) => <LeaderboardScore key={i} data={data} />)
        ) : (
          <h4 id="loading">Loading Scores...</h4>
        )}
      </div>
    </>
  );
};

export default LeaderboardTable;
