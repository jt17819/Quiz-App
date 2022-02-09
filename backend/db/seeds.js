const db = connect("mongodb://localhost:27017/quizzicaldb");

db.leaderboard.drop()

db.leaderboard.insertMany([
    { category: '', players: [{ name: 'test', score: 10 }, { name: 'test2', score: 1 }, { name: 'Amir', score: 0 }] },
    { category: 'General Knowledge', players: [{ name: 'test3', score: 9 }] },
    { category: 'Entertainment: Books', players: [{ name: 'test4', score: 8 }] },
    { category: 'Entertainment: Film', players: [{ name: 'test5', score: 7 }] }
]);