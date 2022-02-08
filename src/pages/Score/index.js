import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import {ResultsBanner} from '../../components';

const Score = () => {
    const username = useSelector((state) => state.user.user.username)
    const score = useSelector((state)=> state.quizReducer.score) //get score from state
    const results = useSelector((state) => state.quizReducer.results);
    const [allScores, setAllScores] = useState("")
    const [players, setPlayers] = useState("")
    const room = useSelector((state) => state.user.room)

    return (
        <div id="score-page">
            <div id="playerscore">
                <h2>You scored: {score} points</h2>
            </div>
        </div>
    )
}

export default Score;