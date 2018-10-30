import React from "react";
import "./Score.css";

const Score = props =>(

    <div className="scorebox">
        <div className="goal"><h2>Goal: {props.goal}</h2></div>
        <div className="score"><h2>Score: {props.score}</h2></div>
    </div>
    
)

export default Score;