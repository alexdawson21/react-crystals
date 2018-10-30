import React from "react";
import "./Instructions.css";

const Instructions = props => (
    <div className="instructions">
        <h2>Instructions</h2>
        <ul>
            <li>You will be given a random number at the beginning of the game.</li>
            <li>There are four crystal below. By clicking on a crystal, you will add a specific amount of points to your score.</li>
            <li>You win by matching your score to the random number given. You lose if your score goes over the random number given.</li>
            <li>The value of each crystal is hidden until you click on it.</li>
            <li>The values of th crystals will change each game.</li>
        </ul>
    </div>
)

export default Instructions;