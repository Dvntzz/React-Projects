import React from 'react';
import './AddTask.css'
import Button from './Button'

const AddTask = ({handleTeskAddition}) => {
      const [inputData, setInputData] = React.useState("");

      const handleInputChange = (e) => {
            setInputData(e.target.value);
      };

      const handleAddTeskClick = () => {
            if(inputData === ""){
                  alert("A tarefa precisa de um nome!")
            }else{
                  handleTeskAddition(inputData);
                  setInputData("");
            }
      }

    return (
          <div className="add-task-container">
                <input onChange={handleInputChange}
                 value={inputData}
                 className="add-task-input" 
                 type="text" 
                 />
                <div className="add-task-button-container">
                  <Button onClick={handleAddTeskClick}>Adicionar</Button>
                </div>
          </div>
      );
};
 
export default AddTask;