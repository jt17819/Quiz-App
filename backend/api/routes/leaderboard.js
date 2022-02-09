const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboard')

router.get('/', leaderboardController.index)
router.post('/', leaderboardController.upsert)

module.exports = router

