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
        console.log('req',req.body)
        const leaderboard = await Leaderboard.findByOrCreate(req.body.body.category, req.body.body.name, req.body.body.score);
        console.log(req.body.body.category, req.body.body.name, req.body.body.score);
        res.status(200).json(leaderboard);
    }catch(err){
        res.status(500).json({err})
    }
}

module.exports = {index, upsert}