const express = require('express');
const cors = require('cors');

// setting up the web server
const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req,res) => res.send('Welcome'));

const leaderboardRoutes = require('./routes/leaderboard')
server.use('/leaderboard', leaderboardRoutes)

module.exports = server