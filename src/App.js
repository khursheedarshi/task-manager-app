
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const handleTaskAdded = newTask => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <TaskList tasks={tasks} />
            <AddTask onTaskAdded={handleTaskAdded} />
        </div>
    );
};

export default App;