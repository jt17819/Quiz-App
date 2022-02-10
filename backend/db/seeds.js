const db = connect("mongodb://localhost:27017/quizzicaldb");

db.leaderboard.drop();

db.leaderboard.insertMany([
  {
    category: "Any Category",
    players: [
      { name: "Jack", score: 4 },
      { name: "John", score: 1 },
      { name: "Amir", score: 10 },
    ],
  },
  { category: "General Knowledge", players: [{ name: "Josh", score: 9 }] },
  { category: "Entertainment: Books", players: [{ name: "Pete", score: 8 }] },
  { category: "Entertainment: Film", players: [{ name: "Zain", score: 7 }] },
]);
