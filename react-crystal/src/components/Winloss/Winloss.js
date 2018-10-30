import React from "react";
import "./Winloss.css";

const Winloss = (props) =>(

    <div className="winLoss">
        <h2>Wins: {props.wins}</h2>
        <h2>Losses: {props.losses}</h2>
    </div>
)

export default Winloss;