const { init } = require("../dbConfig");

// const {ObjectId} = require('mongodb')

module.exports = class Leaderboard {
  constructor(data) {
    this.id = data.id;
    this.category = data.category;
    this.players = data.players;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("model");
        const db = await init();
        const leaderboardData = await db
          .collection("leaderboard")
          .find()
          .toArray();
        console.log(leaderboardData);
        const leaderboard = leaderboardData.map(
          (l) => new Leaderboard({ ...l, id: l._id })
        );
        resolve(leaderboard);
      } catch (err) {
        reject("Couldnt Retrieve Leaderboard");
      }
    });
  }
  static findByOrCreate(category, name, score) {
    return new Promise(async (resolve, reject) => {
      console.log(category, name, score);
      try {
        const db = await init();
        const leaderboardData = await db
          .collection("leaderboard")
          .find({ category: category })
          .toArray();
        console.log(leaderboardData);
        const players = leaderboardData[0]?leaderboardData[0].players:[]
        console.log(players);
        const player = players.find((p) => p.name === name);
        console.log(player);
        if (player) {
          player.score += parseInt(score);
          const newPlayers = players.map((p) => {
            return p.name === name ? player : p;
          });
          console.log(newPlayers);
          const updatedLeaderboard = db
            .collection("leaderboard")
            .updateOne(
              { category: category },
              { $set: { players: newPlayers } },
              { upsert: true }
            );
          resolve(updatedLeaderboard);
        } else {
          const newPlayer = { name: name, score: parseInt(score) };
          const newPlayers = JSON.parse(JSON.stringify(players));
          newPlayers.push(newPlayer);
          const updatedLeaderboard = db
            .collection("leaderboard")
            .updateOne(
              { category: category },
              { $set: { players: newPlayers } },
              { upsert: true }
            );
          resolve(updatedLeaderboard);
        }
        // const updatedLeaderboard = db
        //   .collection("leaderboard")
        //   .updateOne(
        //     { category: category },
        //     { $set: { players: newPlayers } },
        //     { upsert: true }
        //   );
        // console.log(updatedLeaderboard);
        // resolve(updatedLeaderboard);
      } catch (err) {
        reject(`Cant create stuff, ${err}`);
      }
    });
  }
};
