import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from "./componentes/Tasks.jsx";
import "./App.css";
import AddTask from './componentes/AddTask.jsx';
import Header from './componentes/Header.jsx';
import TaskDetails from './componentes/TaskDetails.jsx';


//Array com as tarefas
const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
		const fetchTasks = async () => {
        const {data} = await axios.get(
          "https://jsonplaceholder.cypress.io/todos?_limit=10"
			  );
        setTasks(data);
      };
      fetchTasks();
    }, []);



  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId)
        return{
          ...task, completed: !task.completed
        }
        return task;
    });

    setTasks(newTasks)
  };

  const removeTarefa = (taskId) => {
      const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks)
  };

  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [...tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed: false,
    }]

    setTasks(newTasks)
  }


  //container de tarefas
  return(
      <Router>
        <div className="container">
          <Header />
          <Route 
            path="/" 
            exact 
            render = {() => (
            <>
              <AddTask handleTeskAddition={handleTaskAddition} />
              <Tasks  tasks={tasks}  handleTaskClick={handleTaskClick}  removeTarefa={removeTarefa}/>
            </>
            )}
          />      
          <Route 
            path="/:TaskTitle" 
            exact
            component={TaskDetails}
            />
        </div>
      </Router>
  );
};

export default App;