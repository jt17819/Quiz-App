const Leaderboard = require('../models/leaderboard'); 

// index
async function index (req, res) {
    try{
        console.log('here')
        const leaderboard = await Leaderboard.all;
        res.status(200).json(leaderboard)
    } catch (err) {
        res.status(500).json({err});
    }
}

async function upsert(req,res) {
    try{
        const leaderboard = await Leaderboard.findByOrCreate(req.body.category, req.body.name, req.body.score);
        console.log(req.body.category, req.body.name, req.body.score);
        res.status(200).json(leaderboard);
    }catch(err){
        res.status(500).json({err})
    }
}

module.exports = {index, upsert}