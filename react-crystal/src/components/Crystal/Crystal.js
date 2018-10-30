import React from "react";
import "./Crystal.css";

const Crystal = props =>(
    <div className="img-container" onClick={()=>props.click(props.number)}>
            <img className="crystal" src={props.image}/>
    </div>
)

export default Crystal;