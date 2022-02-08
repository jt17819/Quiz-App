import React from "react";
import "./style.css"

const PlayerBubble = ({player}) => {

    return(
        <p role="playerbubble" className="bubble">{player}</p>
    )

}


export default PlayerBubble; 