import { useState } from "react";
import React from "react";
import App from "../App";

const Task = (props, {deleteTask}) => {
    const [visible, setVisible] = useState(false);
    

    return (
    <div className="taskDiv" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} >
        <h3 className="taskDetail">{props.detail}</h3>
        {visible ? <button onClick={() =>  deleteTask(props.index)} className="display-2 deleteBtn" >X</button> : null}
    </div>
    )
}

export default Task