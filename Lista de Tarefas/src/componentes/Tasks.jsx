import React from 'react';
import Task from './Task';

//criador de tarefas
const Tasks = ({ tasks, handleTaskClick, removeTarefa  }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} handleTaskClick={handleTaskClick}
                removeTarefa={removeTarefa}/>
            ))}
        </>
    );
};

export default Tasks;