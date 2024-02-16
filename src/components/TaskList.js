
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {

            const response = await axios.get('https://localhost:5001/api/tasks');
            console.log(response.data);
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error.message);
        }
    };
    const markAsCompleted = async (taskId) => {
      try {
          await axios.put(`https://localhost:5001/api/tasks/${taskId}`, { isCompleted: true });
          // Update the local state to reflect the change
          setTasks(tasks.map(task => (task.id === taskId ? { ...task, isCompleted: true } : task)));
      } catch (error) {
          console.error('Error marking task as completed:', error.message);
      }
  };
    return (
        <div>
            <h1>Task Tracker</h1>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.description} - Due: {task.dueDate}
                        {!task.isCompleted && <button onClick={() => markAsCompleted(task.id)}>Mark as Completed</button>}
   
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;