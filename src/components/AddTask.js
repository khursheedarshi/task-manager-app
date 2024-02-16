import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ onTaskAdded }) => {
    const [newTask, setNewTask] = useState({ description: '', dueDate: '' });

    const addTask = async () => {
        try {
            const response = await axios.post('https://localhost:5001/api/tasks', newTask);
            console.log(response.data);
            onTaskAdded(response.data);
            
            setNewTask({ description: '', dueDate: '' });
        } catch (error) {
            console.error('Error adding task:', error.message);
        }
    };

    return (
        <div>
            <h2>Add New Task</h2>
            <input
                type="text"
                placeholder="Description"
                value={newTask.description}
                onChange={e => setNewTask({ ...newTask, description: e.target.value })}
            />
            <input
                type="date"
                placeholder="Due Date"
                value={newTask.dueDate}
                onChange={e => setNewTask({ ...newTask, dueDate: e.target.value })}
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
};

export default AddTask;