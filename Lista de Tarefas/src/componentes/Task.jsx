import React from 'react';

import './Task.css';
import {CgClose, CgInfo} from 'react-icons/cg';
import { useHistory } from 'react-router-dom';


//modelo de tarefa
const Task = ({ task , handleTaskClick, removeTarefa  }) => {
    const history = useHistory();
    const handleTaskDetailsClick = () =>{
        history.push(`/${task.title.split("/").join("-")}`); 
    }
    return(
        <div className="task-container" 
        style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            <div className="task-title" 
            onClick={() => handleTaskClick(task.id) }>
                {task.title}
             </div>
             <div className="buttons-container" >
                    <button className="seeTaskButton" onClick={ handleTaskDetailsClick} ><CgInfo /></button>
                    <button className="removeTaskButton" onClick={() => removeTarefa(task.id)}><CgClose /></button>
             </div>
        </div>

     );

     //return (<div className="task-container"><h1 className="task-title">{task.title}</h1></div>
};
export default Task;