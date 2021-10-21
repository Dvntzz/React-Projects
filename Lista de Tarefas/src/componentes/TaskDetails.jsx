import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Button from "./Button";
import './TaskDetails.css';




const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();
    const handleBackButtonClick = () =>{
        history.goBack();
    }
    return (
        <>
            <div className="task-Details-Container">
                <h2 className="title">{params.TaskTitle}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae maximus augue.</p>
            </div>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
        </>
    );
}
 
export default TaskDetails;